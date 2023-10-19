import React from "react";
import Nav from '../../Conponents/NavBar/Nav'
import HeroSection from "../../Conponents/HeroSection/HeroSection";

function Home() {
  return (
    <div className="w-full">
       <Nav/>
       <HeroSection/>
    </div>
  );
}

export default Home;