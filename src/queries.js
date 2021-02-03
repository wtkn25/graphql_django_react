import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation ($username: String!, $password: String!) {
    createUser(input: {username: $username, password: $password, email: ""}) {
      user {
        id
        username
      }
    }
  }
`

export const GET_TOKEN = gql`
  mutation {
    tokenAuth(username: "testuser", password: "testuser") {
      token
    }
  }
`

export const GET_EMPLOYEES = gql`
  query {
    allEmployees {
      edges {
        node {
          id
          name
          joinYear
          department {
            deptName
          }
        }
      }
    }
  }
`

export const GET_DEPTS = gql`
  query {
    allDepartments {
      edges {
        node {
          id
          deptName
        }
      }
    }
  }
`

export const CREATE_EMPLOYEE = gql`
  mutation ($name: String!, $joinYear: Int!, $department: ID!) {
    createEmployee(input: {name: $name, joinYear: $joinYear, department: $department}) {
      employee {
        id
        name
        joinYear
        department {
          id
          deptName
        }
      }
    }
  }
`

export const UPDATE_EMPLOYEE = gql`
  mutation ($id: ID!, $name: String!, $joinYear: Int!, $department: ID!) {
    updateEmployee(input: {id: $id, name: $name, joinYear: $joinYear, department: $department}) {
      employee {
        id
        name
        joinYear
        department {
          id
          deptName
        }
      }
    }
  }
`