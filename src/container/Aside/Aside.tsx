import React from 'react';

import { MessageImg } from '~/assets/img';
import logoImg from '~/assets/img/Logo.svg';

import style from './aside.module.scss';

type AsideProps = {
  children: React.ReactNode;
};

export function Aside({ children }: AsideProps) {
  return (
    <div className={style.container}>
      <aside className={style.aside}>
        <MessageImg />

        <div>
          <strong className={style.asideTitle}>
            <span role="img" aria-label="emoji pensativo">
              🤔
            </span>
            Toda Pregunta tiene
            <span className={style.asideTitle}>una respuesta </span>
          </strong>
          <p className={style.asideParrafo}>
            Aprenda y comparta conocimiento con otras personas
          </p>
        </div>
      </aside>
      <main className={style.main}>
        <img src={logoImg} alt="letmeask" className={style.mainLogo} />
        {children}
      </main>
    </div>
  );
}
