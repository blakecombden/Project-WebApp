import {Route, Routes} from "react-router-dom";
import {GetQuestion2} from "./Question2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetQuestion1() {

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
                (question 1 goes here)
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000/question2"}}>NEXT QUESTION
                </button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000"}}>LOGOUT
                </button>
            </header>
            <Routes>
            <Route path="/question2" element={<GetQuestion2/>} />
            </Routes>
        </div>
    )
}