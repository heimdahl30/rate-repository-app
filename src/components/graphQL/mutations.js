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
  repository {
  ownerName
  }
  repositoryId,
  text,
  user {
  username
  }
  userId
  }
}
`;

export const DELETE_REVIEW = gql`
 mutation DeleteReview ($id: ID!){
   deleteReview (id: $id) 
 }
`

export const CREATE_USER = gql`
mutation UserCreation ($user: CreateUserInput) {
 createUser(user: $user) {
 id,
 username,
 createdAt,
 reviewCount
 }
}
`
