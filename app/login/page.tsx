"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Instagram, Facebook } from 'lucide-react';

export default function LoginPage() {
  const [marketingEmail, setMarketingEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    // Basic email format validation regex
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!marketingEmail) {
      setEmailError('Email is required.');
      return;
    }

    if (!validateEmail(marketingEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // If validation passes, you would typically send the email to your backend here.
    // For now, we'll just clear the error and the input.
    setEmailError('');
    console.log('Subscribing email:', marketingEmail);
    setMarketingEmail(''); // Clear input after supposed submission

    // Add your subscription logic here (e.g., API call)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-light tracking-wide text-black">SWATCHED</h1>
        <h2 className="text-xl text-blue-600 mt-2">Your Personal Beauty Agent</h2>
        <p className="mt-4 text-gray-700 max-w-md mx-auto">
          The first beauty products marketplace using AI and skin science to make personalized color match recommendations
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-6">
          <Input type="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>
        <Button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
          Friends & Family Login
        </Button>
      </div>

      <p className="mt-8 text-lg text-gray-800">Launching soon.</p>

      {/* Marketing Email Subscription Section */}
      <div className="mt-8 text-center w-full max-w-sm">
        <p className="text-gray-700 mb-2">Subscribe to our newsletter for exclusive updates, new arrivals, and special offers from Swatched.com. Be the first to know—just enter your email below!</p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            value={marketingEmail}
            onChange={(e) => setMarketingEmail(e.target.value)}
          />
          <Button onClick={handleSubscribe} className="bg-black hover:bg-gray-800 text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
            Subscribe
          </Button>
        </div>
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-700">Brand Partnership Inquiries:</p>
        <a href="mailto:partnersuccess@swatched.com" className="text-blue-600 hover:underline">partnersuccess@swatched.com</a>
      </div>

      <div className="flex space-x-6 mt-8">
        <Link href="#" className="text-gray-700 hover:text-blue-600">
          <Instagram size={28} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-blue-600">
          <Facebook size={28} />
        </Link>
      </div>
    </div>
  );
} 