import {Route, Routes} from "react-router-dom";
import {GetStats} from "./Stats";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from "react";

export function GetResults() {

    let currentPlayer = localStorage.getItem("Current Player");

    let gamesPlayed = JSON.parse(localStorage.getItem(currentPlayer+" - Games Played"));

    let currentScore = JSON.parse(localStorage.getItem(currentPlayer+ " - Current Score"));

    let totalScore = JSON.parse(localStorage.getItem(currentPlayer+" - Total Score"));

    let perfectGames = JSON.parse(localStorage.getItem(currentPlayer+" - Perfect Games"));

    let addOne = 0;
    if (currentScore == 3) {
        addOne += 1;
    }

    function update() {
        gamesPlayed += 1;
        localStorage.setItem(currentPlayer+" - Games Played", gamesPlayed);

        totalScore += currentScore;
        localStorage.setItem(currentPlayer+" - Total Score", totalScore);

        let averageScore = Math.round((totalScore/gamesPlayed + Number.EPSILON) * 100) / 100;
        localStorage.setItem(currentPlayer+" - Average Score", averageScore);

        if (currentScore == 3) {
            perfectGames += 1;
        }
        localStorage.setItem(currentPlayer+" - Perfect Games", perfectGames);

        window.location.href="http://localhost:3000/stats";
    }

    function logout() {
        update();
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
                            {currentPlayer}'s Results!
                        </Card.Text>
                    </Card.Body>
                </Card>
                Games Played: {gamesPlayed+1}
                <br></br>
                Total Score: {totalScore+currentScore}/{(gamesPlayed+1)*3}
                <br></br>
                Average Score: {Math.round(((totalScore+currentScore)/(gamesPlayed+1) + Number.EPSILON) * 100) / 100}
                <br></br>
                Perfect Games: {perfectGames+addOne}/{gamesPlayed+1}
            </header>
            <br></br>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
            <Button variant="primary" style={{width:100}} onClick={update}>STATS
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
                <Route path="/stats" element={<GetStats/>} />
            </Routes>
        </div>
    )
}