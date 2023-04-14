import {Route, Routes} from "react-router-dom";
import {GetQuestion3} from "./Question3";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetQuestion2() {

    let score;
    console.log("Score in storage: " + localStorage.getItem("score"));
    score = JSON.parse(localStorage.getItem("score"));
    console.log("Score variable: " + score);

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Question 2
                        </Card.Text>
                    </Card.Body>
                </Card>
                (question 2 goes here)
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000/question3"}}>NEXT QUESTION
                </button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000"}}>LOGOUT
                </button>
            </header>
            <Routes>
                <Route path="/question3" element={<GetQuestion3/>} />
            </Routes>
        </div>
    )
}