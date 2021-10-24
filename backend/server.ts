import express from "express";
import connectToDatabase from "./connect-to-database";

const app = express();
app.use(express.json());

app.get('/api/messages', async (request, response) => {
    
    const db = await connectToDatabase();

    const messages = await db.collection('messages').find({}).toArray();

    response.json({messages});
})

app.post('/api/messages', async (request, response) => {
    const db = await connectToDatabase();
    await db.collection('messages').insertOne({
        text: request.body.text
    });
    
    return response.send(201);
})

app.listen(3000);