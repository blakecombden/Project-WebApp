import {Route, Routes} from "react-router-dom";
import {GetQuestion1} from './Question1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from "react";

export function GetStats() {

    // get Current Player and their data
    let currentPlayer = localStorage.getItem("Current Player");
    let gamesPlayed = localStorage.getItem(currentPlayer+" - Games Played");
    let totalScore = localStorage.getItem(currentPlayer+" - Total Score");
    let averageScore = localStorage.getItem(currentPlayer+" - Average Score");
    let perfectGames = localStorage.getItem(currentPlayer+" - Perfect Games");

    function play() {

        // check if player has never played or has waited 24 hours to play again
        // if so, assign new timestamp
        let rightNow = Date.now();
        let playerStartTime;

        if (localStorage.getItem(currentPlayer+" - Start Time") != null) {
            playerStartTime = localStorage.getItem(currentPlayer+" - Start Time");
            if (rightNow - playerStartTime < 8.64e+7) {
                alert("You can only play once a day! Check back tomorrow!");
            } else {
                localStorage.setItem(currentPlayer+" - Start Time", JSON.stringify(rightNow));
                window.location.href="http://localhost:3000/question1"
            }
        } else {
            localStorage.setItem(currentPlayer+" - Start Time", JSON.stringify(rightNow));
            window.location.href="http://localhost:3000/question1"
        }
    }

    // let player log out at any time, removing Current Player and Score from localStorage
    function logout() {
        localStorage.removeItem(currentPlayer+ " - Current Score");
        localStorage.removeItem("Current Player");
        window.location.href="http://localhost:3000"
    }

    // testing
    function deleteLocalStorage() {
        localStorage.clear();
    }

    // display page with Current Player and their overall stats
    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <h1 style={{ color: 'black'}}>TriviApp</h1>
                        <Card.Text style={{ color: 'black'}}>
                            Welcome, {currentPlayer}!
                            <br></br>
                            Here are your stats.
                        </Card.Text>
                    </Card.Body>
                </Card>
                Total Games Played: {gamesPlayed}
                <br></br>
                Overall Score: {totalScore}/{gamesPlayed*3}
                <br></br>
                Average Score: {averageScore}
                <br></br>
                Number of Perfect Games: {perfectGames}/{gamesPlayed}
                <br></br>
            </header>
            <br></br>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
            <Button variant="primary" style={{width:100}} onClick={play}>PLAY
            </Button>
                </Col>
                <Col>
            <Button variant="primary" style={{width:100}} onClick={logout}>LOGOUT
            </Button>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="primary" style={{width:200}} onClick={deleteLocalStorage}>Delete localStorage (testing)</Button>
            <Routes>
                <Route path="/question1" element={<GetQuestion1/>} />
            </Routes>
        </div>
    )
}