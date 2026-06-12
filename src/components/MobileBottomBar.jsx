import { Bot, Home, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Mobile quick actions">
      <Link to="/"><Search size={18} /> Search</Link>
      <Link to="/listings"><Home size={18} /> Listings</Link>
      <button type="button" onClick={() => document.querySelector('.ai-floating-button')?.click()}><Bot size={18} /> AI Match</button>
      <Link to="/contact"><Mail size={18} /> Contact</Link>
    </nav>
  );
}
