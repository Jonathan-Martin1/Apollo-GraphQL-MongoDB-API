import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
require('dotenv').config()

const {DATABASE_URL} = process.env

const app = express();

const mongoose = require('mongoose');


let apolloServer = null;
async function startServer() {
 try{
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await mongoose.connect(`${DATABASE_URL}`, {useNewUrlParser: true, useUnifiedTopology: true});
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
   }
   catch(error) {
    console.log('promise error', error)
   }
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});