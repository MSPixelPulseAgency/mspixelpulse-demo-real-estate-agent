import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpDown, ListFilter, Map, MessageCircle, Sparkles } from 'lucide-react';
import { listings as allListings } from '../data/listingsData.js';
import SearchBar, { defaultFilters, priceRanges } from './SearchBar.jsx';
import FilterDrawer from './FilterDrawer.jsx';
import ListingCard from './ListingCard.jsx';
import MapPreview from './MapPreview.jsx';

const sortOptions = ['Recommended', 'Newest', 'Price Low to High', 'Price High to Low', 'Most Bedrooms'];

function matchesPrice(listing, range) {
  if (!range) return true;
  const [min, max] = range.split('-').map((value) => (value ? Number(value) : null));
  if (min !== null && listing.priceNumber < min) return false;
  if (max !== null && listing.priceNumber > max) return false;
  return true;
}

function textIncludes(value, query) {
  return String(value || '').toLowerCase().includes(query);
}

function filterListings(filters) {
  const keyword = filters.keyword.trim().toLowerCase();
  return allListings.filter((listing) => {
    const features = listing.features.join(' ');
    const tags = listing.tags.join(' ');
    const haystack = `${listing.title} ${listing.address} ${listing.city} ${listing.province} ${listing.propertyType} ${tags} ${features} ${listing.description} ${listing.neighborhood}`.toLowerCase();
    const typeQuery = filters.propertyType.toLowerCase();
    return (
      (!keyword || haystack.includes(keyword)) &&
      (!filters.city || textIncludes(listing.city, filters.city.toLowerCase())) &&
      (!filters.propertyType || textIncludes(listing.propertyType, typeQuery) || listing.tags.some((tag) => textIncludes(tag, typeQuery))) &&
      matchesPrice(listing, filters.price) &&
      (!filters.beds || listing.beds >= Number(filters.beds)) &&
      (!filters.baths || listing.baths >= Number(filters.baths)) &&
      (!filters.size || listing.sqft >= Number(filters.size)) &&
      filters.advanced.every((tag) => {
        if (tag === 'New listings') return listing.isNew;
        if (tag === 'Open house') return Boolean(listing.openHouse);
        const query = tag.toLowerCase();
        return textIncludes(tags, query) || textIncludes(features, query) || textIncludes(listing.description, query);
      })
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

export default function PropertySearch({ mode = 'full', initialFilters = {}, initialSort = 'Recommended' }) {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ ...defaultFilters, ...initialFilters });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions.includes(initialSort) ? initialSort : 'Recommended');

  const filteredListings = useMemo(() => sortListings(filterListings(filters), sort), [filters, sort]);
  const priceLabel = priceRanges.find((range) => range.value === filters.price)?.label;
  const selectedChips = [
    filters.keyword && `Search: ${filters.keyword}`,
    filters.city && `City: ${filters.city}`,
    filters.propertyType,
    filters.price && priceLabel,
    filters.beds && `${filters.beds}+ beds`,
    filters.baths && `${filters.baths}+ baths`,
    filters.size && `${Number(filters.size).toLocaleString()}+ sq ft`,
    ...filters.advanced,
  ].filter(Boolean);

  const handleChange = (key, value) => {
    setFilters((current) => {
      if (key === 'advanced') {
        const exists = current.advanced.includes(value);
        return { ...current, advanced: exists ? current.advanced.filter((item) => item !== value) : [...current.advanced, value] };
      }
      if (key === 'city') return { ...current, city: value, keyword: value || current.keyword };
      return { ...current, [key]: value };
    });
  };

  const clearFilters = () => {
    setFilters({ ...defaultFilters });
    setSort('Recommended');
  };
  const shown = mode === 'preview' ? filteredListings.slice(0, 6) : filteredListings;
  const runSearch = () => {
    if (mode === 'full' || mode === 'preview') return;
    const params = new URLSearchParams();
    if (filters.city) params.set('city', filters.city);
    if (filters.keyword) params.set('q', filters.keyword);
    if (filters.propertyType) params.set('type', filters.propertyType);
    if (filters.price) params.set('price', filters.price);
    if (filters.beds) params.set('beds', filters.beds);
    if (sort !== 'Recommended') params.set('sort', sort);
    navigate(`/listings${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className={`property-search ${mode}`}>
      <SearchBar filters={filters} onChange={handleChange} onSearch={runSearch} onOpenFilters={() => setDrawerOpen(true)} compact={mode === 'bar'} />
      <div className="results-toolbar">
        <div>
          <span className="eyebrow">Demo property search</span>
          <h2>{filteredListings.length} {filteredListings.length === 1 ? 'home matches' : 'homes match'} your search</h2>
          <p className="result-count">{allListings.length} fictional listings available across the Greater Toronto demo market.</p>
        </div>
        <div className="toolbar-actions">
          <label className="sort-control">
            <ArrowUpDown size={16} />
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {sortOptions.map((option) => <option key={option}>{option}</option>)}
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
              <Sparkles size={34} />
              <h3>No demo listings match those filters yet.</h3>
              <p>Try clearing filters, searching a nearby city, or ask MS PixelPulse Realty Group to help build a custom saved search.</p>
              <div className="empty-actions">
                <button className="btn primary" type="button" onClick={clearFilters}>Clear Filters</button>
                <Link className="btn secondary" to="/contact"><MessageCircle size={17} /> Contact Demo Team</Link>
              </div>
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
      <FilterDrawer open={drawerOpen} filters={filters} onChange={handleChange} onClose={() => setDrawerOpen(false)} onClear={clearFilters} resultCount={filteredListings.length} />
    </section>
  );
}
