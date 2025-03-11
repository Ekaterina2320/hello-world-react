import logo from './logo.svg';
import './App.css';
import React from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Button from './components/Button';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App; */

const App = () => {
  // Массив кнопок с названиями и цветами
  const buttons = [
      { text: 'Кнопка 1', color: 'blue' },
      { text: 'Кнопка 2', color: 'green' },
      { text: 'Кнопка 3', color: 'orange' },
      { text: 'Кнопка 4', color: 'purple' }
  ];

  const defaultButton = {
    text: 'Нажми на меня',
    color: 'Violet'
    };

 return (
  <div className="app">
    <Navbar />
    <Container>
      <h1>Привет, мир!</h1>
      <div className="buttons-container">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            text={btn.text}
            color={btn.color}
            onClick={() => alert(`${btn.text}: Hello World!`)}
          />
        ))}
        <Button
            key="default"
            text={defaultButton.text}
            color={defaultButton.color}
            onClick={() => alert(`${defaultButton.text}: Привет мир!`)}
        />
      </div>
    </Container>
  </div>
);
};

export default App; 
