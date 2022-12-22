import React from "react";

import Header from "../partials/Header";
import Banner from "../partials/Banner";
import { InlineWidget } from "react-calendly";
import Footer from "../partials/Footer";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <p className="text-xl text-gray-600">Jason Sun</p>
              </div>

              {/* Calendar */}
              <InlineWidget
                styles={{
                  height: "700px",
                }}
                url="https://calendly.com/sunapi386/consulting"
              />
            </div>
          </div>
        </section>
      </main>

      {/*<Banner />*/}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Contact;
