import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '~/contexts/AuthContext';

import { auth, firebase } from '~/services/firebase';

type userType = {
  id: string;
  name: string;
  avatar: string;
};

export const useAuth = () => useContext(AuthContext);

export function useProvideAuth() {
  const [user, setUser] = useState<userType>();

  async function signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;
      setUser({
        id: uid,
        name: displayName || 'usuario sin nombre',
        avatar: photoURL || '',
      });
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userExist) => {
      if (userExist) {
        const { displayName, photoURL, uid } = userExist;
        setUser({
          id: uid,
          name: displayName || 'usuario sin nombre',
          avatar: photoURL || '',
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInGoogle,
  };
}
