import { useHistory } from 'react-router-dom';
import { Aside } from '~/container';

import { FormSigIn, Btn } from '~/components';

import style from './Home.module.scss';
import { GoogleIcon } from '~/assets/img';
import { useAuth } from '~/hooks/useAuth';

export function Home() {
  const { user, signInGoogle } = useAuth();
  const history = useHistory();

  const handleGoogleSigIn = async () => {
    if (!user) {
      await signInGoogle();
    }
    history.push('/rooms/new');
  };

  return (
    <Aside>
      <>
        <Btn color="red" type="button" onClick={handleGoogleSigIn}>
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
