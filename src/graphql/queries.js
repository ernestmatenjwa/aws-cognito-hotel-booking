/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      surname
      gender 
      description
      cell
      picture
      createdAt
      updatedAt
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query getUserByEmail($email: String!) { 
    getUserByEmail(email: $email) {
      id
      email
      name
      surname
      gender
      description
      cell
      picture
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModeluserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        surname
        gender
        description
        cell
        picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBookings = /* GraphQL */ `
  query GetBookings($id: ID!) {
    getBookings(id: $id) {
      id
      startDate
      endDate
      price
      numberOfDays
      cancel
      createdAt
      updatedAt
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startDate
        endDate
        price
        numberOfDays
        cancel
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
