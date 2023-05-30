import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import { FirebaseService } from '../services/firebase';

const FoodContext = createContext<DocumentData[]>([]);

export function FoodContextProvider({ children }: { children: ReactNode }) {
  const [food, setFood] = useState<DocumentData[]>([])

  useEffect(() => {
    FirebaseService.fetchFoods().then(data => setFood(data))
  }, [])

  return (
    <FoodContext.Provider value={food}>
      {children}
    </FoodContext.Provider>
  )
}

export function useFoods() {
  return useContext(FoodContext)
}
