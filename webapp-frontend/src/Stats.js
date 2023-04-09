import React, {useEffect, useRef} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import App from "./App";

export function GetStats() {

    useEffect( () => {

    })

    return (

        <div className="App">
            <header className="App-header">
                <Card style={{ width: '99rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black'}}>TriviApp</Card.Title>
                        <Card.Text>
                            Your Stats.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Nav className='justify-content-center' variant="pills" defaultActiveKey="/stats">
                    <Nav.Item>
                        <Nav.Link href="/play">Play</Nav.Link>
                    </Nav.Item>
                </Nav>

            </header>
        </div>
    )
}