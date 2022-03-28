import React from "react";

import AboutImage from "../images/about-01.jpg";

function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">Answers on some of the commitments</h1>
            <p className="text-xl text-gray-600">
              That section answers the questions about our group.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <img
              className="rounded shadow-2xl"
              src={AboutImage}
              width="768"
              height="432"
              alt="About us"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
