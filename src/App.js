import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const matches = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div>
        {sidebarOpen && matches ? null : (
          <>
            <Hero />
            <InfoSection />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
