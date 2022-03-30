import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Team from "../partials/Team";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <HeroHome />   
        <Team />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
