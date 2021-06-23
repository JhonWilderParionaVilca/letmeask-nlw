import { FormSigIn } from '~/components';
import { Aside } from '~/container';

import style from './NewSala.module.scss';

export function NewSala() {
  return (
    <Aside>
      <h2 className={style.title}>Cree una nueva sala</h2>
      <FormSigIn placeholder="Nombre de la sala" textBtn="Crear sala" />
      <p className={style.returnParragraph}>
        ¿Quiere entrar en una sala existente? <a href="/">Click aqui</a>
      </p>
    </Aside>
  );
}
