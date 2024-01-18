import { Session } from 'next-auth';
import Image from 'next/image';
import SignOutBtn from '@/app/components/SignOutBtn';
import { getUser } from '@/utils/user';

async function Header({ session }: { session: Session | null }) {
  const user = session?.user;
  const userinfo = await getUser(user.id);
  const userName = userinfo?.name;
  const userImage = userinfo?.image;

  return (
    <div className=" sticky top-0 z-20">
      <div className="flex flex-wrap items-center justify-start p-4 md:py-8  mx-auto max-w-4xl w-full">
        <div className="">
          {/* <!-- profile image --> */}
          <Image
            width={100}
            height={100}
            className="w-20 h-20 object-cover rounded-full
                   border-2 "
            src={userImage}
            referrerPolicy="no-referrer"
            alt="profile"
          />
        </div>

        {/* <!-- profile meta --> */}
        <div className="w-8/12 md:w-7/12 ml-4">
          <div className="md:flex md:flex-wrap md:items-center mb-4">
            <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
              {userName}
            </h2>
          </div>
          <SignOutBtn />
        </div>
      </div>
    </div>
  );
}

export default Header;
