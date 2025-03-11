/* import React from 'react';

const Button = ({ text, color, onClick }) => {
  return (
    <button 
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button; */

import React from 'react';

const Button = ({ text, color, onClick }) => {
  // Если цвет не указан или невалидный, используем fallback
  const finalColor = color || 'Violet ';

  return (
    <button 
      className="btn"
      style={{ backgroundColor: finalColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;