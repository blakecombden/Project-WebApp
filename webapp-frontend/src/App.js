/*const movieData = JSON.parse(fs.readFileSync('./movies.json'));
 */
import './App.css';
import React, {useState, useEffect, useRef} from "react";
import {GetStats} from './Stats';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage() {

    const userName = useRef();

    return (
        <div className="App">
            <header className="App-header">
                <Card style={{ width: '99rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text>
                            Sign in to view current record and play today's quiz.
                            Or sign up to start playing.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Form method="post" action="/" encType="multipart/form-data">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control style={{width:250}}
                                  name={"userName"}
                                  ref={userName}
                                  type="text" />
                </Form>
                <Nav className='justify-content-center' variant="pills" defaultActiveKey="/stats">
                    <Nav.Item>
                        <Nav.Link href="/stats">Sign In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/stats">Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>

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
