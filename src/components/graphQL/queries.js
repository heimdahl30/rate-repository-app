import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepository {
    repositories {
      edges {
        node {
          id
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

export const SINGLE_REPOSITORY = gql`
  query SingleRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      url
      ownerAvatarUrl
      ratingAverage
      reviewCount
      forksCount
      stargazersCount
      reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
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
