import { MapPinned } from 'lucide-react';

export default function MapPreview({ listings = [] }) {
  const preview = listings.slice(0, 7);

  return (
    <aside className="map-preview" id="map-preview" aria-label="Map preview demo">
      <div className="map-toolbar">
        <span><MapPinned size={18} /> Map preview demo</span>
        <small>No live map API</small>
      </div>
      <div className="abstract-map">
        {preview.map((listing, index) => (
          <span
            className="map-pin"
            style={{ left: `${16 + (index * 12) % 68}%`, top: `${20 + (index * 17) % 58}%` }}
            key={listing.id}
          >
            {listing.priceLabel.replace(',000', 'K').replace('$1,', '$1.')}
          </span>
        ))}
        <div className="map-line one" />
        <div className="map-line two" />
        <div className="map-line three" />
      </div>
      <p>City pins and prices are fictional demo placeholders for a map/list browsing concept.</p>
    </aside>
  );
}
