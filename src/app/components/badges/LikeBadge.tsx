'use client';
import { useState } from 'react';

const LikeBadge = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const handleIconClick = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <>
      <div data-tooltip-target="tooltip-default" onClick={handleIconClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 9H12.75C12.75 9.69036 13.3096 10.25 14 10.25V9ZM14 5H15.25H14ZM11 2V0.75C10.506 0.75 10.0584 1.04092 9.85774 1.49233L11 2ZM7 11L5.85774 10.4923C5.7867 10.6522 5.75 10.8251 5.75 11H7ZM7 22H5.75C5.75 22.6904 6.30964 23.25 7 23.25V22ZM18.28 22L18.2941 20.75H18.28V22ZM20.28 20.3L19.0444 20.1105L19.0441 20.1126L20.28 20.3ZM21.66 11.3L22.8956 11.4895L22.8958 11.4876L21.66 11.3ZM19.66 9V10.25C19.6647 10.25 19.6694 10.25 19.6742 10.2499L19.66 9ZM7 22V23.25C7.69036 23.25 8.25 22.6904 8.25 22H7ZM7 11H8.25C8.25 10.3096 7.69036 9.75 7 9.75V11ZM15.25 9V5H12.75V9H15.25ZM15.25 5C15.25 2.65279 13.3472 0.75 11 0.75V3.25C11.9665 3.25 12.75 4.0335 12.75 5H15.25ZM9.85774 1.49233L5.85774 10.4923L8.14226 11.5077L12.1423 2.50767L9.85774 1.49233ZM5.75 11V22H8.25V11H5.75ZM7 23.25H18.28V20.75H7V23.25ZM18.2659 23.2499C19.8865 23.2682 21.2729 22.0898 21.5159 20.4874L19.0441 20.1126C18.9881 20.4824 18.6681 20.7543 18.2941 20.7501L18.2659 23.2499ZM21.5156 20.4895L22.8956 11.4895L20.4244 11.1105L19.0444 20.1105L21.5156 20.4895ZM22.8958 11.4876C23.0389 10.5448 22.7608 9.58683 22.1351 8.86729L20.2486 10.5077C20.393 10.6738 20.4572 10.8949 20.4242 11.1124L22.8958 11.4876ZM22.1351 8.86729C21.5094 8.14775 20.5993 7.73928 19.6458 7.75008L19.6742 10.2499C19.8942 10.2474 20.1042 10.3417 20.2486 10.5077L22.1351 8.86729ZM19.66 7.75H14V10.25H19.66V7.75ZM7 20.75H4V23.25H7V20.75ZM4 20.75C3.58579 20.75 3.25 20.4142 3.25 20H0.75C0.75 21.7949 2.20507 23.25 4 23.25V20.75ZM3.25 20V13H0.75V20H3.25ZM3.25 13C3.25 12.5858 3.58579 12.25 4 12.25V9.75C2.20507 9.75 0.75 11.2051 0.75 13H3.25ZM4 12.25H7V9.75H4V12.25ZM5.75 11V22H8.25V11H5.75Z"
            fill="#2AAC7A" //#a1a1aa'
          />
        </svg>

        {isPopUpVisible && (
          <div
            id="tooltip-default"
            role="tooltip"
            className="absolute right-10 top-60 z-10 visible  px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
          >
            いいね！を評価は 80% 以上
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        )}
      </div>
    </>
  );
};

export default LikeBadge;
