import {Route, Routes} from "react-router-dom";
import {GetResults} from "./Results";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetQuestion3() {

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Question 3
                        </Card.Text>
                    </Card.Body>
                </Card>
                (question 3 goes here)
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000/results"}}>RESULTS
                </button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000"}}>LOGOUT
                </button>
            </header>
            <Routes>
                <Route path="/results" element={<GetResults/>} />
            </Routes>
        </div>
    )
}