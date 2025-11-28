import React from 'react';
import { FaWallet, FaCreditCard, FaMobileAlt, FaRocket, FaChartBar, FaGift } from 'react-icons/fa';

const features = [
  {
    icon: <FaWallet className="icon" />, 
    title: 'Multi‑currency Wallet',
    description: 'Store CAD, USD & MXN, switch instantly, get fair FX rates.',
  },
  {
    icon: <FaCreditCard className="icon" />,
    title: 'Bill Pay & Subscriptions',
    description: 'Pay utilities, mobile, rent, taxes and more on autopilot.',
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: 'Smart Allowances',
    description: 'Automated, educational allowances and spending controls.',
  },
  {
    icon: <FaRocket className="icon" />,
    title: 'Cross‑Border Remittance',
    description: 'Send money abroad in seconds via ACH, RTP or SPEI.',
  },
  {
    icon: <FaChartBar className="icon" />,
    title: 'Rewards & Cashback',
    description: 'Earn points and cashback on bills, shopping and saving.',
  },
  {
    icon: <FaGift className="icon" />,
    title: 'Marketplace & Services',
    description: 'Find local gigs, pay securely and review trusted providers.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Everything You Need. In One App.</h2>
        <div className="cards">
          {features.map((item, idx) => (
            <div className="card" key={idx}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
