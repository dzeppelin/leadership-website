import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./css/style.scss";

import AOS from "aos";
import Sticky from "sticky-js";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PageNotFound from "./pages/PageNotFound";
import References from "./pages/References";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky("[data-sticky]");
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  const client = new ApolloClient({ uri: "https://admin.talapov.com/graphql" });

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/references" element={<References />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
