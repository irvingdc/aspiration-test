import { gql } from "apollo-boost";

export const GET_RELATED_TOPICS = gql`
  query ($topic: String!) {
    topic(name: $topic) {
      relatedTopics {
        id
        name
        stargazers {
          totalCount
        }
      }
    }
  }
`;