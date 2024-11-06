import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const App = () => {
  const prenom = "SDSaliou"; 

  return (
    <Container className="my-5">
      <Card style={{ width: '20rem',height:'20rem', margin: '0 auto'}}>
        <Image />
        <Card.Body>
          <Name  />
          <Description  />
          <Price />
        </Card.Body>
      </Card>

      <div className="text-center mt-3">
        {prenom ? (
          <>
            <h3 >Bonjour, {prenom}!</h3>
            <img src="/IMG_9187.jpeg" alt="mon image" width="75rem" />
          </>
        ) : (
          <h3>Bonjour!</h3>
        )}
      </div>
    </Container>
  );
};

export default App;
