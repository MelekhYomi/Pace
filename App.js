import React, { useState } from 'react';
import './App.css';

function App() {
  // State management using useState hook
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Event Handlers for Counter
  const handleIncrease = () => setCount((prevCount) => prevCount + 1);
  const handleDecrease = () => setCount((prevCount) => prevCount - 1);
  const handleReset = () => setCount(0); // Bonus feature

  // Event Handler for Input Field
  const handleNameChange = (event) => setName(event.target.value);

  // Helper values for conditional styling and rendering
  const isEven = count % 2 === 0;
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      {/* Header & Bio */}
      <header className="header">
        <h1>My First React App</h1>
        <p className="bio">
          Hi! I am a passionate frontend software engineer who loves building clean, accessible, and high-performance interactive web applications.
        </p>
      </header>

      <main className="main-content">
        {/* Counter Section */}
        <section className="card counter-section">
          <h2>Counter</h2>
          <div className="count-display">{count}</div>
          
          <div className="button-group">
            <button onClick={handleIncrease} className="btn btn-increase">
              Increase
            </button>
            <button onClick={handleDecrease} className="btn btn-decrease">
              Decrease
            </button>
            {/* Bonus: Reset Button */}
            <button onClick={handleReset} className="btn btn-reset">
              Reset
            </button>
          </div>

          {/* Conditional Rendering for Parity */}
          <p className="parity-message">
            {isEven ? 'Even number' : 'Odd number'}
          </p>
        </section>

        {/* Dynamic Greeting Section */}
        <section className="card greeting-section">
          <h2>Personalized Greeting</h2>
          <input
            type="text"
            placeholder="Type your name here..."
            value={name}
            onChange={handleNameChange}
            className="name-input"
          />

          {/* Conditional Rendering for Greeting */}
          {name.trim() !== '' && (
            <h3 className="greeting-text">
              Hello, {name}! Welcome to my React app
            </h3>
          )}
        </section>
      </main>

      {/* Bonus: Footer with Current Year */}
      <footer className="footer">
        <p>&copy; {currentYear} My First React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;