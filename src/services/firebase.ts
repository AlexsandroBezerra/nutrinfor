import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  getAuth,
  Unsubscribe,
} from 'firebase/auth';
import type {
  NextOrObserver,
  User,
} from 'firebase/auth';
import { query, getFirestore, collection, getDocs } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID
} from '@env';

export class FirebaseService {
  private static readonly firebaseApp = initializeApp({
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
  });

  private static readonly firebaseAuth = getAuth(this.firebaseApp)
  private static readonly firebaseFirestore = getFirestore(this.firebaseApp)

  public static async signUp(name: string, email: string, password: string): Promise<void> {
    const response = await createUserWithEmailAndPassword(this.firebaseAuth, email, password);
    await updateProfile(response.user, { displayName: name });
  }

  public static async signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.firebaseAuth, email, password);
  }

  public static async signOut(): Promise<void> {
    await signOut(this.firebaseAuth);
  }

  public static onAuthStateChanged(nextOrObserver: NextOrObserver<User>): Unsubscribe {
    return onAuthStateChanged(this.firebaseAuth, nextOrObserver);
  }

  public static async fetchFoods(): Promise<DocumentData[]> {
    const docs: DocumentData[] = []

    const foodsRef = collection(this.firebaseFirestore, 'foods');
    const results = await getDocs(query(foodsRef));
    results.forEach(doc => docs.push(doc.data()));

    return docs;
  }
}
