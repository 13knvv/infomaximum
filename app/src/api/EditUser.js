import { gql } from '@apollo/client'

export const EDIT_USER = gql`
  mutation EditUser(
    $id: Int!
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String
  ) {
    editUser(
      id: $id
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    ) {
      id
      firstName
      secondName
      email
    }
  }
`
