import React from 'react';
import styles from './Bio.css';
import profileImage from '../../assets/images/anthony-scinocco.jpg';

const Bio = () => (
  <section className={styles.container}>
    <header className={styles['profile-image--container']}>
      <img
        className={styles['profile-image']}
        src={profileImage}
        alt={'Anthony Scinocco | Full Stack Developer'}
      />
    </header>
    <main className={styles['profile-description--container']}>
      <h1 className={styles['profile-description--name']}>Anthony Scinocco</h1>
      <h2 className={styles['profile-description--job-title']}>Full Stack Developer</h2>
    </main>
  </section>
);

export default Bio;

