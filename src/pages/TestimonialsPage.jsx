import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { testimonials } from '../data/testimonialsData.js';

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        eyebrow="Demo testimonials"
        title="Fictional reviews that show how trust content can support conversion."
        text="No real names or real client reviews are used. These testimonials are placeholder examples for presentation only."
        primaryLabel="Start Inquiry"
        primaryTo="/contact"
        secondaryLabel="View Services"
        secondaryTo="/services"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Premium home exterior for real estate testimonial page"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="Review categories" title="Buyers, sellers, investors, and mortgage inquiries." />
        <div className="testimonial-grid">{testimonials.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.name} />)}</div>
      </section>
      <ContactCTA title="Use trust sections to support serious real estate leads." text="Real production websites should only use authorized reviews, accurate names, and approved client proof." />
    </>
  );
}
