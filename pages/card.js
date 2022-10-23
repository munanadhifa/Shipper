import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Card() {
  return (
    <div className=" shadow-md bg-white px-4 py-5 sm:px-6 m-7">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-xl font-bold leading-6 text-red-600">
            Driver Management
          </h3>
          <p className="text-sm text-neutral-400">
            Data driver yang bekerja dengan anda
          </p>
        </div>
        <div>
          <div className="ml-4 mt-2 md:flex">
            <div className="relative mt-1 mr-3 rounded-md shadow-md">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                aria-hidden="true"
              >
                <MagnifyingGlassIcon
                  className="mr-3 h-4 w-4 text-red-600"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="pt-2 block w-full rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Cari Driver"
              />
            </div>
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Tambah Driver
              <PlusIcon
                className=" ml-2 h-4 w-4 text-white-600"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
