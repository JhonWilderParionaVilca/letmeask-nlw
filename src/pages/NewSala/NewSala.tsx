import React from 'react';
import { Link } from 'react-router-dom';

import { FormSigIn } from '~/components';
import { Aside } from '~/container';
import { useAuth } from '~/hooks/useAuth';

import style from './NewSala.module.scss';

export function NewSala() {
  const { user } = useAuth();

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Aside>
      <h1>{user?.name}</h1>
      <h2 className={style.title}>Cree una nueva sala</h2>
      <FormSigIn
        placeholder="Nombre de la sala"
        textBtn="Crear sala"
        handleSubmit={handleCreateRoom}
      />
      <p className={style.returnParragraph}>
        ¿Quiere entrar en una sala existente? <Link to="/">Click aqui</Link>
      </p>
    </Aside>
  );
}
