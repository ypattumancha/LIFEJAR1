import React from 'react';

const mockups = [
  { title: 'Home Screen' },
  { title: 'Wallet' },
  { title: 'Bills & Pay' },
  { title: 'Family Tab' },
  { title: 'Insights' },
];

const GallerySection = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h2>UI Gallery</h2>
        <div className="cards">
          {mockups.map((item) => (
            <div className="card mockup" key={item.title}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
