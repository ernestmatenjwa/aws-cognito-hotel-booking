/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModeluserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModeluserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModeluserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBookings = /* GraphQL */ `
  mutation CreateBookings(
    $input: CreateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    createBookings(input: $input, condition: $condition) {
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
export const updateBookings = /* GraphQL */ `
  mutation UpdateBookings(
    $input: UpdateBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    updateBookings(input: $input, condition: $condition) {
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
export const deleteBookings = /* GraphQL */ `
  mutation DeleteBookings(
    $input: DeleteBookingsInput!
    $condition: ModelBookingsConditionInput
  ) {
    deleteBookings(input: $input, condition: $condition) {
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
