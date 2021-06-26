import { Link } from 'react-router-dom';

import { FormSigIn } from '~/components';
import { Aside } from '~/container';
import { useAuth } from '~/hooks/useAuth';
import { useRequireAuth } from '~/hooks/useRequireAuth';

import style from './NewSala.module.scss';

export function NewSala() {
  const auth = useRequireAuth();
  const { user } = useAuth();

  if (!auth) {
    return <p>Cargando....</p>;
  }

  return (
    <Aside>
      <h1>{user?.name}</h1>
      <h2 className={style.title}>Cree una nueva sala</h2>
      <FormSigIn placeholder="Nombre de la sala" textBtn="Crear sala" />
      <p className={style.returnParragraph}>
        ¿Quiere entrar en una sala existente? <Link to="/">Click aqui</Link>
      </p>
    </Aside>
  );
}
