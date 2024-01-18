import NextAuth, { NextAuthOptions, Profile } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import {
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { auth, db } from '@/firebase/configs';
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  pages: {},
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || '',
          (credentials as any).password || ''
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      },
    }),
    //add More provider
    GoogleProvider({
      // string型にキャスト typeScript Errorのため
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  /*
    callbacks とは関数を返す関数または　関数の引数に別の関数を指定する
  */
  callbacks: {
    async signIn({ account, profile, user }) {
      //console.log("signIN callback", user);
      if (account?.provider === 'credentials') {
        user.id = user.uid;
        console.log(user.id);
      }
      if (account?.provider === 'google') {
        /*
        認証に Oauth を使用している場合は db にユーザーが存在するかどうかを確認
        存在しない場合は存在しない場合はユーザー データを保存
      */
        //console.log(user);
        const credential = GoogleAuthProvider.credential(account?.id_token);

        const userCredential = await signInWithCredential(auth, credential);

        const isNewUser = getAdditionalUserInfo(userCredential)?.isNewUser;

        if (isNewUser) {
          console.log('isNewUser insert to db');

          // The user is new, so perform actions for new users (e.g., create a user record).
          const uid = userCredential.user.uid; // Get the UID of the new user
          const usersColRef = collection(db, 'users');
          await setDoc(doc(usersColRef, uid), {
            name: profile?.name,
            email: profile?.email,
            image: profile?.picture,
            keeps: [],
            likes: [],
            created_at: serverTimestamp(),
          });
        } else {
          // The user is an existing user, so you can perform other actions if needed.
          // For example, update their profile or log them in.
          // ...
          console.log('not isNewUser');
        }

        // Continue with the rest of your code
        user.isNewUser = isNewUser;
        user.id = userCredential.user.uid;
        //console.log("user :", user);
      }

      return true;
    },
    async session({ session, user, token }) {
      session.user.id = token.sub;
      session.user.isNewUser = token.isNewUser;

      // console.log('session callback:', token);
      return session;
    },
    async jwt({ token, account, user }) {
      if (user) {
        // token.isNewUser = user.isNewUser;
        token.id = user.id;
        console.log('jwt callback :', user);
      }
      return token;
    },
  },
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
