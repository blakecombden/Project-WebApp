import {Route, Routes} from "react-router-dom";
import {GetStats} from "./Stats";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetResults() {

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Results
                        </Card.Text>
                    </Card.Body>
                </Card>
                (results go here)
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000/stats"}}>STATS
                </button>
                <button onClick={(e) => {e.preventDefault();
                    window.location.href="http://localhost:3000"}}>LOGOUT
                </button>
            </header>
            <Routes>
                <Route path="/stats" element={<GetStats/>} />
            </Routes>
        </div>
    )
}