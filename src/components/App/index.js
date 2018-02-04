import React from 'react';
import styles from './App.css';

import Bio from '../Bio';
import Container from '../Container';

const App = () => (
  <main className={styles.container}>
    <Bio />
    <Container containerClassName={styles.something}>
      <h1>Some Title</h1>
      <h2>Some Sub-title</h2>
      <p>Some test</p>
      <div>
        <span>div span fun</span>
      </div>
    </Container>
  </main>
);

export default App;
