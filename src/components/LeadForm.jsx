import { useState } from 'react';
import { submitInquiry } from '../lib/mspInquiry.js';
// Demo inquiry form. Submits to the central MSPixelPulse inquiry pipeline; nothing here books a showing, lists a property
// or commits anyone to anything. Field names name/email/phone/message map directly; every other field is kept as a detail.
const DIRECT = new Set(['name', 'email', 'phone', 'message']);
const labelOf = (fields, key) => fields.find((f) => f.name === key)?.label || key;
export default function LeadForm({ fields, buttonLabel = 'Send Inquiry', note, formType = 'contact', propertyRef = null }) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = {};
    for (const field of fields) if (!DIRECT.has(field.name)) { const v = String(data.get(field.name) || '').trim(); if (v) details[labelOf(fields, field.name).slice(0, 40)] = v; }
    if (propertyRef) details['Property'] = String(propertyRef).slice(0, 300);
    setStatus('loading'); setError('');
    const result = await submitInquiry({
      formType, name: data.get('name'), email: data.get('email'), phone: data.get('phone') || undefined,
      service: String(data.get('inquiryType') || data.get('propertyGoal') || '').trim() || undefined,
      message: String(data.get('message') || '').trim() || 'Inquiry submitted from the demo website (no message written).',
      details, consent: data.get('consent') === 'on', honeypot: data.get('company_website'),
    });
    if (result.ok) { setStatus('success'); event.target.reset(); } else { setStatus('error'); setError(result.error); }
  }
  if (status === 'success') return (
    <div className="lead-form" role="status">
      <p><strong>Thank you. Your request was received by MSPixelPulse.</strong></p>
      <p>Someone will reply by email. This is a demo website: no showing, listing or appointment has been created.</p>
      <button className="btn primary" type="button" onClick={() => setStatus('idle')}>Send another message</button>
    </div>
  );
  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name} className={field.type === 'textarea' ? 'full' : ''}>
            <span>{field.label}</span>
            {field.type === 'select' ? (
              <select name={field.name} defaultValue="">
                <option value="" disabled>{field.placeholder || 'Select an option'}</option>
                {field.options.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea name={field.name} rows="5" placeholder={field.placeholder} />
            ) : (
              <input name={field.name} type={field.type || 'text'} placeholder={field.placeholder} required={DIRECT.has(field.name) && field.name !== 'phone' && field.name !== 'message'} />
            )}
          </label>
        ))}
        <label className="full" style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
          <input type="checkbox" name="consent" required style={{ marginTop: '0.3rem' }} />
          <span>I agree to be contacted about this request. This is a demo website; no booking, order or appointment is created.</span>
        </label>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label>Company website<input type="text" name="company_website" tabIndex="-1" autoComplete="off" /></label>
        </div>
      </div>
      {note && <p className="form-note">{note}</p>}
      <p className="form-note">Demo website. Your request goes to MSPixelPulse Web Solutions, who will reply by email.</p>
      {status === 'error' && <p className="form-note" role="alert">{error}</p>}
      <button className="btn primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : buttonLabel}</button>
    </form>
  );
}
