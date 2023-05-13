import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export interface FilterQuery {
  query: string;
  isSingle: boolean;
}
export interface UserFilterOptions {
  onSubmit: (filter: FilterQuery) => void;
}

export const UserFilter: React.FC<UserFilterOptions> = (props) => {
  const [filter, setFilter] = useState<FilterQuery>({
    query: "",
    isSingle: false,
  });

  const { onSubmit = (_) => {} } = props;

  const newSearchTerm: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter({ ...filter, query: e.target.value });
    onSubmit(filter);
  };

  const togleSingle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter({ ...filter, isSingle: e.target.checked });
    onSubmit(filter);
  };

  return (
    <div className="flex items-center justify-center w-full h-16 bg-gray-100">
      <div className="relative w-full max-w-md mr-6 focus-within:text-gray-600">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <MagnifyingGlassIcon
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
            />
          </button>
        </span>
        <input
          className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          type="text"
          placeholder="Buscar"
          value={filter.query}
          onChange={newSearchTerm}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="simple" className="mr-2 font-medium text-gray-700">
          Simple
        </label>
        <input
          id="simple"
          type="checkbox"
          checked={filter.isSingle}
          onChange={togleSingle}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
