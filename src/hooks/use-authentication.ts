import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { firebaseAppAuth } from '../firebase';

export function useAuthentication() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(firebaseAppAuth, (user) => {
      if (user) setUser(user);
      else setUser(undefined);
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return { user };
}
