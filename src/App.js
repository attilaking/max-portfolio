import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import './assets/style/App.scss';
import './assets/style/main.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
