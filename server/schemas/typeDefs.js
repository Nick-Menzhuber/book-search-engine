const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
  token: ID
  user: User
  }

  type Query {
  user: User
  }

  type Mutation {
  addBook(bookInfo: Book): User
  removeBook(bookInfo: ID): User
  signIn(username: String, password: String): Auth
  createUser(username: String, email: String, password: String): Auth
  }
`;
