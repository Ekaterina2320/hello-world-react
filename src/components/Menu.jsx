import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
//List для создания списка
//ListItem для элементов списка
//ListItemText для текста в элементах списка

const Menu = ({ labs, onLabSelect }) => {
  return (
    <List>
      {labs.map((lab, index) => (
        <ListItem button key={index} onClick={() => onLabSelect(lab)}>{/* элемент списка с обработчиком клика */}
          <ListItemText primary={lab.title} /> {/* заголовок лабораторной работы */}
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
