"use client"; // Ensures this is treated as a client component
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";

// Dynamically import components with SSR disabled
const Navbar = dynamic(() => import("./components/Nav"), { ssr: false });
const Text = dynamic(() => import("./components/text"), { ssr: false });
const About = dynamic(() => import("./components/About"), { ssr: false });
const Services = dynamic(() => import("./components/Service"), { ssr: false });
const Team = dynamic(() => import("./components/Team"), { ssr: false });
const Project = dynamic(() => import("./components/Project"), { ssr: false });
const Partner = dynamic(() => import("./components/Partner"), { ssr: false });
const Fotter = dynamic(() => import("./components/Fotter"), { ssr: false });

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    // Guarding against SSR
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleSections = { ...visibleSections };
        entries.forEach((entry) => {
          newVisibleSections[entry.target.id] = entry.isIntersecting;
        });
        setVisibleSections(newVisibleSections);
      },
      { threshold: [0.2, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []); // Removed `visibleSections` dependency to avoid unnecessary re-renders

  return (
    <div className="w-screen">
      <img src="/grid.svg" alt="grid" style={{ height: "100vh" }} />
      <div className="absolute top-0 w-screen">
        <Navbar />
        <Text />
      </div>

      <div className="relative sm:mt-20 md:mt-20" id="about">
        <About isVisible={visibleSections.about} />
      </div>
      <div id="services">
        <Services isVisible={visibleSections.services} />
      </div>
      <div id="team">
        <Team isVisible={visibleSections.team} />
      </div>
      <div id="project">
        <Project isVisible={visibleSections.project} />
      </div>
      <div id="partner">
        <Partner isVisible={visibleSections.partner} />
      </div>
      <div id="fotter">
        <Fotter isVisible={visibleSections.fotter} />
      </div>
    </div>
  );
}
