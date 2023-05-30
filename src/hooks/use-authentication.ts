import { useState, useEffect } from 'react';
import type { User } from 'firebase/auth';

import { FirebaseService } from '../services/firebase';

export function useAuthentication() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    return FirebaseService.onAuthStateChanged(user => {
      if (user) setUser(user);
      else setUser(undefined);
    });
  }, []);

  return { user };
}
