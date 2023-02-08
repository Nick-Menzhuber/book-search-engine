import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String, $email: String, $password: String) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($username: String, $password: String) {
    signIn(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($bookInfo: Schema) {
    addBook(bookInfo: $bookInfo) {
      bookInfo
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookInfo: Schema) {
    removeBook(_id: $_id) {
      _id
    }
  }
`;
