const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {
        name: String!
        email: String!
        password: String!
        loginTry: Int
    }

    #Queries
    type Query {
        login(email: String!, password: String!): User!
    }

    #Mutations
    type Mutation {
        loginAttempt(email: String!): User!
        resetAttempt(email: String!): User!
    }
`;

module.exports = {typeDefs}