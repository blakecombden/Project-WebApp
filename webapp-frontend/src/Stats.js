import {Route, Routes} from "react-router-dom";
import {GetQuestion1} from './Question1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetStats() {

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Your Stats.
                        </Card.Text>
                    </Card.Body>
                </Card>
                (stats go here)
                <button onClick={(e) => {e.preventDefault();
                        window.location.href="http://localhost:3000/question1"}}>PLAY
                </button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000"}}>LOGOUT
                </button>
            </header>
            <Routes>
                <Route path="/question1" element={<GetQuestion1/>} />
            </Routes>
        </div>
    )
}

export default GetStats;