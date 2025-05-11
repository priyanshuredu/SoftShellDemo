import React from 'react';
import '../styles/WhyChooseUs.css';
import data from '../data/WhyChooseUs.json';

const WhyChooseUs = () => {
  return (
    <section className="services-container">
      {/* Header Section */}
      <div className="section-header">
        <span className="page-title">✨ {data.sectionTitle}</span>
        <h1>
          <span className="headline">{data.headlinestart}</span>
          <span className="gradient-headline"> {data.gradiantheadline}</span>
          <span className="headline"> {data.headlineend}</span>
        </h1>
        <p className="subheadline">{data.subHeadline}</p>
      </div>

      {/* Solutions Grid Section */}
      <div className="solutions-grid">
        {data.solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <div className="solution-card-img">
            <img src={solution.image} alt={solution.title} />
            </div>
            <h2>{solution.title}</h2>
            <p>{solution.description}</p>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;