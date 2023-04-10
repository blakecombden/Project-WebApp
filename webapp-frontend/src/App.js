/*const movieData = JSON.parse(fs.readFileSync('./movies.json'));
 */
import './App.css';
import React, {useState, useRef} from "react";
import {GetStats} from './Stats';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function HomePage() {

    const username = useRef();

    function signIn() {
        let name = username.current.value
        if (name === "") {
            return alert("Please enter a username.");
        }
        name = JSON.stringify(name);
        for (let i = 0; i < localStorage.length; i++){
            if (name === localStorage.getItem(localStorage.key(i))) {
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
        name = JSON.stringify(name);
        for (let i = 0; i < localStorage.length; i++){
            if (name === localStorage.getItem(localStorage.key(i))) {
                return alert("Username already exists. Please use a different one.");
            }
        }
        localStorage.setItem(name, name);
        window.location.href = "http://localhost:3000/stats";
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '100rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
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
                    <Form.Control style={{width:250}}
                                  name={"username"}
                                  ref={username}
                                  type="text" />
                    </Form.Label>
                </Form>
                    <button onClick={signIn}>Sign In</button>
                    <button onClick={signUp}>Sign Up</button>
            </header>
        </div>
    )

}

function App() {

    let [stats, getStats] = useState(null);

    return (
        <Routes>
            <Route path="/" element={<HomePage stats={stats} getStats={getStats}/>} />
            <Route path="/stats" element={<GetStats stats={stats} getStats={getStats}/>} />
        </Routes>
    )
}

export default App;