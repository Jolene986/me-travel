import React from 'react'
import Title from './Title'
import TestimonialsSlider from './TestimonialsSlider'


 const Testimonials = () => {
  return (
    <section className="services">
      <Title title="see what our clients have to say" />
      <div className="services-center">
        <TestimonialsSlider/>
        
      </div>
    </section>
  )
}

export default Testimonials ;