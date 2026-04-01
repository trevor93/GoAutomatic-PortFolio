import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import WorkCategories from './components/WorkCategories';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Process from './components/Process';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ValueProposition />
      <WorkCategories />
      <Portfolio />
      <CaseStudies />
      <Services />
      <Process />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
