import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {GetQuestion2} from "./Question2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetQuestion1() {

    let [questions, setQuestions] = useState([]);
    let questionArray = [""];
    let randomQuestion = ["", ""];
    let randomInt;
    let chosenQuestion;

    let score = 0;
    localStorage.setItem("score", JSON.stringify(score));
    console.log("Score in storage: " + localStorage.getItem("score"));
    score = JSON.parse(localStorage.getItem("score"));
    console.log("Score variable: " + score);


    useEffect(() => {
        fetch("/api/questions")
            .then(response => response.json())
            .then(setQuestions)
            .catch(e => console.log(e.message))
    }, []);

    const checkIfFalse = (question) => {
        if (question[1] == "False") {
            alert("Correct!");
            score += 1;
            localStorage.setItem("score", score);
        } else {
            alert("Incorrect!");
        }
        window.location.href="http://localhost:3000/question2"
    }

    const checkIfTrue = (question) => {
        if (question[1] == "True") {
            alert("Correct!");
            score += 1;
            localStorage.setItem("score", score);
        } else {
            alert("Incorrect!");
        }
        window.location.href="http://localhost:3000/question2"
    }

    function getRandomQuestion(array) {
        randomInt = Math.floor(Math.random() * array.length);
        randomQuestion = array[randomInt];
        chosenQuestion = randomQuestion;
        return randomQuestion;
    }

    function createQuestionArray(question, answer) {
        questionArray.push([question, answer]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Question 1
                        </Card.Text>
                    </Card.Body>
                </Card>
                {
                    questions.map(q =>
                        {createQuestionArray(q.question, q.answer)})
                }
                {
                    getRandomQuestion(questionArray)[0]
                }
                <br></br>
                <button variant="danger" onClick={() => checkIfTrue(chosenQuestion)}>True</button>
                <button variant="danger" onClick={() => checkIfFalse(chosenQuestion)}>False</button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000/question2"}}>NEXT QUESTION
                </button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000"}}>LOGOUT
                </button>
            </header>
            <Routes>
                <Route path="/question1/*" element={<GetQuestion1 questions={questions} setQuestions={setQuestions}/>} />
                <Route path="/question2" element={<GetQuestion2/>} />
            </Routes>
        </div>
    );
}

export default GetQuestion1;