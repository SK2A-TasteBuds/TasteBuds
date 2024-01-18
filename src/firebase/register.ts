import { auth, db } from '@/firebase/configs';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

export const signUp = async (email: string, password: string, name: string) => {
  const new_user = await createUserWithEmailAndPassword(auth, email, password);

  //create new user in db
  const uid = new_user.user.uid;
  const user_mail = new_user.user.email;
  const usersRef = collection(db, 'users');
  await setDoc(doc(usersRef, uid), {
    email: user_mail,
    name: name,
    image:
      'https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/User_Icon.png?alt=media&token=f60dcd82-d812-463e-ae23-3c04cf7bab0f',
    created_at: serverTimestamp(),
    keeps: [],
    likes: [],
  });
};
