import React from 'react';
import "./Home.css";

import Navbar from "../../Components/Navbar/index.jsx";
import HeroSection from "../../Components/HeroSection/index.jsx";
import AboutSection from "../../Components/AboutSection/index.jsx";
import ClubsSection from "../../Components/ClubsSection/index.jsx";
import AchievmentsSection from "../../Components/AchievmentsSection/index.jsx";
import PictureSection from "../../Components/PictureSection/index.jsx";
import FooterSection from "../../Components/FooterSection/index.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ClubsSection />
      <AchievmentsSection/>
      <PictureSection />
      <FooterSection />
    </>
  )
}

export default Home;