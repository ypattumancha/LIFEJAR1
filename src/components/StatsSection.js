import React from 'react';

const stats = [
  { label: 'Digital wallet market Canada', value: '$10.9B' },
  { label: 'US adults using wallets', value: '57%' },
  { label: 'Gen Z adoption', value: '91%' },
  { label: 'Mexico POS via mobile wallets', value: '17%' },
  { label: 'Remittances annually', value: '$64.7B' },
];

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="container">
        <h2>Market Opportunity</h2>
        <div className="cards">
          {stats.map((item) => (
            <div className="card" key={item.label}>
              <div className="value">{item.value}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
