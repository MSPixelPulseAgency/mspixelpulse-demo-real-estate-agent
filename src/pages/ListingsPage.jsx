import { useSearchParams } from 'react-router-dom';
import PropertySearch from '../components/PropertySearch.jsx';

export default function ListingsPage() {
  const [params] = useSearchParams();
  const city = params.get('city') || '';
  const keyword = params.get('q') || '';
  const propertyType = params.get('type') || '';
  const price = params.get('price') || '';
  const beds = params.get('beds') || '';
  const sort = params.get('sort') || 'Recommended';

  return (
    <>
      <section className="listings-market-hero">
        <span className="eyebrow">Search listings</span>
        <h1>Browse demo homes with map-style discovery.</h1>
        <p>
          Filter fictional Canadian listings by city, property type, budget, bedrooms, lifestyle tags,
          and search intent. No real MLS or IDX data is used.
        </p>
      </section>
      <PropertySearch mode="full" initialFilters={{ city, keyword, propertyType, price, beds }} initialSort={sort} />
    </>
  );
}
