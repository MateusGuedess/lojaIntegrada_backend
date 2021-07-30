const { ApolloServer } = require("apollo-server-express")
const { typeDefs } = require('./Schema/TypeDefs')
const { resolvers } = require('./Schema/Resolvers')
const express = require("express")
const cors = require("cors")
const http = require('http')

const app = express()

app.use(cors())
port = process.env.PORT || 3001
const server = new ApolloServer({
     typeDefs,
     resolvers
})

server.applyMiddleware({ app })

http.createServer(app).listen(port, () => {
    console.log("RUNNING IN PORT 3001")
})