import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Their team delivered exceptional results that exceeded our expectations. The quality of work and attention to detail was impressive.",
      author: "John Smith",
      position: "CEO, TechCorp",
      rating: 3.5,
      image: "/author.jpeg"
    },
    {
      id: 2,
      quote: "We've been working with them for years and they consistently deliver innovative solutions that drive our business forward.",
      author: "Sarah Johnson",
      position: "CTO, InnovateX",
      rating: 5,
      image: "/author-2.jpeg"
    },
    {
      id: 3,
      quote: "The development team was responsive, professional, and delivered our project ahead of schedule. Highly recommended!",
      author: "Michael Brown",
      position: "Product Manager, DigiSolutions",
      rating: 3,
      image: "/author-1.jpeg"
    }
  ];

  return (
    <div className="services-container">
      <div className="section-header">
        <span className="page-title">✨ Testimonials</span>
        <h1>
          <span className="headline">Helping our  </span>
          <span className="gradient-headline">clients succeed with our services</span>
        </h1>
        <p className="subheadline">Hear from businesses that have transformed with our services</p>
        <a href="#contact" className="section-link">View All Testimonials </a>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="quote">"{testimonial.quote}"</p>
            <div className="author-info">
              <div className="author-image">
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <div className="author-details">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;