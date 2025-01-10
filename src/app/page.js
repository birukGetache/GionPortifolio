"use client";
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
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    //selecte all section on pages
    const sections = document.querySelectorAll("section");
    //
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleSections = { ...visibleSections }; // Copy the current visibleSections state
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mark the section as visible
            newVisibleSections[entry.target.id] = true;
          } else {
            // Mark the section as not visible
            newVisibleSections[entry.target.id] = false;
          }
        });
        setVisibleSections(newVisibleSections); // Update the state with visibility info
      },
      { threshold: [0.2, 1] } // Monitor both when 50% and 100% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <div className="w-screen">
      <img src="/grid.svg" alt="grid" style={{ height: "100vh" }} />
      <div className="absolute top-0 w-screen">
        <Navbar />
        <Text />
      </div>

      <div className="relative sm:mt-20 md:mt-20">
        <About isVisible={visibleSections.about} />
      </div>
      <Services isVisible={visibleSections.services} />
      <Team isVisible={visibleSections.team} />
      <Project isVisible={visibleSections.project} />
      <Partner isVisible={visibleSections.partner} />
      <Fotter isVisible={visibleSections.fotter} />
    </div>
  );
}
