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
      <div className={styles['profile-about-me']}>
        <p>
          Hi I&#39;m Anthony. Here is some text about.
          This is my life. Woohoo, blah blah blah. Witty comment. Let&#39;s chat.
        </p>
        <h2>You can find me on:</h2>
        <ul>
          <li>
            <a href={'https://google.ca'} className={styles['portfolio-link']}>LinkedIn</a>
          </li>
          <li>
            <a href={'https://google.ca'} className={styles['portfolio-link']}>Github</a>
          </li>
          <li>
            <a href={'https://google.ca'} className={styles['portfolio-link']}>Twitter</a>
          </li>
          <li>
            <a href={'https://google.ca'} className={styles['portfolio-link']}>Docker Hub</a>
          </li>
        </ul>
      </div>
    </main>
    <footer className={styles['profile-keywords--container']}>
      <span>Geek</span>
      <span>&nbsp;&bull;&nbsp;</span>
      <span>Passionate</span>
      <span>&nbsp;&bull;&nbsp;</span>
      <span>Organized</span>
    </footer>
  </section>
);

export default Bio;

