import React from "react";
import { Query } from "react-apollo";
import { gql } from "graphql-tag";
import { Link } from "react-router-dom";
import getMonth from "./getMonth";
import ContentLoader from "react-content-loader";

function BlogList() {
  const GET_POSTS = gql`
    query {
      posts(sort: "Date:desc") {
        id
        Title
        Description
        Author {
          FirstName
          SecondName
          Avatar {
            formats
          }
        }
        Date
      }
    }
  `;

  return (
    <section className="max-w-3xl mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-left md:text-left">
            <h1 className="h1 mb-4">Type the way you talk</h1>
            <p className="text-xl text-gray-600">
              Stay up to date on the latest.
            </p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            <div className="md:grow -mt-4">
              <Query query={GET_POSTS}>
                {({ loading, error, data }) => {
                  if (loading) {
                    return (
                      <div>
                        <ContentLoader />
                        <ContentLoader />
                        <ContentLoader />
                      </div>
                    );
                  }
                  if (error) {
                    return <p>Error Damn It</p>;
                  }

                  return data.posts.map((item) => {
                    return (
                      <article
                        className="flex items-center py-4 border-b last:border-b-0 border-gray-200"
                        key={item.id}
                      >
                        <div>
                          <header>
                            <h2 className="h4 mb-2">
                              <Link
                                to={`/post/${item.id}`}
                                className="hover:underline"
                              >
                                {item.Title}
                              </Link>
                            </h2>
                          </header>
                          <div className="text-lg text-gray-600 mb-4">
                            {item.Description}
                          </div>
                          <footer className="text-sm">
                            <div className="flex items-center">
                              <div className="flex shrink-0 mr-3">
                                <a className="relative" href="#0">
                                  <span
                                    className="absolute inset-0 -m-px"
                                    aria-hidden="true"
                                  >
                                    <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                                  </span>
                                  <img
                                    className="relative rounded-full"
                                    src={`https://admin.talapov.com${item.Author.Avatar.formats.thumbnail.url}`}
                                    width="32"
                                    height="32"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div>
                                <span className="text-gray-600">By </span>
                                <a
                                  className="font-medium hover:underline"
                                  href={`/post/${item.id}`}
                                >
                                  {item.Author.FirstName}{" "}
                                  {item.Author.SecondName}
                                </a>
                                <span className="text-gray-600">
                                  {" "}
                                  ·{" "}
                                  {`${getMonth(item.Date.split("-")[1])} ${
                                    item.Date.split("-")[2]
                                  }, ${item.Date.split("-")[0]}`}
                                </span>
                              </div>
                            </div>
                          </footer>
                        </div>
                        <Link
                          to={`/post/${item.id}`}
                          className="block shrink-0 ml-6"
                        >
                          <span className="sr-only">Read more</span>
                          <svg
                            className="w-4 h-4 fill-current text-green-600"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                          </svg>
                        </Link>
                      </article>
                    );
                  });
                }}
              </Query>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
