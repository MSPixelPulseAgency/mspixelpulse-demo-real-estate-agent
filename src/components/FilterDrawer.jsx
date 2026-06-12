import { X } from 'lucide-react';

const advancedOptions = [
  'Parking',
  'Basement',
  'New listings',
  'Open house',
  'Move-in ready',
  'Waterfront',
  'Luxury homes',
  'Investment friendly',
  'Family friendly',
  'Near transit',
  'Near schools',
];

export default function FilterDrawer({ open, filters, onChange, onClose, onClear, resultCount = 0 }) {
  return (
    <div className={`drawer-shell ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Close filters" />
      <aside className="filter-drawer" aria-label="Advanced listing filters">
        <div className="drawer-head">
          <div>
            <span className="eyebrow">More filters</span>
            <h3>Refine your demo search</h3>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close filter drawer">
            <X size={20} />
          </button>
        </div>
        <div className="drawer-grid">
          <label>
            <span>Baths</span>
            <select value={filters.baths} onChange={(event) => onChange('baths', event.target.value)}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>
          <label>
            <span>Home size</span>
            <select value={filters.size} onChange={(event) => onChange('size', event.target.value)}>
              <option value="">Any</option>
              <option value="900">900+ sq ft</option>
              <option value="1500">1,500+ sq ft</option>
              <option value="2200">2,200+ sq ft</option>
              <option value="3000">3,000+ sq ft</option>
            </select>
          </label>
          <label>
            <span>Lot size</span>
            <select value={filters.lot} onChange={(event) => onChange('lot', event.target.value)}>
              <option value="">Any</option>
              <option>Compact</option>
              <option>Standard</option>
              <option>Large demo lot</option>
            </select>
          </label>
        </div>
        <div className="toggle-chip-grid">
          {advancedOptions.map((option) => {
            const selected = filters.advanced.includes(option);
            return (
              <button
                className={`filter-chip ${selected ? 'selected' : ''}`}
                key={option}
                type="button"
                onClick={() => onChange('advanced', option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="drawer-actions">
          <button className="btn secondary" type="button" onClick={onClear}>Clear filters</button>
          <button className="btn primary" type="button" onClick={onClose}>Show {resultCount} demo results</button>
        </div>
      </aside>
    </div>
  );
}
