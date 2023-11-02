import { auth, db } from "@/firebase/configs";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email: string, password: string) => {
  const new_user = await createUserWithEmailAndPassword(auth, email, password);
  console.log(new_user);
};
