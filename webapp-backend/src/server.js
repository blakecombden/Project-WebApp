import express from 'express';
import path from 'path';
import {MongoClient} from 'mongodb';
import {fileURLToPath} from 'url';

const app = express();
const port = 8000;
let url = "mongodb://127.0.0.1:27017";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/api/questions', async (req, res) => {
    
    // Create client object and wait for connection
    const client = new MongoClient(url);
    await client.connect();
    // Set database
    const db = client.db('questions');
    // Pull data from db and store
    const questions = await db.collection('data').find({}).toArray();
    console.log(questions);
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})