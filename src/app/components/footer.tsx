import Image from "next/image";
import homeSvg from "../../assets/svg/home.svg";
import loupeSvg from "../../assets/svg/loupe.svg";
import VactorSvg from "../../assets/svg/Vector2.svg";
import map from "../../assets/svg/map.svg";
import user from "../../assets/svg/user.svg";
//import rectangle from '../../assets/svg/Rectangle.svg';

const Footer = () => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
  };

  const overlayStyle: React.CSSProperties = {
    top: 0,
    left: 0,
    padding: "2px",
  };

  return (
    <footer className='w-full'>
      <div style={containerStyle}>
        {/* <Image src={rectangle} alt='Rectangle' /> */}
        <div className='bg-slate-400 rounded-3xl ' style={overlayStyle}>
          <div className='bg-slate-400 rounded-3xl w-full h-fu flex'>
            <button className='ml-12'>
              <Image
                src={homeSvg}
                alt='Home'
                style={{ backgroundColor: "#D9D9D9", borderRadius: "40px" }}
              />
            </button>
            <button className='ml-9'>
              <Image
                src={loupeSvg}
                alt='Loupe'
                style={{ backgroundColor: "#D9D9D9", borderRadius: "40px" }}
              />
            </button>
            <button className='ml-9'>
              <Image
                src={map}
                alt='Map'
                style={{ backgroundColor: "#D9D9D9", borderRadius: "40px" }}
              />
            </button>
            <button className='ml-9'>
              <Image
                src={user}
                alt='User'
                style={{ backgroundColor: "#D9D9D9", borderRadius: "40px" }}
              />
            </button>

            <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
              <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
                <button
                  type='button'
                  className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
                >
                  <svg
                    className='w-5 h-5 mb-2 text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Image className='bg-slate-400 rounded-b-3xl w-full' src={VactorSvg} alt='Vector' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
