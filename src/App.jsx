import React from 'react';
import PreHeader from './components/PreHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import Awards from './components/Awards';
import Partners from './components/Partners';
import AppPromo from './components/AppPromo';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';

import testimonials from './config/testimonials';

function App() {
  return (
    <div>
      <PreHeader />
      <Header />
      <Hero />
      <Awards />
      <Partners />
      <AppPromo />
      <Products />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}

export default App;
