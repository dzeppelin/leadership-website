import React from "react";

import DocsImage01 from "../images/docs-image-01.png";
import DocsImage02 from "../images/docs-image-02.png";

function DocumentationContent() {
  return (
    <div className="md:grow">
      <div className="text-lg text-gray-600">
        <h2 className="h2 text-gray-900 mb-4">A bit about that section</h2>
        <p className="mb-8">
          Aenean sed adipiscing diam donec{" "}
          <strong className="font-medium text-gray-900">
            adipiscing tristique risus
          </strong>{" "}
          nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
          dictum varius duis at consectetur lorem donec massa sapien, sed risus
          ultricies tristique nulla aliquet.{" "}
          <strong className="font-medium text-gray-900">
            Morbi tristique senectus
          </strong>{" "}
          et netus et, nibh nisl condimentum id venenatis a condimentum vitae
          sapien.
        </p>
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
        <p className="mb-8">
          Sit amet cursus sit amet dictum sit amet mattis pellentesque id nibh
          tortor id, nulla aliquet porttitor lacus luctus accumsan tortor
          posuere.{" "}
          <strong className="font-medium text-gray-900">
            Pellentesque habitant morbi
          </strong>{" "}
          tristique senectus et netus, lacinia quis vel eros donec ac odio
          tempor. Duis ut diam quam nulla tellus orci ac auctor augue mauris
          augue.
        </p>
      </div>
    </div>
  );
}

export default DocumentationContent;
