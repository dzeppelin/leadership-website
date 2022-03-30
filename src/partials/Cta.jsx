import React from 'react';

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>

          {/* CTA box */}
          <div className="bg-green-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">You like what we are doing?</h3>
                <p className="text-white text-lg opacity-75">You can apply with a simple form and become part of our team.</p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn text-green-600 bg-gradient-to-r from-blue-100 to-white" href="https://zaoin2q1t0d.typeform.com/to/i8GFJlhY" target="_blank">Apply</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
