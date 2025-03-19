import React from 'react';
import { Container, Typography, Box } from '@mui/material';
//Box для создания контейнера
//Typography для стилизации текста


const Footer = () => {
  return (
    <Box sx={{ p: 2, mt: 'auto', backgroundColor: '#3f51b5', color: 'white' }}> {/* Стилизация подвала */}
      <Typography variant="body1">© 2025 Лабораторные работы</Typography> {/* Текст подвала */}
    </Box>
  );
};

export default Footer;
