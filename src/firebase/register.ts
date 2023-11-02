import { auth, db } from "@/firebase/configs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection,doc,setDoc } from "firebase/firestore";

export const signUp = async (email: string, password: string) => {
  const new_user = await createUserWithEmailAndPassword(auth, email, password);
  console.log("uid",new_user.user.uid);
  const uid = new_user.user.uid;
  const user_mail = new_user.user.email;
  //create new user in db
  const usersRef = collection(db, "users");
   await setDoc(doc(usersRef, uid), {
  
     email: user_mail,
     
   });

};
