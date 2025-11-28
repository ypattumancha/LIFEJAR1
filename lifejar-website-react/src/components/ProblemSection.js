import React from 'react';

const problems = [
  {
    title: 'Fragmented Finances',
    description: 'Managing multiple accounts, cards and apps leads to confusion and fees.',
  },
  {
    title: 'High Remittance Fees',
    description: 'Sending money across borders is expensive and slow.',
  },
  {
    title: 'No Tools for Kids & Teens',
    description: 'Traditional banks don’t offer safe, educational accounts for children and teens.',
  },
  {
    title: 'Senior Safety & Support',
    description: 'Elders often lack digital tools and can be vulnerable to scams.',
  },
];

const ProblemSection = () => {
  return (
    <section className="problem">
      <div className="container">
        <h2>Why Families Need a Unified Wallet</h2>
        <div className="cards">
          {problems.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
