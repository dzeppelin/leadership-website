import React from "react";

import DocsImage01 from "../images/docs-image-01.png";

function DocumentationContent() {
  return (
    <div className="md:grow">
      <div className="text-lg text-gray-600">
        <h2 className="h2 text-gray-900 mb-4">Books we would recommend</h2>
        <p className="mb-8">That is a list of books that we would recommend</p>
        <h2
          id="installation"
          className="h3 text-gray-900 mb-4"
          style={{ scrollMarginTop: "100px" }}
        >
          50th law
        </h2>
        <p className="mb-8">
          Sit amet cursus sit amet dictum sit amet. Mattis pellentesque id nibh
          tortor id nulla aliquet porttitor lacus luctus accumsan, tortor
          posuere pellentesque habitant morbi tristique senectus et netus.
          Lacinia quis vel eros donec ac odio tempor duis ut diam quam nulla.
          Tellus orci ac auctor augue mauris augue.
        </p>
        <figure className="mb-8">
          <img
            className="w-full rounded"
            src={DocsImage01}
            width="768"
            height="390"
            alt="Docs 01"
          />
        </figure>
        <h2
          id="installation"
          className="h3 text-gray-900 mb-4"
          style={{ scrollMarginTop: "100px" }}
        >
          Installation
        </h2>
        <p className="mb-8">
          Sit amet cursus sit amet dictum sit amet. Mattis pellentesque id nibh
          tortor id nulla aliquet porttitor lacus luctus accumsan, tortor
          posuere pellentesque habitant morbi tristique senectus et netus.
          Lacinia quis vel eros donec ac odio tempor duis ut diam quam nulla.
          Tellus orci ac auctor augue mauris augue.
        </p>
        <figure className="mb-8">
          <img
            className="w-full rounded"
            src={DocsImage01}
            width="768"
            height="390"
            alt="Docs 01"
          />
        </figure>
      </div>
    </div>
  );
}

export default DocumentationContent;
