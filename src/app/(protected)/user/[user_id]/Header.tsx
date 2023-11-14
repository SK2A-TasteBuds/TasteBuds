import { Session } from "next-auth";

function Header({ session }: { session: Session | null }) {
  const user = session?.user;
  console.log(user);

  return (
    <div className=' sticky top-0 '>
      <div className='flex flex-wrap items-start justify-center p-4 md:py-8 '>
        <div className=''>
          {/* <!-- profile image --> */}
          <img
            className='w-20 h-20 object-cover rounded-full
                   border-2 border-pink-600 p-1'
            src={user.image}
            alt='profile'
          />
        </div>

        {/* <!-- profile meta --> */}
        <div className='w-8/12 md:w-7/12 ml-4'>
          <div className='md:flex md:flex-wrap md:items-center mb-4'>
            <h2 className='text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0'>{user.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
