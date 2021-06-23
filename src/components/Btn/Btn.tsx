import React from 'react';

import style from './Btn.module.scss';

type BtnProps = {
  children: React.ReactNode;
  color: string;
  type: 'submit' | 'reset' | 'button';
};

export function Btn({ color, children, type }: BtnProps) {
  return (
    <button type={type} className={`${style.btn} ${style[color]}`}>
      {children}
    </button>
  );
}
