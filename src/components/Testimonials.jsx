import React from 'react';
import personLaptop from '../assets/about_0.png'

const Testimonials = ({ testimonials }) => {
  return (
    <div className="p-8" style={{ backgroundColor: "#fdebee" }}>
      <h2 className="text-3xl font-bold text-center mb-8">What people has to say about us</h2>
      <div className="flex flex-wrap items-center">
        {/* Left side image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="bg-red-500 rounded-lg p-4 inline-block">
            <img 
              src={personLaptop} 
              alt="Person with laptop" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
        
        {/* Right side testimonials */}
        <div className="w-full md:w-1/2">
          <div className="h-[500px] overflow-y-auto pr-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;