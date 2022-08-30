import client from "../apollo-client";
import { gql } from "@apollo/client";

export const getArticles = async () => {
  const { data } = await client.query({
    query: gql`
      query getArticles {
        articles {
          data {
            id
            attributes {
              title
              content
            }
          }
        }
      }
    `
  })

  return data.articles.data;
}
