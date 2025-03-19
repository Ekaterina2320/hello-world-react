import React from 'react';
import { Typography } from '@mui/material';
//Typography для стилизации текста

const Content = ({ lab }) => { // Принимаем выбранную лабораторную работу
  return (
    <div>
      <Typography variant="h5">{lab.title}</Typography> {/* Заголовок лабораторной работы */}
      <Typography variant="body1">{lab.content}</Typography> {/* Содержимое лабораторной работы */}
    </div>
  );
};

export default Content;
