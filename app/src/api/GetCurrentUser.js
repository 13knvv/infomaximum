import { gql } from '@apollo/client'

export const GET_CURRENT_USER_ID = gql`
  query GetCurrentUserId {
    currentUser {
      id
    }
  }
`