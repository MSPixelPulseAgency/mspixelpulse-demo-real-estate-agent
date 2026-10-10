import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpDown, ListFilter, Map } from 'lucide-react';
import { listings as allListings } from '../data/listingsData.js';
import SearchBar, { defaultFilters } from './SearchBar.jsx';
import FilterDrawer from './FilterDrawer.jsx';
import ListingCard from './ListingCard.jsx';
import MapPreview from './MapPreview.jsx';

function matchesPrice(listing, range) {
  if (!range) return true;
  const [min, max] = range.split('-').map((value) => (value ? Number(value) : null));
  if (min && listing.priceNumber < min) return false;
  if (max && listing.priceNumber > max) return false;
  return true;
}

function filterListings(filters) {
  const keyword = filters.keyword.trim().toLowerCase();
  return allListings.filter((listing) => {
    const haystack = `${listing.title} ${listing.address} ${listing.city} ${listing.province} ${listing.propertyType} ${listing.tags.join(' ')}`.toLowerCase();
    return (
      (!keyword || haystack.includes(keyword)) &&
      (!filters.city || listing.city === filters.city) &&
      (!filters.propertyType || listing.propertyType === filters.propertyType || listing.tags.includes(filters.propertyType)) &&
      matchesPrice(listing, filters.price) &&
      (!filters.beds || listing.beds >= Number(filters.beds)) &&
      (!filters.baths || listing.baths >= Number(filters.baths)) &&
      (!filters.size || listing.sqft >= Number(filters.size)) &&
      filters.advanced.every((tag) => listing.tags.includes(tag) || listing.features.join(' ').includes(tag))
    );
  });
}

function sortListings(items, sort) {
  const next = [...items];
  if (sort === 'Price Low to High') next.sort((a, b) => a.priceNumber - b.priceNumber);
  if (sort === 'Price High to Low') next.sort((a, b) => b.priceNumber - a.priceNumber);
  if (sort === 'Most Bedrooms') next.sort((a, b) => b.beds - a.beds);
  if (sort === 'Newest') next.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  return next;
}

export default function PropertySearch({ mode = 'full', initialFilters = {} }) {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ ...defaultFilters, ...initialFilters });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sort, setSort] = useState('Recommended');

  const filteredListings = useMemo(() => sortListings(filterListings(filters), sort), [filters, sort]);
  const selectedChips = [
    filters.keyword && `Search: ${filters.keyword}`,
    filters.city,
    filters.propertyType,
    filters.price && 'Price selected',
    filters.beds && `${filters.beds}+ beds`,
    ...filters.advanced,
  ].filter(Boolean);

  const handleChange = (key, value) => {
    setFilters((current) => {
      if (key === 'advanced') {
        const exists = current.advanced.includes(value);
        return { ...current, advanced: exists ? current.advanced.filter((item) => item !== value) : [...current.advanced, value] };
      }
      return { ...current, [key]: value };
    });
  };

  const clearFilters = () => setFilters(defaultFilters);
  const shown = mode === 'preview' ? filteredListings.slice(0, 6) : filteredListings;
  const runSearch = () => {
    if (mode === 'full' || mode === 'preview') return;
    const params = new URLSearchParams();
    if (filters.city) params.set('city', filters.city);
    if (filters.keyword) params.set('q', filters.keyword);
    if (filters.propertyType) params.set('type', filters.propertyType);
    if (filters.price) params.set('price', filters.price);
    if (filters.beds) params.set('beds', filters.beds);
    navigate(`/listings${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className={`property-search ${mode}`}>
      <SearchBar filters={filters} onChange={handleChange} onSearch={runSearch} onOpenFilters={() => setDrawerOpen(true)} compact={mode === 'bar'} />
      <div className="results-toolbar">
        <div>
          <span className="eyebrow">Demo property search</span>
          <h2>{filteredListings.length} homes match your search</h2>
        </div>
        <div className="toolbar-actions">
          <label className="sort-control">
            <ArrowUpDown size={16} />
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {['Recommended', 'Newest', 'Price Low to High', 'Price High to Low', 'Most Bedrooms'].map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <button className="btn secondary mobile-filter" type="button" onClick={() => setDrawerOpen(true)}>
            <ListFilter size={17} /> Filters
          </button>
        </div>
      </div>
      {selectedChips.length > 0 && (
        <div className="selected-chip-row">
          {selectedChips.map((chip) => <span key={chip}>{chip}</span>)}
          <button type="button" onClick={clearFilters}>Clear filters</button>
        </div>
      )}
      <div className={mode === 'full' ? 'search-layout' : ''}>
        <div>
          <div className="listing-grid marketplace-grid">
            {shown.map((listing) => <ListingCard listing={listing} key={listing.id} />)}
          </div>
          {shown.length === 0 && (
            <div className="empty-state">
              <h3>No demo listings match those filters.</h3>
              <p>Try clearing filters or exploring nearby cities.</p>
              <button className="btn primary" type="button" onClick={clearFilters}>Reset Search</button>
            </div>
          )}
          {mode === 'preview' && <div className="center-action"><Link className="btn secondary" to="/listings">Open full search</Link></div>}
        </div>
        {mode === 'full' && <MapPreview listings={filteredListings} />}
      </div>
      <div className="mobile-floating-controls">
        <button type="button" onClick={() => setDrawerOpen(true)}><ListFilter size={18} /> Filters</button>
        <a href="#map-preview"><Map size={18} /> Map</a>
      </div>
      <FilterDrawer open={drawerOpen} filters={filters} onChange={handleChange} onClose={() => setDrawerOpen(false)} />
    </section>
  );
}
