import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../logo.svg';
import '../css/app.css';

const App = () => {

  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [next, setNext] = useState<string>('');

  /* Run Once Initialization */
  useEffect(()=> {

  }, []);


  return (
    <div className="container">
          <Row>
            <Col>
              <img src={logo} className="App-logo w-full" alt="logo" />
            </Col>
            <Col>
              <img src={logo} className="App-logo w-full" alt="logo" />
            </Col>
          </Row>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
    </div>
  );
}

export default App;
