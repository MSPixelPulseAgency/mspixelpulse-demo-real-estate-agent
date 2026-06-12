import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ListingsPage from './pages/ListingsPage.jsx';
import BuyersPage from './pages/BuyersPage.jsx';
import SellersPage from './pages/SellersPage.jsx';
import MortgagePage from './pages/MortgagePage.jsx';
import NeighborhoodsPage from './pages/NeighborhoodsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
import AIHomeMatch from './components/AIHomeMatch.jsx';
import MobileBottomBar from './components/MobileBottomBar.jsx';

const pageMeta = {
  '/': {
    title: 'MS PixelPulse Realty Group | Real Estate Website Demo Canada',
    description:
      'A premium React real estate website Canada demo for realtors, mortgage agents, property consultants, buyer leads, seller leads, and listing marketing.',
  },
  '/about': {
    title: 'About | MS PixelPulse Realty Group',
    description:
      'Learn about this fictional Canadian realtor website template created for premium property marketing and real estate lead generation.',
  },
  '/listings': {
    title: 'Featured Listings | MS PixelPulse Realty Group',
    description:
      'Browse demo property listing website cards for Toronto, Brampton, Mississauga, Hamilton, Milton, and more Canadian markets.',
  },
  '/buyers': {
    title: 'Buyer Resources | MS PixelPulse Realty Group',
    description:
      'Buyer resources for a Canadian realtor website with home search planning, mortgage pre-approval prompts, and buyer lead generation.',
  },
  '/sellers': {
    title: 'Seller Strategy | MS PixelPulse Realty Group',
    description:
      'Seller lead generation website page with demo valuation forms, listing marketing content, and premium property presentation.',
  },
  '/mortgage': {
    title: 'Mortgage Support | MS PixelPulse Realty Group',
    description:
      'Mortgage agent website demo page with general pre-approval, renewal, refinance, and affordability planning inquiry sections.',
  },
  '/neighborhoods': {
    title: 'Neighborhoods | MS PixelPulse Realty Group',
    description:
      'Local landing page examples for a real estate agent website Toronto and surrounding Canadian communities.',
  },
  '/services': {
    title: 'Real Estate Services | MS PixelPulse Realty Group',
    description:
      'Service cards for buyer representation, seller strategy, mortgage consultation layout, investment support, and property consultant website content.',
  },
  '/testimonials': {
    title: 'Testimonials | MS PixelPulse Realty Group',
    description: 'Demo testimonials for a Canadian realtor website template. All reviews are fictional placeholders.',
  },
  '/faq': {
    title: 'FAQ | MS PixelPulse Realty Group',
    description:
      'FAQ content for a React real estate website and Vite real estate website demo, including MLS, IDX, CRM, and Vercel questions.',
  },
  '/contact': {
    title: 'Contact | MS PixelPulse Realty Group',
    description:
      'Contact page and lead form for a fictional Toronto real estate landing page demo by MSPixelPulseAgency.',
  },
};

function ScrollAndMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const meta = pageMeta[pathname] || pageMeta['/listings'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollAndMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listings/:id" element={<PropertyDetailPage />} />
          <Route path="/buyers" element={<BuyersPage />} />
          <Route path="/sellers" element={<SellersPage />} />
          <Route path="/mortgage" element={<MortgagePage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <AIHomeMatch />
      <MobileBottomBar />
      <Footer />
    </>
  );
}
