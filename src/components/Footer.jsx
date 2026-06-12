import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <span className="eyebrow">MSPixelPulseAgency demo</span>
          <h2>MS PixelPulse Realty Group</h2>
          <p>
            A fictional premium real estate website demo for Canadian realtors, mortgage agents, property
            consultants, and real estate teams.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/listings">Listings</Link>
          <Link to="/buyers">Buyers</Link>
          <Link to="/sellers">Sellers</Link>
          <Link to="/mortgage">Mortgage</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p><MapPin size={16} /> Toronto, Ontario, Canada</p>
          <p><Phone size={16} /> +1 (000) 000-0000</p>
          <p><Mail size={16} /> hello@mspixelpulse.com</p>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>
          This is a fictional demo website created by MSPixelPulseAgency. All listings, prices, statistics,
          and contact details are placeholders.
        </p>
        <p>
          This demo does not provide real estate, financial, mortgage, legal, or investment advice. Real
          clients should speak with licensed professionals. Property listings shown are demo examples only
          and do not represent real available properties.
        </p>
      </div>
    </footer>
  );
}
