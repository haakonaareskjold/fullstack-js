import express from "express";
import connectToDatabase from "./connect-to-database";

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/messages', async (request, response) => {
    
    const db = await connectToDatabase();

    const messages = await db.collection('messages').find({}).toArray();

    response.json({ messages });
})

app.post('/messages', async (request, response) => {
    const db = await connectToDatabase();
    const message = await db.collection('messages').insertOne({
        text: request.body.text
    });

    response.json({message})

    return response.send(201);
})

app.listen(3000);