//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//Elementi Bootstrap trasformati in elementi React
import { Col, Container, Row } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import MyButton from './Button.js';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          Premi qui: <MyButton lang='en' />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

