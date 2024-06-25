const {gql} = require('apollo-server');

module.exports = gql`
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
        game(id: ID!): Game 
        author(id: ID!): Author 
        review(id: ID!): Review 
    }
    
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): [Game]
        updateGame(id: ID!, edits: EditGameInput!): [Game]
    }
    
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }

    input EditGameInput {
        title: String,
        platform: [String!]
    }
`

