import { Aside } from '~/container';

import { GoogleIcon } from '~/assets/img';

import style from './Home.module.scss';
import { FormSigIn, Btn } from '~/components';

export function Home() {
  return (
    <Aside>
      <>
        <Btn color="red" type="button">
          <GoogleIcon />
          <span className={style.HomeSpan}>Cree una sala con Google</span>
        </Btn>

        <p className={style.homeSeparator}>O entre en una sala</p>

        <FormSigIn
          placeholder="Digite el Código de la sala"
          textBtn="Entrar a la sala"
        />
      </>
    </Aside>
  );
}
