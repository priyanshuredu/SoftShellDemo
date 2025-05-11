import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FormSection from './components/FormSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <WhyChooseUs/>
      <Testimonials/>
      <FormSection/>
      <Footer/>
    </div>
  );
}

export default App;