import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MobileNav from '../MobileNav';
import React, { useState } from 'react';

// Helper component to wrap MobileNav and provide props for testing
const MobileNavTestWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />;
};

describe('MobileNav', () => {
  beforeEach(() => {
    // Mock console.log for analytics tracking
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the menu button', () => {
    render(<MobileNavTestWrapper />);
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  it('opens the menu when clicking the button', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(button);
    expect(screen.getByRole('navigation', { name: /mobile menu/i })).toBeInTheDocument();
  });

  it('closes the menu when clicking outside', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByRole('button', { name: /toggle menu/i });
    
    // Open menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation', { name: /mobile menu/i })).toBeInTheDocument();
    
    // Click outside
    fireEvent.click(document.body);
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(button);

    const navLinks = [
      'Home',
      'Shop All',
      'Brands',
      'Skincare',
      'Makeup',
      'Lipcare',
      'Nails',
      'Accessories',
    ];

    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('closes menu when clicking a link', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByRole('button', { name: /toggle menu/i });
    
    // Open menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation', { name: /mobile menu/i })).toBeInTheDocument();
    
    // Click a link
    fireEvent.click(screen.getByText('Home'));
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument();
  });

  it('closes menu when pressing Escape', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByRole('button', { name: /toggle menu/i });
    
    // Open menu
    fireEvent.click(button);
    expect(screen.getByRole('navigation', { name: /mobile menu/i })).toBeInTheDocument();
    
    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByTestId('menu-button');
    fireEvent.click(button);
    
    expect(screen.getByTestId('menu-item-home')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-shop-all')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-brands')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-skincare')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-makeup')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-lipcare')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-nails')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-accessories')).toBeInTheDocument();
  });

  it('closes menu and tracks navigation when clicking a menu item', () => {
    render(<MobileNavTestWrapper />);
    const button = screen.getByTestId('menu-button');
    fireEvent.click(button);
    
    const homeLink = screen.getByTestId('menu-item-home');
    fireEvent.click(homeLink);
    
    expect(screen.queryByTestId('menu-drawer')).not.toBeInTheDocument();
    expect(console.log).toHaveBeenCalled();
  });
}); 