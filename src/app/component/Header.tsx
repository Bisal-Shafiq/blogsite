"use client"; // Mark this as a Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
      {/* Logo Section */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/logo.png" 
          alt="Cat Blog Logo" 
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        />
        <h1 style={{ textAlign: "center", margin: 0 }}>Cat Blog</h1>
      </div>

      {/* Navigation */}
      <nav>
        <div className="menuIcon" onClick={toggleMenu}>
          <img src="/menu.png" alt="Menu Icon" />
        </div>
        <ul className={`navList ${menuOpen ? 'show' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="#cards-section" onClick={closeMenu}>Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}
