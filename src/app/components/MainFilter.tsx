'use client';
import { useState } from 'react';

function MainFilter() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const stopPropagation = (e) => {
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
          <div
            className="bg-white p-8 rounded-md relative"
            onClick={stopPropagation}
          >
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 cursor-pointer"
            >
              X
            </button>
            <div className="flex flex-col">
              <label for="name" className="text-stone-600 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="raspberry juice"
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <div>slider 1</div>
              <div>slider 2</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainFilter;
