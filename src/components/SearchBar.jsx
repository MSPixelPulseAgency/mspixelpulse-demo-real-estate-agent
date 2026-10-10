import { MapPin, SlidersHorizontal, Search } from 'lucide-react';
import { cities, propertyTypes } from '../data/listingsData.js';

export const defaultFilters = {
  intent: 'Buy',
  keyword: '',
  city: '',
  propertyType: '',
  price: '',
  beds: '',
  baths: '',
  size: '',
  lot: '',
  advanced: [],
};

export const priceRanges = [
  { label: 'Any', value: '' },
  { label: 'Under $500K', value: '0-500000' },
  { label: '$500K - $750K', value: '500000-750000' },
  { label: '$750K - $1M', value: '750000-1000000' },
  { label: '$1M - $1.5M', value: '1000000-1500000' },
  { label: '$1.5M+', value: '1500000-' },
];

const tabs = ['Buy', 'Sell', 'Mortgage', 'Rent', 'Invest'];
const nearbyCities = ['Toronto', 'Brampton', 'Mississauga', 'Vaughan', 'Oakville', 'Milton', 'Hamilton', 'Markham', 'Richmond Hill', 'Scarborough', 'North York', 'Etobicoke'];

export default function SearchBar({ filters, onChange, onSearch, onOpenFilters, compact = false }) {
  return (
    <div className={`search-panel ${compact ? 'compact' : ''}`}>
      {!compact && (
        <div className="search-tabs" role="tablist" aria-label="Search intent">
          {tabs.map((tab) => (
            <button className={filters.intent === tab ? 'active' : ''} type="button" key={tab} onClick={() => onChange('intent', tab)}>
              {tab}
            </button>
          ))}
        </div>
      )}
      <div className="search-grid">
        <label className="search-field wide">
          <span>City / Area</span>
          <div className="input-icon">
            <MapPin size={18} />
            <input
              value={filters.keyword}
              onChange={(event) => onChange('keyword', event.target.value)}
              placeholder="Search city, neighborhood, or address"
            />
          </div>
        </label>
        <label className="search-field">
          <span>Property Type</span>
          <select value={filters.propertyType} onChange={(event) => onChange('propertyType', event.target.value)}>
            <option value="">Any</option>
            {propertyTypes.map((type) => <option key={type}>{type}</option>)}
            <option>Investment</option>
            <option>Rental</option>
          </select>
        </label>
        <label className="search-field">
          <span>Price Range</span>
          <select value={filters.price} onChange={(event) => onChange('price', event.target.value)}>
            {priceRanges.map((range) => <option value={range.value} key={range.label}>{range.label}</option>)}
          </select>
        </label>
        <label className="search-field">
          <span>Beds</span>
          <select value={filters.beds} onChange={(event) => onChange('beds', event.target.value)}>
            <option value="">Any</option>
            {[1, 2, 3, 4, 5].map((bed) => <option value={bed} key={bed}>{bed}+</option>)}
          </select>
        </label>
        <button className="btn filter-button" type="button" onClick={onOpenFilters}>
          <SlidersHorizontal size={18} />
          More
        </button>
        <button className="btn primary search-button" type="button" onClick={onSearch}>
          <Search size={18} />
          Search Homes
        </button>
      </div>
      {!compact && (
        <div className="nearby-row">
          <button className="nearby-main" type="button" onClick={() => onChange('city', '')}>Use Nearby Areas</button>
          <span>Explore homes near your city or browse nearby communities.</span>
          <div className="city-chip-scroll">
            {nearbyCities.map((city) => (
              <button className={filters.city === city ? 'selected' : ''} type="button" key={city} onClick={() => onChange('city', city)}>
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
