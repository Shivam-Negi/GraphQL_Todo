import mongoose from "mongoose";
import ServerConfig from "./config/serverConfig";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";

const server =  new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

async function start() {
    await mongoose.connect(ServerConfig.DB_URL);
    console.log('mongoDB connected');
    const info = await server.listen();
    console.log(`graph ql server is up on ${info.url}`);
}

start();