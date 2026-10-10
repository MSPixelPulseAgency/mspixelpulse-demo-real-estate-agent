import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails.jsx';
import { listings } from '../data/listingsData.js';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id) || listings[0];

  return <PropertyDetails listing={listing} />;
}
