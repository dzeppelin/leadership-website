import React from "react";

import AboutImage from "../images/about-02.jpg";
import AboutLogo from "../images/about-logo.png";

function AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">#1 Clarify Values</h3>
            <p className="text-lg text-gray-600 mb-8">
              Depression and hard moments in life are important to each member
              of the group because they provide an opportunity to learn and
              grow. These experiences can teach us about ourselves and others,
              and help us to develop empathy and compassion. They can also help
              us to find the strength and resilience we didn't know we had.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">#2 Set the Example</h3>
            <p className="text-lg text-gray-600 mb-8">
              The members of our group are all examples of people who have dealt
              with depression and hard moments in life. Each of us has our own
              story of how we've coped with these things, and we're here to help
              others who are dealing with similar experiences. We want to show
              people that it's possible to overcome these challenges and live a
              happy, fulfilling life.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">#3 Envision the future</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to provide support and resources for those
              struggling with depression and other mental health issues. We aim
              to create a safe and supportive community where people can share
              their experiences and find hope and healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
