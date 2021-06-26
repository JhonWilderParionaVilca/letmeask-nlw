/* eslint-disable no-unused-vars */
import React from 'react';

import { Btn } from '~/components';

import style from './FormSigIn.module.scss';
import { SigIngIcon } from '~/assets/img';

type FormSigInProps = {
  placeholder: string;
  textBtn: string;
  handleSubmit(event: React.FormEvent): void;
};

export function FormSigIn({
  placeholder,
  textBtn,
  handleSubmit,
}: FormSigInProps) {
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          className={style.formInput}
        />

        <Btn color="primary" type="submit">
          <SigIngIcon />
          <span className={style.formSpan}>{textBtn}</span>
        </Btn>
      </form>
    </>
  );
}
