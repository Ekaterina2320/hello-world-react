//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Container as MuiContainer, Grid, CssBaseline, Drawer } from '@mui/material'; // Импортируем Container и Grid из MUI для макета
import Container from './components/Container';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Header from './components/Header'; // 3лб
import Footer from './components/Footer'; // 3лб
import Menu from './components/Menu'; // 3лб
import Content from './components/Content'; // 3лб


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
// 3лб
const labs = [
  { title: 'Лабораторная работа 1', content: 'Содержимое лабораторной работы 1' },
  { title: 'Лабораторная работа 2', content: 'Содержимое лабораторной работы 2' },
  { title: 'Лабораторная работа 3', content: 'Содержимое лабораторной работы 3' }

];

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('header'); // Состояние для выбранного компонента
  const [selectedLab, setSelectedLab] = useState(labs[0]); // Устанавливаем начальную лабораторную работу
  const [menuOpen, setMenuOpen] = useState(false); // Состояние для открытия меню

    // Массив кнопок с названиями и цветами
  const buttons = [
      { text: 'Кнопка 1', color: 'blue' },
      { text: 'Кнопка 2', color: 'green' },
      { text: 'Кнопка 3', color: 'orange' },
      { text: 'Кнопка 4', color: 'purple' }
  ];
    // Объект для стандартной кнопки
  const defaultButton = {
    text: 'Нажми на меня',
    color: 'Violet'
    };

  const handleNavigate = (component) => {
    setSelectedComponent(component); // Устанавливаем выбранный компонент
    if (component === 'menu') {
      setMenuOpen(true); // Открываем меню при выборе
    } else {
      setMenuOpen(false); // Закрываем меню для других компонентов
    }
  };

 return (
  <MuiContainer className="app">
    <CssBaseline />
    <Navbar onNavigate={handleNavigate} /> {/* Компонент навигационной панели */}

    {selectedComponent === 'header' && <Header />} {/* Заголовок */}

    {/* Меню отображается в Drawer */}
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <Menu labs={labs} onLabSelect={(lab) => { setSelectedLab(lab); setMenuOpen(false); }} />
    </Drawer>

    <h1>Привет, мир!</h1>
    <div className="buttons-container"> {/* Контейнер для кнопок */}
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
        onClick={() => alert(`${defaultButton.text}: Привет мир!`)} // Обработчик клика для стандартной кнопки
      />
    </div>

    {/* Контент с лабораторными работами */}
    <Grid container spacing={2}> {/* Сетка для размещения меню и содержимого */}
      <Grid item xs={12} md={3}> {/* Меню занимает 3 колонки на больших экранах и 12 на малых */}
        {/* Здесь можно добавить дополнительное меню, если нужно */}
      </Grid>
      <Grid item xs={12} md={9}>
        <Content lab={selectedLab} />
      </Grid>
    </Grid>

      { <Footer />} {/* Подвал */}
    </MuiContainer>
  );
};

export default App;


