import { useMemo, useState } from 'react';

export default function MortgageCalculator() {
  const [price, setPrice] = useState(899000);
  const [down, setDown] = useState(120000);
  const [rate, setRate] = useState(5.2);
  const [term, setTerm] = useState(25);

  const estimate = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    if (!monthlyRate) return principal / months;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  }, [price, down, rate, term]);

  return (
    <div className="mortgage-calculator">
      <div>
        <span className="eyebrow">Mortgage snapshot</span>
        <h2>Estimate your demo monthly payment.</h2>
        <p>This calculator is a visual demo only and not financial advice.</p>
      </div>
      <div className="calc-card">
        <label><span>Home price</span><input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} /></label>
        <label><span>Down payment</span><input type="number" value={down} onChange={(event) => setDown(Number(event.target.value))} /></label>
        <label><span>Interest rate</span><input type="number" step="0.1" value={rate} onChange={(event) => setRate(Number(event.target.value))} /></label>
        <label><span>Term</span><select value={term} onChange={(event) => setTerm(Number(event.target.value))}><option value={20}>20 years</option><option value={25}>25 years</option><option value={30}>30 years</option></select></label>
        <div className="estimate-box">
          <small>Demo monthly estimate</small>
          <strong>${Math.round(estimate).toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
}
