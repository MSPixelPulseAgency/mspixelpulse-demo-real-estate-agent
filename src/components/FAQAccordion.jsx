import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article className={`faq-item ${open ? 'open' : ''}`} key={item.question}>
            <button type="button" onClick={() => setOpenIndex(open ? -1 : index)} aria-expanded={open}>
              <span>{item.question}</span>
              <ChevronDown size={20} />
            </button>
            <div className="faq-panel" role="region">
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
