import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {GetQuestion2} from "./Question2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function GetQuestion1() {

    // initialize arrays used to get question data from database and display random question
    let [questions, setQuestions] = useState([]);
    let questionArray = [""];
    let randomQuestion = ["", ""];
    let randomInt;
    let chosenQuestion;

    // get Current Player and initialize their score
    let currentPlayer = localStorage.getItem("Current Player");
    let currentScore = 0;
    localStorage.setItem(currentPlayer+ " - Current Score", JSON.stringify(currentScore));

    // get question data
    useEffect(() => {
        fetch("/api/questions")
            .then(response => response.json())
            .then(setQuestions)
            .catch(e => console.log(e.message))
    }, []);

    // check if player's answer of false is correct
    // if so, increase score by 1 and save in localStorage
    const checkIfFalse = (question) => {
        if (question[1] == "False") {
            alert("Correct!");
            currentScore += 1;
            localStorage.setItem(currentPlayer+ " - Current Score", currentScore);
        } else {
            alert("Incorrect!");
        }
        window.location.href="http://localhost:3000/question2"
    }

    // check if player's answer of true is correct
    // if so, increase score by 1 and save in localStorage
    const checkIfTrue = (question) => {
        if (question[1] == "True") {
            alert("Correct!");
            currentScore += 1;
            localStorage.setItem(currentPlayer+ " - Current Score", currentScore);
        } else {
            alert("Incorrect!");
        }
        window.location.href="http://localhost:3000/question2"
    }

    // pick random question from all questions
    function getRandomQuestion(array) {
        randomInt = Math.floor(Math.random() * array.length);
        randomQuestion = array[randomInt];
        chosenQuestion = randomQuestion;
        return randomQuestion;
    }

    // place all question data in an array
    function createQuestionArray(question, answer) {
        questionArray.push([question, answer]);
    }

    // let player log out at any time, removing Current Player and Score from localStorage
    function logout() {
        localStorage.removeItem(currentPlayer+ " - Current Score");
        localStorage.removeItem("Current Player");
        window.location.href="http://localhost:3000"
    }

    // display page with randomly selected question and true and false buttons
    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <h1 style={{ color: 'black'}}>TriviApp</h1>
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
            </header>
            <br></br>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                <Button variant="primary" style={{width:100}} onClick={() => checkIfTrue(chosenQuestion)}>True</Button>
                </Col>
                <Col>
                <Button variant="primary" style={{width:100}} onClick={() => checkIfFalse(chosenQuestion)}>False</Button>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <br></br>
            <Button variant="primary" style={{width:100}} onClick={logout}>LOGOUT
            </Button>
            <Routes>
                <Route path="/question1/*" element={<GetQuestion1 questions={questions} setQuestions={setQuestions}/>} />
                <Route path="/question2" element={<GetQuestion2/>} />
            </Routes>
        </div>
    );
}