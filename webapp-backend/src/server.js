import express from 'express';
import path from 'path';
import {MongoClient} from 'mongodb';
import {fileURLToPath} from 'url';

const app = express()
const port = 8000


app.get('/questions', async (req, res) => {
    
    // Create client object and wait for connection
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    // Set database
    const db = client.db('questions');

    // Pull data from db and store
    const questions = await db.collection('data').find({}).toArray();
    console.log(questions);
    res.json( questions );
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})