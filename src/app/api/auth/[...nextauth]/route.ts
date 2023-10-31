import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/configs";



export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => console.log(error))
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
          });
      },
    }),
    //add More provider
    GoogleProvider({
      // string型にキャスト typeScript Errorのため
      clientId: process.env.GOOGLE_CLIENT_ID as string,  
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  /*
    callbacks とは関数を返す関数または　関数の引数に別の関数を指定する
  */
  callbacks: { 
    async signIn({ user, account, profile, email, credentials }) {
      /*
        認証に Oauth を使用している場合は db にユーザーが存在するかどうかを確認
        存在しない場合は存在しない場合はユーザー データを保存
      */
      if(account?.provider === 'google'){
       // db process 
      }
      return true
    }
    
  }
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
