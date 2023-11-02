import { Profile } from "next-auth";

declare module "next-auth" {
  interface Profile {
    picture: string | undefined;
  }
}
