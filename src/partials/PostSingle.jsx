import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import getMonth from "./getMonth";
import ReactMarkdown from "react-markdown";
import "../css/additional-styles/article-styling.scss";
import { Instagram } from "react-content-loader";

function PostSingle(props) {
  const id = props.id;

  const GET_POST = gql`
    query {
      post(id: ${id}) {
        Title
        Content
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
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <Query query={GET_POST}>
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <div>
                      <Instagram />
                    </div>
                  );
                }
                if (error) {
                  return <p>Error Damn It</p>;
                }

                console.log(data);

                return (
                  <article>
                    {/* Article header */}
                    <header className="max-w-3xl mx-auto mb-20">
                      {/* Title */}
                      <h1 className="h1 text-center mb-4">{data.post.Title}</h1>
                    </header>

                    {/* Article content */}
                    <div
                      className="lg:flex lg:justify-between"
                      data-sticky-container
                    >
                      {/* Main content */}
                      <div>
                        {/* Article meta */}
                        <div className="flex items-center mb-6">
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
                                src={`https://admin.talapov.com${data.post.Author.Avatar.formats.thumbnail.url}`}
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
                              href="#0"
                            >
                              {data.post.Author.FirstName}{" "}
                              {data.post.Author.SecondName}
                            </a>
                            <span className="text-gray-600">
                              {" "}
                              ·{" "}
                              {`${getMonth(data.post.Date.split("-")[1])} ${
                                data.post.Date.split("-")[2]
                              }, ${data.post.Date.split("-")[0]}`}
                            </span>
                          </div>
                        </div>
                        <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                        {/* Article body */}
                        <div className="text-lg text-gray-600 post-single">
                          <ReactMarkdown>{data.post.Content}</ReactMarkdown>
                          <div>
                            {/* End of Article Body */}
                            <hr className="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                            <div className="mt-6">
                              <Link
                                to="/blog"
                                className="inline-flex items-center text-base text-blue-600 font-medium hover:underline"
                              >
                                <svg
                                  className="w-3 h-3 fill-current text-blue-400 shrink-0 mr-2"
                                  viewBox="0 0 12 12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                                </svg>
                                <span>Back to the blog</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }}
            </Query>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostSingle;
