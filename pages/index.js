import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Landing Page</title>
        <meta name='description' content='A simple landing page with a search bar' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className={styles.nav}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </nav>

      <main className={styles.main}>
        <input
          type='search'
          className={styles.searchBar}
          placeholder='Search...'
          value={search}
          onChange={handleSearchChange}
        />
      </main>

      <footer className={styles.footer}>
        © 2025 Simple Landing Page
      </footer>
    </div>
  );
}