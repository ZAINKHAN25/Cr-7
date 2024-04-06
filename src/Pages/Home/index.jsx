import React from 'react';
import Navbar from "../../Components/Navbar/index.jsx";
import HeroSection from "../../Components/HeroSection/index.jsx";
import AboutSection from "../../Components/AboutSection/index.jsx";
import ClubsSection from "../../Components/ClubsSection/index.jsx";
import AchievmentsSection from "../../Components/AchievmentsSection/index.jsx";
import "./Home.css"

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ClubsSection />
      <AchievmentsSection/>
    </>
  )
}

export default Home;