const {ApolloServer} = require('apollo-server');
const db = require('./db');
const typeDefs = require('./typeDefs');

const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        authors() {
            return db.authors;
        },
        reviews(){
            return db.reviews;
        },
        game(_, args){
            return db.games.find((game) => game.id === args.id)
        },
        author(_, args){
            return db.authors.find((author) => author.id === args.id)
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        },
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            console.log("wow")
            return db.authors.find((author) => author.id === parent.author_id);
        },
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id);
        },
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Mutation: {
        deleteGame(_,args) {
            return  db.games.filter((game) => game.id !== args.id)
        },
        addGame(_,args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 1000).toString()
            }
            db.games.push(game)
            return db.games;
        },
        updateGame(_,args) {
            db.games = db.games.map((game) => {
                if (game.id === args.id) {
                    return {...game, ...args.edits}
                }
                return game;
            })
            return db.games;
        }
    }
}
console.log(db)

const server = new ApolloServer({
    typeDefs,
    resolvers
});
console.log("listening on port 5000");

server.listen({port: 5000});