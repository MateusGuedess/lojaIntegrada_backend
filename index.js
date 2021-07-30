const { ApolloServer } = require("apollo-server-express")
const { typeDefs } = require('./Schema/TypeDefs')
const { resolvers } = require('./Schema/Resolvers')
const express = require("express")
const cors = require("cors")
const http = require('http')

const app = express()

app.use(cors())

const server = new ApolloServer({
     typeDefs,
     resolvers
})

server.applyMiddleware({ app })

http.createServer(app).listen(3001, () => {
    console.log("RUNNING IN PORT 3001")
})