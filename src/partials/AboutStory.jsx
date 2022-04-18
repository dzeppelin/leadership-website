import React from "react";
import Cta from "../partials/Cta";

function AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our Values</h3>
            <p className="text-lg text-gray-600 mb-8">
              Depression and hard moments in life are important to each member
              of the group because they provide an opportunity to learn and
              grow. These experiences can teach us about ourselves and others,
              and help us to develop empathy and compassion. They can also help
              us to find the strength and resilience we didn't know we had.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Why do we care?</h3>
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
            <h3 className="h3 mb-3">The Vision</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to provide support and resources for those
              struggling with depression and other mental health issues. We aim
              to create a safe and supportive community where people can share
              their experiences and find hope and healing.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">We need your help!</h3>
            <p className="text-lg text-gray-600 mb-8">
            We believe that by sharing our stories and experiences, we can help others to understand that they are not alone in their struggles. We also believe that by reaching out to others, we can help to create a network of support that can help to make dealing with these difficult times a little bit easier.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">We strive for excellence</h3>
            <p className="text-lg text-gray-600 mb-8">
            Our group is always striving to do better. We are never satisfied with the status quo and are always looking for ways to improve. We are committed to excellence and are always looking for ways to improve our skills and knowledge.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">We celebrate our victories and victories of those who overcome their problems</h3>
            <p className="text-lg text-gray-600 mb-8">
            Our website and forum approaches mental health problems and their owners from various sides. The most important is to give them relief after they got even tiniest problem solved by helping them to celebrate their victory.
            </p>
          </div>
          <Cta />
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
