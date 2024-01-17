'use client';
import { useState, MouseEventHandler } from 'react';

function MainFilter() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target instanceof HTMLInputElement) {
      // Allow propagation for input elements (e.g., sliders)
      return;
    }
    e.stopPropagation();
  };

  return (
    <div
      className="flex justify-end max-w-md w-full cursor-pointer"
      onClick={openModal}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 border rounded-full items-end mr-2"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M6 12h12M4 8h16M8 16h8"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className=" p-8 rounded-md relative" onClick={stopPropagation}>
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-stone-600 text-sm font-medium"
              >
                キーワード
              </label>
              <input
                type="text"
                id="name"
                placeholder="raspberry juice"
                className="my-2 block w-full rounded-md border border-gray-200 px-1 shadow-sm outline-none focus:border-orange-500 "
              />

              <div>
                <label
                  htmlFor="customRange1"
                  className=" inline-block text-stone-600 text-sm font-medium"
                >
                  距離
                </label>
                <input
                  type="range"
                  className="transparent h-[4px] mb-2 w-full cursor-pointer appearance-none border-transparent bg-neutral-200"
                  id="customRange1"
                  min="1"
                  max="5"
                  step="1"
                />
                <div className="flex justify-between">
                  <label
                    key="1"
                    htmlFor={`customRange1_step_${1}`}
                    className="text-xs text-neutral-500"
                  >
                    300m
                  </label>
                  <label
                    key="2"
                    htmlFor={`customRange1_step_${2}`}
                    className="text-xs text-neutral-500 "
                  >
                    500m
                  </label>

                  <label
                    key="3"
                    htmlFor={`customRange1_step_${3}`}
                    className="text-xs text-neutral-500 "
                  >
                    1Km
                  </label>
                  <label
                    key="4"
                    htmlFor={`customRange1_step_${4}`}
                    className="text-xs text-neutral-500 "
                  >
                    2Km
                  </label>

                  <label
                    key="5"
                    htmlFor={`customRange1_step_${5}`}
                    className="text-xs text-neutral-500 "
                  >
                    3Km
                  </label>
                </div>
              </div>

              <label
                htmlFor="customRange1"
                className="mb-2 inline-block text-stone-600 text-sm font-medium  "
              >
                予算
              </label>
              <input
                type="range"
                className="transparent h-[4px]  w-full cursor-pointer appearance-none border-transparent bg-neutral-200 "
                id="customRange2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainFilter;
