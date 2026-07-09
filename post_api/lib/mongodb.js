import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
const client  =new  MongoClient(uri);

export async function connectDB(){
    const clientconnect = await client.connect();

    const db = clientconnect.db("next_js");

    return db

}


