import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from './useAuth';

export function useRequireAuth(redirectUrl = '/') {
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth.user === undefined) {
      history.push(redirectUrl);
    }
  }, [auth, history, redirectUrl]);
  return auth;
}
