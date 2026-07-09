import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL
let client;
let clientPromise;


if(!process.env.MONGODB_URL){
    throw new Error("please add  YOUR MONGOODB uRL")
}

client = new MongoClinent(uri);
clintPromise = client.connect();

export default clientPromise;
