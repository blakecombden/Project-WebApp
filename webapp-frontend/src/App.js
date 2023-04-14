/*const movieData = JSON.parse(fs.readFileSync('./movies.json'));
 */
import './App.css';
import {Routes, Route} from "react-router-dom";
import React, {useRef} from "react";
import {GetStats} from './Stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {GetQuestion1} from "./Question1";
import {GetQuestion2} from "./Question2";
import {GetQuestion3} from "./Question3";
import {GetResults} from "./Results";

function HomePage() {

    const username = useRef();

    function signIn() {
        let name = username.current.value
        if (name === "") {
            return alert("Please enter a username.");
        }

        for (let i = 0; i < localStorage.length; i++){
            if (name === localStorage.key(i)) {
                localStorage.setItem("Current Player", name);
                window.location.href = "http://localhost:3000/stats";
                return null
            }
        }
        return alert("Username does not exist. Try again or sign up!")
    }

    function signUp() {
        let name = username.current.value
        if (name === "") {
            return alert("Please enter a username.");
        }

        for (let i = 0; i < localStorage.length; i++){
            if (name === localStorage.key(i)) {
                return alert("Username already exists. Please use a different one.");
            }
        }
        localStorage.setItem(name, name);
        localStorage.setItem(name+" - Games Played", JSON.stringify(0));
        localStorage.setItem(name+" - Total Score", JSON.stringify(0));
        localStorage.setItem(name+" - Average Score", JSON.stringify(0));
        localStorage.setItem(name+" - Perfect Games", JSON.stringify(0));
        localStorage.setItem("Current Player", name);
        window.location.href = "http://localhost:3000/stats";
    }

    function deleteLocalStorage() {
        localStorage.clear();
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{color:'black'}}>TriviApp</Card.Title>
                        <Card.Text style={{ color: 'black'}}>
                            Sign in to view your current record and play today's quiz.
                        </Card.Text>
                        <Card.Text style={{ color: 'black'}}>
                        Or sign up to start playing.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Form>
                    <Form.Label>Username:
                    <Form.Control style={{width:250, textAlign:"center"}}
                                  name={"username"}
                                  ref={username}
                                  type="text" />
                    </Form.Label>
                </Form>
            </header>
            <br></br>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
            <Button variant="primary" style={{width:100}} onClick={signIn}>SIGN IN</Button>
                </Col>
                <Col>
            <Button variant="primary" style={{width:100}} onClick={signUp}>SIGN UP</Button>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="primary" style={{width:200}} onClick={deleteLocalStorage}>Delete localStorage</Button>
        </div>
    )

}

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/stats/*" element={<GetStats/>} />
            <Route path="/question1/*" element={<GetQuestion1/>} />
            <Route path="/question2" element={<GetQuestion2/>} />
            <Route path="/question3" element={<GetQuestion3/>} />
            <Route path="/results" element={<GetResults/>} />
        </Routes>
    )
}

export default App;