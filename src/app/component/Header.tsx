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
    <header className="header">
      
      <h1 style={{textAlign:"center", paddingLeft:"60px" , paddingTop:"5px"}}>Cat Blog</h1>
      <nav>
        <div className="menuIcon" onClick={toggleMenu}>
          <img src="/menu.png" alt="Menu Icon" />
        </div>
        <ul className={`navList ${menuOpen ? 'show' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/#cards-section" onClick={closeMenu}>Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}
