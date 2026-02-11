import { gql } from "@apollo/client";

export const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation ReviewCreation ($review: CreateReviewInput) {
  createReview(review: $review) {
  id,
  createdAt,
  rating,
  repository,
  repositoryId,
  text,
  user,
  userId
  }
}

`
