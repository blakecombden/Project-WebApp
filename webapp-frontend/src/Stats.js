import {Route, Routes} from "react-router-dom";
import {GetQuestion1} from './Question1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export function GetStats() {

    let currentPlayer = localStorage.getItem("Current Player");

    let gamesPlayed = localStorage.getItem(currentPlayer+" - Games Played");
    let totalScore = localStorage.getItem(currentPlayer+" - Total Score");
    let averageScore = localStorage.getItem(currentPlayer+" - Average Score");
    let perfectGames = localStorage.getItem(currentPlayer+" - Perfect Games");

    currentPlayer = currentPlayer.replace(/['"]+/g, '');

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Welcome, {currentPlayer}!
                            <br></br>
                            Here are your stats.
                        </Card.Text>
                    </Card.Body>
                </Card>
                Games Played: {gamesPlayed}
                <br></br>
                Total Score: {totalScore}
                <br></br>
                Average Score: {averageScore}
                <br></br>
                Perfect Games: {perfectGames}
                <br></br>
            </header>
            <br></br>
            <div>
            <button onClick={(e) => {e.preventDefault();
                window.location.href="http://localhost:3000/question1"}}>PLAY
            </button>
            <button onClick={(e) => {e.preventDefault();
                window.location.href="http://localhost:3000"}}>LOGOUT
            </button>
            </div>
            <Routes>
                <Route path="/question1" element={<GetQuestion1/>} />
            </Routes>
        </div>
    )
}

export default GetStats;