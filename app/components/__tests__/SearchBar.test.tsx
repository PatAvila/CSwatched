import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('renders the search input', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
  });

  it('shows clear button when input has text', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('clears input when clear button is clicked', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'test' } });
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    expect(input).toHaveValue('');
  });

  it('shows search results when searching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'foundation' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('I can help you find the perfect foundation! What is your skin tone?')).toBeInTheDocument();
    });
  });

  it('shows options when available', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'foundation' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('Fair')).toBeInTheDocument();
      expect(screen.getByText('Medium')).toBeInTheDocument();
      expect(screen.getByText('Tan')).toBeInTheDocument();
      expect(screen.getByText('Deep')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
    });
  });

  it('handles option selection', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search products...');
    
    // Search for foundation
    fireEvent.change(input, { target: { value: 'foundation' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    // Wait for options to appear and select one
    await waitFor(() => {
      expect(screen.getByText('Fair')).toBeInTheDocument();
    });
    
    fireEvent.click(screen.getByText('Fair'));

    // Check for next question
    await waitFor(() => {
      expect(screen.getByText('What type of coverage are you looking for?')).toBeInTheDocument();
    });
  });
}); 