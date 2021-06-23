import React from 'react';

import style from './Btn.module.scss';

type BtnProps = {
  children: React.ReactNode;
  color: string;
  type: 'submit' | 'reset' | 'button';
  // eslint-disable-next-line no-unused-vars
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export function Btn({ color, children, type, onClick }: BtnProps) {
  return (
    <button
      type={type}
      className={`${style.btn} ${style[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
