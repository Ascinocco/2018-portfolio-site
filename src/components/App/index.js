import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import './App.css';

const { Row, Column } = Grid;

const App = () => (
  <Grid
    container
    columns={3}
    stackable
    stretched
    textAlign={'left'}
  >
    <Row className={'portfolio--row'}>
      <Column width={4}>
        <h1>Bio</h1>
      </Column>
      <Column width={6}>
        <h1>Experience &amp; Education</h1>
      </Column>
      <Column width={6}>
        <h1>Github Feed</h1>
      </Column>
    </Row>
    <Row className={'portfolio--row'}>
      <Column width={5}>
        <h1>Hobbies &amp; Interests</h1>
      </Column>
      <Column width={11}>
        <Row>
          <Container>
            <h1>My Favourite Projects</h1>
          </Container>
        </Row>
        <Row>
          <Container>
            <h1>Project One</h1>
          </Container>
        </Row>
        <Row>
          <Container>
            <h1>Project Two</h1>
          </Container>
        </Row>
        <Row>
          <Container>
            <h1>Project Three</h1>
          </Container>
        </Row>
      </Column>
    </Row>
  </Grid>
);

export default App;
