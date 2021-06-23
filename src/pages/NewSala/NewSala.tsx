import { FormSigIn } from '~/components';
import { Aside } from '~/container';

export function NewSala() {
  return (
    <Aside>
      <h2>Cree una nueva sala</h2>
      <FormSigIn placeholder="Nombre de la sala" textBtn="Crear sala" />
    </Aside>
  );
}
