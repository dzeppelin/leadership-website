import React, { useState } from "react";

import Header from "../partials/Header";
import DocumentationContent from "../partials/DocumentationContent";
import Footer from "../partials/Footer";
import CtaAlternative from "../partials/CtaAlternative";

function Documentation() {
  const [sidebarNavOpen, setSidebarNavOpen] = useState(false);
  const [sidebarLinkOpen, setSidebarLinkOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <section>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Main content */}
              <div className="md:flex md:justify-between" data-sticky-container>
                {/* Page container */}
                <DocumentationContent />
              </div>
            </div>
          </div>
        </section>
        <CtaAlternative />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Documentation;
