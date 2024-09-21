import React, { ReactNode } from 'react';
import './IconButton.css';

interface IIconButton {
  children: ReactNode;
  onClick: () => void;
};

function IconButton({children, onClick}: IIconButton) {
  return (
    <button onClick={onClick} className='iconButton'>
      {children}
    </button>
  )
};

export default IconButton