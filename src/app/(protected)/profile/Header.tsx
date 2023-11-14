function Header() {
  return (
    <div className=' sticky top-0 '>
      <div className='flex flex-wrap items-center p-4 md:py-8 '>
        <div className='md:w-3/12 md:ml-16'>
          {/* <!-- profile image --> */}
          <img
            className='w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-pink-600 p-1'
            src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
            alt='profile'
          />
        </div>

        {/* <!-- profile meta --> */}
        <div className='w-8/12 md:w-7/12 ml-4'>
          <div className='md:flex md:flex-wrap md:items-center mb-4'>
            <h2 className='text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0'>mrtravlerrr_</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
