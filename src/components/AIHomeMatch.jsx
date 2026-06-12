import { useState } from 'react';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const prompts = ['Find homes near me', 'Compare cities', 'Help me buy my first home', 'Estimate my budget', 'I want to sell my home'];

const responses = {
  'Find homes near me': 'Demo response: Start with Toronto, Brampton, Mississauga, Vaughan, and Milton. I can filter by city, budget, beds, and property type using the demo listings.',
  'Compare cities': 'Demo response: Toronto is positioned for condo and transit browsing, Brampton for family detached homes, Mississauga for townhomes, and Hamilton for investment-style demo searches.',
  'Help me buy my first home': 'Demo response: Try 2-3 bedroom homes under $900K, compare monthly payment estimates, and use the buyer inquiry form before speaking with licensed professionals.',
  'Estimate my budget': 'Demo response: Use the mortgage calculator as a placeholder planning tool. This demo does not provide mortgage, financial, legal, or investment advice.',
  'I want to sell my home': 'Demo response: The seller flow can capture valuation requests, property details, and listing-prep questions, then route leads to a future CRM or email workflow.',
};

export default function AIHomeMatch() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to AI Home Match. I can help narrow cities, budgets, property types, and buyer goals in this demo experience.' },
  ]);

  const sendPrompt = (text) => {
    const cleanText = text.trim();
    if (!cleanText) return;
    setMessages((current) => [
      ...current,
      { from: 'user', text: cleanText },
      { from: 'bot', text: responses[cleanText] || 'Demo response: I can suggest fictional listings, compare nearby Canadian communities, and prepare safer questions before you speak with licensed professionals.' },
    ]);
    setDraft('');
  };

  return (
    <>
      <button className="ai-floating-button" type="button" onClick={() => setOpen(true)}>
        <Sparkles size={18} />
        AI Home Match
      </button>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="ai-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            aria-label="AI Home Match demo panel"
          >
            <div className="ai-head">
              <div><Bot size={20} /><strong>AI Home Match</strong></div>
              <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close AI Home Match">
                <X size={18} />
              </button>
            </div>
            <div className="ai-messages">
              {messages.map((message, index) => (
                <p className={message.from} key={`${message.from}-${index}`}>{message.text}</p>
              ))}
            </div>
            <div className="quick-prompts">
              {prompts.map((prompt) => <button type="button" key={prompt} onClick={() => sendPrompt(prompt)}>{prompt}</button>)}
            </div>
            <label className="ai-input">
              <span className="sr-only">Ask about homes, cities, or budget</span>
              <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about homes, cities, or budget" onKeyDown={(event) => {
                if (event.key === 'Enter' && event.currentTarget.value.trim()) {
                  sendPrompt(event.currentTarget.value.trim());
                }
              }} />
              <button type="button" aria-label="Send demo AI message" onClick={() => sendPrompt(draft)}><Send size={18} /></button>
            </label>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
