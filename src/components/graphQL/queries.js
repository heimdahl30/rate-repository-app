import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepository {
    repositories {
      edges {
        node {
          fullName
          description
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          forksCount
          stargazersCount
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query Getuser {
    me {
      id
      username
    }
  }
`;
