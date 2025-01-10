"use client"
import { useState, useEffect } from "react";
import Text from "./components/text";
import Navbar from "./components/Nav";
import About from "./components/About";
import Services from "./components/Service";
import Team from "./components/Team";
import Project from "./components/Project";
import Partner from "./components/Partner";
import Fotter from "./components/Fotter";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen">
      <img src="/grid.svg" alt="grid" />
      <div className="absolute top-0 w-screen">
        <Navbar />
        <Text />
      </div>
      <div className="relative mt-[calc(100vh)] sm:mt-0">
        <About isVisible={currentSection === "about"} />
      </div>
      <Services isVisible={currentSection === "services"} />
      <Team />
      <Project />
      <Partner />
      <Fotter />
    </div>
  );
}
