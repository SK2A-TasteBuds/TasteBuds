import { auth, db } from "@/firebase/configs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";

export const signUp = async (email: string, password: string) => {
  const new_user = await createUserWithEmailAndPassword(auth, email, password);
  console.log(new_user);
  //create new user in db
  const usersRef = collection(db, "users");
};
