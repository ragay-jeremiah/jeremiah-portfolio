import { AdminProvider } from './admin/AdminContext';
import { EditorToolbar } from './admin/EditorToolbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SystemFlow from './components/SystemFlow';
import Projects from './components/Projects';
import Creatives from './components/Creatives';
import VideoDemo from './components/VideoDemo';
import WhoThisIsFor from './components/WhoThisIsFor';
import About from './components/About';
import FinalCta from './components/FinalCta';
import Contact from './components/Contact';

function App() {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-[#020617] text-white selection:bg-[#9b87f5]/30 selection:text-[#9b87f5]">
        {/* Floating editor toolbar — only visible in editor mode */}
        <EditorToolbar />

        <Header />

        <main>
          <Hero />
          <Problem />
          <Solution />
          <SystemFlow />
          <Projects />
          <Creatives />
          <VideoDemo />
          <WhoThisIsFor />
          <About />
          <FinalCta />
        </main>

        {/* Contact contains the footer with the 10-tap trigger */}
        <Contact />
      </div>
    </AdminProvider>
  );
}

export default App;
