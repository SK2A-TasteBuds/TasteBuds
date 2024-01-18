'use client';
import { useState, useEffect, MouseEventHandler, ChangeEvent } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { revalidatePath } from 'next/cache';

function MainFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isModalOpen, setModalOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [budget, setBudget] = useState<any[] | null>(null);
  const [budgetValue, setBudgetValue] = useState('');
  const [distance, setDistance] = useState(3);

  const handleSearch = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    current.set('budget', budgetValue !== '' ? budgetValue : '');
    current.set('keyword', keyword !== '' ? keyword : '');
    current.set('range', distance.toString());

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);

    closeModal();
  };

  useEffect(() => {
    // Fetch budget data after component mounts
    fetch(`/api/budget`)
      .then((response) => response.json())
      .then((data) => {
        setBudget(data);
      })
      .catch((error) => console.error(error));
  }, []);

  //Modal
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleBugetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBudgetValue(e.target.value);
  };

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(parseInt(e.target.value));
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
        <div className="fixed inset-0 pt-48 flex items-start justify-center z-10 bg-black bg-opacity-50">
          <div
            className=" p-8 max-w-xs w-full rounded-md relative"
            onClick={stopPropagation}
          >
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
                className="text-stone-600 text-sm font-medium mb-2 "
              >
                キーワード
              </label>
              <input
                type="text"
                id="name"
                onChange={handleKeywordChange}
                value={keyword}
                placeholder="ラーメン"
                className="p-1 mb-2 w-full rounded-lg border border-gray-200  shadow-sm outline-none focus:border-orange-500 "
              />

              <div>
                <label
                  htmlFor="distance"
                  className=" inline-block text-stone-600 text-sm font-medium"
                >
                  距離
                </label>
                <input
                  type="range"
                  className="transparent h-[4px] mb-2 w-full cursor-pointer appearance-none border-transparent bg-neutral-200"
                  id="distance"
                  min="1"
                  max="5"
                  step="1"
                  value={distance}
                  onChange={handleDistanceChange}
                />
                <div className="flex justify-between mb-2">
                  <label
                    key="1"
                    htmlFor={`distance1_step_1`}
                    className="text-xs text-neutral-500"
                  >
                    300m
                  </label>
                  <label
                    key="2"
                    htmlFor={`distance1_step_2`}
                    className="text-xs text-neutral-500 "
                  >
                    500m
                  </label>

                  <label
                    key="3"
                    htmlFor={`distance1_step_3`}
                    className="text-xs text-neutral-500 "
                  >
                    1Km
                  </label>
                  <label
                    key="4"
                    htmlFor={`distance1_step_4`}
                    className="text-xs text-neutral-500 "
                  >
                    2Km
                  </label>

                  <label
                    key="5"
                    htmlFor={`distance1_step_5`}
                    className="text-xs text-neutral-500 "
                  >
                    3Km
                  </label>
                </div>
              </div>
              <div className="flex items-start justify-start w-full gap-2 mb-2">
                <label
                  htmlFor="customRange1"
                  className="mb-2 inline-block text-stone-600 text-sm font-medium  "
                >
                  予算
                </label>
              </div>

              <select
                value={budgetValue}
                onChange={handleBugetChange}
                className="mb-4 border rounded-lg p-1 shadow-sm outline-none focus:border-orange-500 "
              >
                {budget?.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="flex gap-1">
                <button
                  onClick={handleSearch}
                  className=" flex w-full justify-center rounded-md bg-orange-500  px-3 py-1.5 text-md font-semibold leading-6 text-white  hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 "
                >
                  検索
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainFilter;
