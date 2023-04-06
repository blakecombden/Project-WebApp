import './App.css';
import React, {useState, useEffect, useRef} from "react";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage(props) {



    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("/api/stats", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return (
        <p>Hi</p>
    )
}
function App() {

    useEffect( () => {

    })

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
                      <Form method="post" action="/api/stats" encType="multipart/form-data">
                          <Form.Label>Username:</Form.Label>
                          <Form.Control style={{width:250}}
                                        name={"username"}
                                        ref={userName}
                                        type="text" />
                      </Form>
                      <Nav className='justify-content-center' variant="pills" defaultActiveKey="/signIn">
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

export default App;
