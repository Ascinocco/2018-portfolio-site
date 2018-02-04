import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import './Bio.css';

import anthony from '../../assets/images/anthony-scinocco.jpg';

const description = 'Hi I am Anthony, this text is in progress';

const Bio = () => (
  <Container
    className={'bio--card--container'}
    fluid
  >
    <Card
      className={'bio--card'}
    >
      <img
        className={'bio--card--image'}
        alt={'Anthony Scinocco | Full Stack Developer'}
        src={anthony}
      />
      <h1>Anthony Scinocco</h1>
      <h2>Full Stack Developer</h2>
      <p>{description}</p>
    </Card>
  </Container>
);

export default Bio;
