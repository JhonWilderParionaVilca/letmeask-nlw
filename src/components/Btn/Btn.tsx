import React from 'react';

import style from './Btn.module.scss';

type BtnProps = {
  children: React.ReactNode;
  color: string;
};

export const Btn: React.FC<
  BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ color, children, ...props }) => (
  <button className={`${style.btn} ${style[color]}`} {...props}>
    {children}
  </button>
);
