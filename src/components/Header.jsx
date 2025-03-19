import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
//AppBar для заголовка
//Toolbar для размещения элементов в заголовке
//Typography для стилизации текста

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Лабораторные работы</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;