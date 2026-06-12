import { useState } from 'react';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const prompts = ['Find homes near me', 'Compare cities', 'Help me buy my first home', 'Estimate my budget', 'I want to sell my home'];

export default function AIHomeMatch() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to AI Home Match. I can help narrow cities, budgets, property types, and buyer goals in this demo experience.' },
  ]);

  const sendPrompt = (text) => {
    setMessages((current) => [
      ...current,
      { from: 'user', text },
      { from: 'bot', text: 'Demo response: I can compare nearby Canadian communities, suggest listing filters, and prepare questions before you speak with a licensed professional.' },
    ]);
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
              <input placeholder="Ask about homes, cities, or budget" onKeyDown={(event) => {
                if (event.key === 'Enter' && event.currentTarget.value.trim()) {
                  sendPrompt(event.currentTarget.value.trim());
                  event.currentTarget.value = '';
                }
              }} />
              <button type="button" aria-label="Send demo AI message"><Send size={18} /></button>
            </label>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
