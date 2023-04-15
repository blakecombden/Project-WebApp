import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {GetQuestion3} from "./Question3";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function GetQuestion2() {

    let [questions, setQuestions] = useState([]);
    let questionArray = [""];
    let randomQuestion = ["", ""];
    let randomInt;
    let chosenQuestion;

    let currentScore = 0;
    let currentPlayer = localStorage.getItem("Current Player");
    currentScore = JSON.parse(localStorage.getItem(currentPlayer+ " - Current Score"));


    useEffect(() => {
        fetch("/api/questions")
            .then(response => response.json())
            .then(setQuestions)
            .catch(e => console.log(e.message))
    }, []);

    const checkIfFalse = (question) => {
        if (question[1] == "False") {
            alert("Correct!");
            currentScore += 1;
            localStorage.setItem(currentPlayer+ " - Current Score", currentScore);
        } else {
            alert("Incorrect!");
        }
        window.location.href="http://localhost:3000/question3"
    }

    const checkIfTrue = (question) => {
        if (question[1] == "True") {
            alert("Correct!");
            currentScore += 1;
            localStorage.setItem(currentPlayer+ " - Current Score", currentScore);
        } else {
            alert("Incorrect!");
        }
        window.location.href="http://localhost:3000/question3"
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

    function logout() {
        localStorage.removeItem(currentPlayer+ " - Current Score");
        localStorage.removeItem("Current Player");
        window.location.href="http://localhost:3000"
    }

    // testing
    function deleteLocalStorage() {
        localStorage.clear();
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <h1 style={{ color: 'black'}}>TriviApp</h1>
                        <Card.Text style={{ color: 'black'}}>
                            Question 2
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
            <br></br>
            <br></br>
            <br></br>
            <Button variant="primary" style={{width:200}} onClick={deleteLocalStorage}>Delete localStorage (testing)</Button>
            <Routes>
                <Route path="/question1/*" element={<GetQuestion2 questions={questions} setQuestions={setQuestions}/>} />
                <Route path="/question2" element={<GetQuestion3/>} />
            </Routes>
        </div>
    );
}