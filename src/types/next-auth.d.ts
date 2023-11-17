import { Profile } from "next-auth";

declare module "next-auth" {
  interface Profile {
    picture: string | undefined;
  }

  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      isNewUser: boolean | undefined;
    };
  }

  interface User {
    id: string;
    uid: string;
    isNewUser: boolean | undefined;
  }
}
