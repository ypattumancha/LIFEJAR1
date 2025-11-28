import React from 'react';

const profiles = [
  {
    role: 'Kids',
    description: 'Smart allowances, spending controls and savings quests for children.',
  },
  {
    role: 'Teens',
    description: 'Debit card, budget breakdowns and the first steps into financial independence.',
  },
  {
    role: 'Adults',
    description: 'Multi‑currency wallet, bills, remittances and joint jars for shared goals.',
  },
  {
    role: 'Seniors',
    description: 'Protected accounts, bill reminders and trusted guardianship features.',
  },
];

const SolutionSection = () => {
  return (
    <section className="solution">
      <div className="container">
        <h2>One Wallet. Many Profiles.</h2>
        <div className="cards">
          {profiles.map((item) => (
            <div className="card" key={item.role}>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
