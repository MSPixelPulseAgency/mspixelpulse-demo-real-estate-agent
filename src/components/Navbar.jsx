import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Listings', '/listings'],
  ['Buyers', '/buyers'],
  ['Sellers', '/sellers'],
  ['Mortgage', '/mortgage'],
  ['Neighborhoods', '/neighborhoods'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="MS PixelPulse Realty Group home">
        <span className="brand-mark">MS</span>
        <span>
          <strong>PixelPulse Realty</strong>
          <small>Canadian real estate demo</small>
        </span>
      </Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, path]) => (
          <NavLink key={label} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
          Book Consultation
        </Link>
      </nav>
    </header>
  );
}
