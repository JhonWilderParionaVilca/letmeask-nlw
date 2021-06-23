import { SigIngIcon } from '~/assets/img';

import { Btn } from '~/components';

import style from './FormSigIn.module.scss';

type FormSigInProps = {
  placeholder: string;
  textBtn: string;
};

export function FormSigIn({ placeholder, textBtn }: FormSigInProps) {
  return (
    <>
      <form className={style.form}>
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
