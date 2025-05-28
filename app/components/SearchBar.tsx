"use client";

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: string;
  text: string;
  options?: string[];
  type: 'text' | 'select';
}

interface ConversationMessage {
  type: 'user' | 'ai';
  content: string;
  options?: string[];
}

export default function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  // Close search/conversation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setConversation([]);
        setCurrentQuestion(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Scroll to bottom of conversation
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  const simulateAIResponse = async (userQuery: string): Promise<ConversationMessage> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const lowerQuery = userQuery.toLowerCase();

    // Foundation flow
    if (lowerQuery.includes('foundation')) {
      return {
        type: 'ai',
        content: 'I can help you find the perfect foundation! What is your skin tone?',
        options: ['Fair', 'Medium', 'Tan', 'Deep', 'Dark'],
      };
    }

    // Add other product flows here...

    return {
      type: 'ai',
      content: 'I can help you find beauty products! What are you looking for?',
      options: ['Foundation', 'Lipstick', 'Skincare', 'Eyeshadow', 'Other'],
    };
  };

  const handleSearch = async (userQuery: string) => {
    if (!userQuery.trim()) return;

    setConversation(prev => [...prev, { type: 'user', content: userQuery }]);
    setQuery('');
    setIsSearchOpen(true);

    try {
      const response = await simulateAIResponse(userQuery);
      setConversation(prev => [...prev, response]);
      if (response.options) {
        setCurrentQuestion({
          id: Date.now().toString(),
          text: response.content,
          options: response.options,
          type: 'select',
        });
      } else {
        setCurrentQuestion(null);
      }
    } catch (error) {
      console.error('Error processing search:', error);
      setConversation(prev => [...prev, { type: 'ai', content: 'Sorry, something went wrong.' }]);
      setCurrentQuestion(null);
    }
  };

  const handleOptionSelect = async (option: string) => {
    setConversation(prev => [...prev, { type: 'user', content: option }]);
    setCurrentQuestion(null);

    try {
      const response = await simulateAIResponse(option);
      setConversation(prev => [...prev, response]);
      if (response.options) {
        setCurrentQuestion({
          id: Date.now().toString(),
          text: response.content,
          options: response.options,
          type: 'select',
        });
      } else {
        setCurrentQuestion(null);
      }
    } catch (error) {
      console.error('Error processing option:', error);
      setConversation(prev => [...prev, { type: 'ai', content: 'Sorry, something went wrong.' }]);
      setCurrentQuestion(null);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      handleSearch(query);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={searchContainerRef}>
      {/* Search Input Container */}
      <div className="relative flex items-center rounded-full bg-gray-100 h-10">
        {!isSearchOpen && !query && (
          <Search className="absolute left-3 text-gray-500" size={20} />
        )}
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Search products..."
          className="w-full h-full pl-10 pr-4 bg-transparent focus:outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Search Results/Conversation */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg max-h-[80vh] overflow-hidden"
          >
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={conversationEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 