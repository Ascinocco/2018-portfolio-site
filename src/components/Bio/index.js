import React from 'react';
import './Bio.css';

import Container from '../Layout/Container';

import anthony from '../../assets/images/anthony-scinocco.jpg';

const description = 'Hi I am Anthony, this text is in progress';

const Bio = () => (
  <Container>
    <div
      className={'bio--card'}
    >
    <div>
      <img
        className={'bio--card--image'}
        alt={'Anthony Scinocco | Full Stack Developer'}
        src={anthony}
      />
    </div>
      
      <h1>Anthony Scinocco</h1>
      <h2>Full Stack Developer</h2>
      <p>{description}</p>
    </div>
  </Container>
);

export default Bio;
