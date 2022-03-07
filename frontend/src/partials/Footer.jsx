import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/favicon.png";

function Footer() {
  const [open, setOpen] = useState(false);
  const MAILCHIMP_URL =
    "https://protonmail.us14.list-manage.com/subscribe/post?u=c1e975691eb2134e0d1a84655&amp;id=aa4d21ede4";

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <img src={LOGO} alt="logo" className="w-8 h-8" />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <p>You are not alone</p>
              <p>You are worth fighting for</p>
              <p>You have a purpose</p>
              <p>You are loved</p>
              <p>You are capable of change</p>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h5 className="text-gray-800 font-medium mb-2">We are using</h5>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://b-ok.as/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Books
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://pixabay.com/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Pixabay
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://contabo.com/en/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contabo
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://www.cloudflare.com/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Cloudflare
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://strapi.io/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Strapi
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h5 className="text-gray-800 font-medium mb-2">We Recommend</h5>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://lanegoodwin.com/blog/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Lane Goodwin
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Robert_Greene_(American_author)"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Robert Greene
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Our Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h5 className="text-gray-800 font-medium mb-2">Website </h5>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/notes"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Notes
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h5 className="text-gray-800 font-medium mb-2">Contacts</h5>
            <p className="text-sm text-gray-600 mb-4">
              Our emails:
              <br />
              abzh423@protonmail.com
              <br />
              magzhan.balken@nu.edu.kz
              <br />
              akzhan.yerkin@nu.edu.kz
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a
                target="_blank"
                href="https://github.com/abzh423/leadership-website"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; 2022 Talapov, Yerkin, Balken. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
