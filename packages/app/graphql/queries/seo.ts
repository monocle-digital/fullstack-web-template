import client from "../apollo-client";
import { gql } from "@apollo/client";

export const getSeoBySlug = async (slug: string) => {
  const { data } = await client.query({
    query: gql`
      query ($slug: String) {
        pageSeos (filters: {slug: {eq: $slug }}) {
          data {
            attributes {
              name
              SEO {
                metaTitle
                metaDescription
                metaImage {
                  data {
                    attributes {
                      name
                      url
                      height
                      width
                      alternativeText
                    }
                  }
                }
                metaSocial {
                  title
                  socialNetwork
                  description
                  image {
                    data {
                      attributes {
                        name
                        url
                        height
                        width
                        alternativeText
                      }
                    }
                  }
                }
                metaRobots
                metaViewport
                canonicalURL
              }
            }
          }
        }
      }
    `
  })
  return data.pageSeos.data[0] ? data.pageSeos.data[0].attributes : null;
}
