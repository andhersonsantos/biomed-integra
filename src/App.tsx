import { lazy, Suspense } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingWhatsApp from './components/UI/FloatingWhatsApp';
import Hero from './components/Sections/Hero';

const DiabetesRemission = lazy(() => import('./components/Sections/DiabetesRemission'));
const Services = lazy(() => import('./components/Sections/Services'));
const Subscription = lazy(() => import('./components/Sections/Subscription'));
const Benefits = lazy(() => import('./components/Sections/Benefits'));
const FAQ = lazy(() => import('./components/Sections/FAQ'));
const Contact = lazy(() => import('./components/Sections/Contact'));

export default function App() {
  return (
    <div className="min-h-screen bg-biomed-sand selection:bg-biomed-blue-light selection:text-white">
      <SEO />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <DiabetesRemission />
          <Services />
          <Subscription />
          <Benefits />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
