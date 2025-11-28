import React from 'react';

const phases = [
  {
    title: 'Phase 1: Canada',
    description: 'Launch in Canada with multi‑currency wallet, bills and marketplace.',
  },
  {
    title: 'Phase 2: United States',
    description: 'Expand to the U.S., add advanced banking & investments.',
  },
  {
    title: 'Phase 3: Mexico',
    description: 'Launch cross‑border remittances and marketplace into Mexico.',
  },
];

const RoadmapSection = () => {
  return (
    <section className="roadmap">
      <div className="container">
        <h2>Phased Roadmap</h2>
        <ul>
          {phases.map((phase) => (
            <li key={phase.title}>
              <h4>{phase.title}</h4>
              <p>{phase.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RoadmapSection;
