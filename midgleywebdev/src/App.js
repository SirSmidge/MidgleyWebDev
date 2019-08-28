import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bgPhoto" alt="background">
          <div id='banner'>
            <h1>Midgley Web Development</h1>
          </div>
        </div>
        <caption>Photo by Markus Spiske on Unsplash</caption>
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
