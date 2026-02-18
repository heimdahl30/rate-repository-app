import { gql } from "@apollo/client";

export const GET_REPOSITORIES_AVG_RATINGS = gql`
  query GetRepositoryAvgRatings ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword){
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

/*
export const GET_REPOSITORIES_BY_KEYWORD = gql`
  query GetRepositoryByKeyword ($searchKeyword: String){
    repositories(searchKeyword: $searchKeyword){
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
*/

export const SINGLE_REPOSITORY = gql`
  query SingleRepository($id: ID!, $after: String) {
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
      reviews (first: 5, after: $after){
      totalCount
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
             cursor
      }

      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
        }
      }
    }
`;

export const GET_USER = gql`
  query Getuser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
          id
            rating
            text
            createdAt
            repository {
              id
              fullName
}
}
            }
          }
    }
  }
`;
