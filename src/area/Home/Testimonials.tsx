import React from 'react';
import TestimonialCard from '../../components/TestimonialsCard/TestimonialCard';

function Testimonials() {
  return (
    <div id='testimonials' className="container mt-5 mb-5">
      <h4 className="text-center">Testimonials</h4>
      <div className="row mt-4">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonials;
