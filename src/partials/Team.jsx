import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_AUTHORS = gql`
  query {
    authors {
      FirstName
      SecondName
      Avatar {
        formats
      }
    }
  }
`;

function Team() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The humans behind the website</h2>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 "
            data-aos-id-team
          >
            <Query query={GET_AUTHORS}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <div>Loading...</div>;
                }
                if (error) {
                  return <p>Error Damn It</p>;
                }

                console.log(data.authors);

                return (
                  <div className="flex flex-col md:flex-row w-full items-center justify-center">
                    <div
                      className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
                      data-aos="zoom-y-out"
                      data-aos-anchor="[data-aos-id-team]"
                    >
                      <div className="flex flex-col items-center">
                        <img
                          className="rounded-full mb-4"
                          src={`https://admin.talapov.com${data.authors[0].Avatar.formats.thumbnail.url}`}
                          width="120"
                          height="120"
                          alt="Team member 01"
                        />
                        <h4 className="text-xl font-bold mb-1">
                          {data.authors[0].FirstName}{" "}
                          {data.authors[0].SecondName}
                        </h4>
                        <div className="text-blue-600 font-medium mb-2">
                          Software Engineer
                        </div>
                      </div>
                    </div>
                    <div
                      className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
                      data-aos="zoom-y-out"
                      data-aos-anchor="[data-aos-id-team]"
                    >
                      <div className="flex flex-col items-center">
                        <img
                          className="rounded-full mb-4"
                          src={`https://admin.talapov.com${data.authors[1].Avatar.formats.thumbnail.url}`}
                          width="120"
                          height="120"
                          alt="Team member 01"
                        />
                        <h4 className="text-xl font-bold mb-1">
                          {data.authors[1].FirstName}{" "}
                          {data.authors[1].SecondName}
                        </h4>
                        <div className="text-blue-600 font-medium mb-2">
                          Content Creator
                        </div>
                      </div>
                    </div>
                    <div
                      className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
                      data-aos="zoom-y-out"
                      data-aos-anchor="[data-aos-id-team]"
                    >
                      <div className="flex flex-col items-center">
                        <img
                          className="rounded-full mb-4"
                          src={`https://admin.talapov.com${data.authors[2].Avatar.formats.thumbnail.url}`}
                          width="120"
                          height="120"
                          alt="Team member 01"
                        />
                        <h4 className="text-xl font-bold mb-1">
                          {data.authors[2].FirstName}{" "}
                          {data.authors[2].SecondName}
                        </h4>
                        <div className="text-blue-600 font-medium mb-2">
                          Content Creator
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Query>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
