import express from 'express';
import path from 'path';
import {MongoClient} from 'mongodb';
import {fileURLToPath} from 'url';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express();
const port = 8000;
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
    const client = new MongoClient(process.env.MONGO_CONNECT);
    await client.connect();
    // Set database
    const db = client.db('triviapp');
    // Pull data from db and store
    const questions = await db.collection('questions').find({}).toArray();
    console.log(questions);
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Web app listening on port ${port}`)
})