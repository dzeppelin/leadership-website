import React from "react";

import fifty from "../images/50.jpg";
import fastlane from "../images/fastlane.jpg";

function DocumentationContent() {
  return (
    <div className="md:grow">
      <div className="text-lg text-gray-600">
        <h2 className="h2 text-gray-900 mb-4">Books we would recommend</h2>
        <p className="mb-8">That is a list of books that we would recommend</p>

        <div className="flex flex-col">
          <div className="w-3/4">
            <h2
              id="installation"
              className="h3 text-gray-900 mb-4"
              style={{ scrollMarginTop: "100px" }}
            >
              The 50th law
            </h2>
            <p className="mb-8">
              There are no Alps and no obstacles that can stand in the way of a
              person without fears.
            </p>
          </div>
          <figure className="mb-8 ml-5 w-1/4">
            <div className="">
              <img
                className="w-full rounded"
                src={fifty}
                alt="The 50th law"
                height={180}
              />
            </div>
          </figure>
        </div>

        <div className="flex flex-col">
          <div className="w-3/4">
            <h2
              id="installation"
              className="h3 text-gray-900 mb-4"
              style={{ scrollMarginTop: "100px" }}
            >
              The Millionaire Fastlane
            </h2>
            <p className="mb-8">
              The Millionaire Fastlane is about getting wealthy and retiring in
              10 years rather than 40 years. <br />
              <i>Requires specific mindset</i>
            </p>
          </div>
          <figure className="mb-8 ml-5 w-1/4">
            <div className="">
              <img
                className="w-full rounded"
                src={fastlane}
                height={180}
                alt="The Millionaire Fastlane"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default DocumentationContent;
