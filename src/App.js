import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Card from 'react-bootstrap/Card';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };


  return (

   
     <Container className="mt-5" >
      <Card style={{ width: '68rem' }}>
      <Card.Body>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="num1">
              <Form.Label>First number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter first number "
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="num2">
              <Form.Label>Second number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="mr-2" onClick={handleAddition}>
              Add
            </Button> &nbsp;
            <Button variant="info" className="mr-2" onClick={handleSubtraction}>
              Subtract
            </Button> &nbsp;
            <Button variant="success" className="mr-2" onClick={handleMultiplication}>
              Multiply
            </Button> &nbsp;
            <Button variant="warning" onClick={handleDivision}>
              Divide
            </Button>
          </Form>
          {result !== '' && (
            <div className="mt-4">
              <h4>Result: {result}</h4>
            </div>
          )}
        </Col>
      </Row>
      </Card.Body>
  </Card>
    </Container>
 
    
  )
;
}

export default App;
