import React from 'react';

import { Btn } from '~/components';

import style from './FormSigIn.module.scss';
import { SigIngIcon } from '~/assets/img';

type FormSigInProps = {
  placeholder: string;
  textBtn: string;
};

export function FormSigIn({ placeholder, textBtn }: FormSigInProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
  };
  return (
    <>
      <form className={style.form}>
        <input
          type="text"
          placeholder={placeholder}
          className={style.formInput}
        />

        <Btn color="primary" type="submit" onClick={handleClick}>
          <SigIngIcon />
          <span className={style.formSpan}>{textBtn}</span>
        </Btn>
      </form>
    </>
  );
}
