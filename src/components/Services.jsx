import React from 'react';

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-white p-6 shadow-md w-80 m-4">
            <h3 className="text-xl font-bold mb-2">Personal Tax Filing</h3>
            <p>Accurate and timely filing of your personal taxes.</p>
          </div>
          <div className="bg-white p-6 shadow-md w-80 m-4">
            <h3 className="text-xl font-bold mb-2">Business Tax Filing</h3>
            <p>Comprehensive tax solutions for your business.</p>
          </div>
          <div className="bg-white p-6 shadow-md w-80 m-4">
            <h3 className="text-xl font-bold mb-2">Tax Advisory</h3>
            <p>Expert advice to optimize your tax strategy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
