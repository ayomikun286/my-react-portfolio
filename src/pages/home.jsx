import React from 'react'
import "./home.css";
import SplashNavLink from "../components/Navlink.jsx"
import { useState } from 'react';
import HeroSection from "../components/LandingSection.jsx"
import About from "../components/About.jsx"
import Projects from "../components/Projects.jsx"
import ProjectDetails from "../components/ProjectDetails.jsx"
export function Home() {
  // Set "Home" as the default active tab on page load
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="hero min-h-screen text-white relative  overflow-x-hidden">

      {/* The Single-Page Navigation Menu */}
      <nav className="fixed top-4 left-6 flex flex-wrap items-center gap-2 ">
        <SplashNavLink
          label="Home"
          isActive={activeTab === 'Home'}
          onClick={() => setActiveTab('Home')}
        />
        <SplashNavLink
          label="About"
          isActive={activeTab === 'About'}
          onClick={() => setActiveTab('About')}
        />

        <SplashNavLink
          label="Projects"
          isActive={activeTab === 'Projects'}
          onClick={() => setActiveTab('Projects')}
        />
        <SplashNavLink
          label="Contact"
          isActive={activeTab === 'Contact'}
          onClick={() => setActiveTab('Contact')}
        />
      </nav>

      {/* Conditionally display different sections based on the selected state */}
      <main className="pt-25 md:pt-18 md:mt-5  px-5 md:px-12 w-screen">
        {activeTab === 'Home' && (
          <div className="animate-fadeIn">
            <HeroSection onOpenProject={setActiveTab} />
          </div>
        )}

        {activeTab === 'About' && (
          <div className="animate-fadeIn">
            <About onOpenProject={setActiveTab} />
          </div>
        )}

        {activeTab === 'Contact' && (
          <div className="animate-fadeIn">
            <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
            <p className="text-gray-400">Reach out via email at your-email@example.com.</p>
          </div>
        )}

        {activeTab === 'Projects' && (
          <div className="animate-fadeIn">
            <Projects onViewDetails={setSelectedProject} />
          </div>
        )}
      </main>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}


export default Home