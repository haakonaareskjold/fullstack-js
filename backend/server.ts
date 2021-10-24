import express from "express";
import connectToDatabase from "./connect-to-database";

const app = express();

app.get('/api/messages', async (request, response) => {
    
    const db = await connectToDatabase();

    const messages = await db.collection('messages').find({}).toArray();

    response.json({messages});
})

app.listen(3000);