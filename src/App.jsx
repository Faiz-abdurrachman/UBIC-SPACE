import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import VisionMission from './sections/VisionMission';
import Programs from './sections/Programs';
import LegalPartners from './sections/LegalPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <VisionMission />
      <Programs />
      <LegalPartners />
      <Footer />
    </div>
  );
}

export default App;
