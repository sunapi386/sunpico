import React from "react";

import Header from "../partials/Header";
import Banner from "../partials/Banner";
import FeaturesHome from "../partials/Features";
import Footer from "../partials/Footer";

function PracticeAreas() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <FeaturesHome />
      </main>

      {/*<Banner />*/}
      <Footer />
    </div>
  );
}

export default PracticeAreas;
