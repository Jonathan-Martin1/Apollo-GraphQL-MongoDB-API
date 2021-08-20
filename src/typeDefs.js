import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    country: String!
    year: String!
    areaSQKM: Float!
    totalPopulation: Float!
    findStats: [Stats!]!
  }
  type Stats {
    id: ID!
    country: String!
    year: String!
    areaSQKM: Float!
    totalPopulation: Float!
  }
  type Mutation {
    createStats(country: String!, year: String!, areaSQKM: Float!, totalPopulation: Float!): Stats!
  }
`;