import { LoginForm } from "./LoginForm";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/assets/svg/googleIcon.svg";

const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <Image
              className="w-8 h-8 mr-2"
              src={googleIcon}
              width={32}
              height={32}
              alt="logo"
            />
            TasteBuds
          </Link>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
