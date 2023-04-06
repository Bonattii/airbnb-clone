'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div
      className="
        border-[1px] rounded-full
        w-full md:w-auto
        py-2
        shadow-sm
        hover:shadow-md transition
        cursor-pointer
      "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>

        <div
          className="
            hidden sm:block
            text-sm font-semibold text-center
            px-6
            border-x-[1px]
            flex-1
          "
        >
          Any week
        </div>

        <div
          className="
            text-sm text-gray-600
            pl-6 pr-2
            flex flex-row items-center gap-3
          "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
