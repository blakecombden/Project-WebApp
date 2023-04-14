import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {GetQuestion2} from "./Question2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetQuestion1(props) {

    let [questions, setQuestions] = useState([]);
    let questionArray = [""];
    let randomQuestion = ["", ""];
    let randomInt;
    let chosenQuestion;
    let counter = 0;
    let number = 1;
    localStorage.setItem("counter", JSON.stringify(counter));
    let saved = JSON.parse(localStorage.counter);
    console.log(saved);
    localStorage.setItem("counter", JSON.stringify(number));
    saved = JSON.parse(localStorage.counter);
    console.log(saved);


    useEffect(() => {
        fetch("/api/questions")
            .then(response => response.json())
            .then(setQuestions)
            .catch(e => console.log(e.message))
    }, []);

    const checkIfFalse = (question) => {
        if (question[1] == "False") {
            // correct, do things
            alert("Correct!");
        } else {
            // incorrect, do things
            alert("Incorrect!");
        }
        counter += 1;
        if (counter == 3) {
            window.location.href="http://localhost:3000/results"
        }
        window.location.reload();
    }

    const checkIfTrue = (question) => {
        if (question[1] == "True") {
            // correct, do things
            alert("Correct!");
        } else {
            // incorrect, do things
            alert("Incorrect!");
        }
        counter += 1;
        if (counter == 3) {
            window.location.href="http://localhost:3000/results"
        }
        window.location.reload();
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