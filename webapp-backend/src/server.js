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

// get all questions in db
app.get('/api/questions', async (req, res) => {
    
    // Create client object and wait for connection
    const client = new MongoClient(process.env.MONGO_CONNECT);
    await client.connect();
    // Set database
    const db = client.db('triviapp');
    // Pull data from db and store
    const questions = await db.collection('questions').find({}).toArray();
    res.json(questions);
});

// add any number of questions to db
app.post('/api/append', async (req, res) => {
    const client = new MongoClient(process.env.MONGO_CONNECT);
    await client.connect();
    const db = client.db('triviapp');

    let data = req.body;

    try{
        await db.collection('questions').insertMany(data);
        res.json(data);
    } catch (e) {
        console.log("Error");
        console.log(e);
    }
});

// override db with any number of questions
app.post('/api/override', async (req, res) => {

    // Create client object and wait for connection
    const client = new MongoClient(process.env.MONGO_CONNECT);
    await client.connect();
    // Set database
    const db = client.db('triviapp');
    // Remove all data from the database
    await db.collection('questions').deleteMany();
    res.sendStatus(200);

    //Repopulate the database
    let data = req.body;

    try{
        await db.collection('questions').insertMany(data);
        res.sendStatus(200);
    } catch (e) {
        console.log("Error");
        console.log(e);
    }
});

// delete all questions from db
app.post('/api/removeAll', async (req, res) => {
    const client = new MongoClient(process.env.MONGO_CONNECT);
    await client.connect();
    const db = client.db('triviapp');
    await db.collection('questions').deleteMany();
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Web app listening on port ${port}`)
})