import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion, Button, Card, FormControl, InputGroup } from 'react-bootstrap';

function App() {

  const encriptar = (texto) => {
 

  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {encriptar("Hola")}
        </p>

        <Card className="text-center" bg="success" style={{ width: '36rem' }} >
          <Card.Header color="blue">
            Escribe el mensaje que vas a encriptar!!!
          </Card.Header>

          <Card.Body>
            <InputGroup>

              <FormControl as="textarea" aria-label="mensaje" id="mensaje" />
            </InputGroup>
            <Card.Text></Card.Text>
            <Button variant="primary" type="submit">Encriptar</Button>{' '}
            <Card.Text></Card.Text>
            <InputGroup>
              <FormControl as="textarea" aria-label="mensaje" />
            </InputGroup>
          </Card.Body>

        </Card>

      </header>
    </div>
  );
}

export default App;
