import React from "react";

import Header from "../partials/Header";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";
import Testimonials from "../partials/Testimonials";
import { InlineWidget } from "react-calendly";

function Profile() {
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
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Do you or someone you know need help with software and
                  technology? Building software can be a daunting and
                  intimidating experience, especially for those unfamiliar with
                  the software development process. The consequences of a bad
                  software solution can have devastating impacts on future
                  business growth, bottom line, and even legal compliance. That
                  is why experience matters. An experienced and effective
                  software architect can drastically improve the outcome of your
                  application. With years of experience in the Silicon Valley
                  software engineering scene, I can provide the guidance and
                  support to help you succeed. I am available to serve both the
                  US and Canada, and I will strive to ensure that the
                  development process is cost-effective and balanced, while also
                  ensuring that the final product is suitable for your needs.
                  There is no substitute for experience - let me help you on
                  your journey. Mr. Sun is a sole practitioner and he is devoted
                  to providing personal attention to each of his cases. With his
                  expertise, he will dedicate all of the necessary time,
                  resources, and efforts to ensure the best possible outcome.
                  You can rest assured that your case will not be handled by a
                  team of international contractors or new graduates; it will be
                  handled by Mr. Sun himself.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*<Banner />*/}
      <Footer />
    </div>
  );
}

export default Profile;
