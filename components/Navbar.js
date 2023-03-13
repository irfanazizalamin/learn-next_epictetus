import { useState } from "react";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <nav className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffCanvas(true)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>

          <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
            <div className="bg-gray-500 w-10 h-10 rounded flex justify-center items-center mr-4 shadow-2xl">
              E
            </div>
            Epictetus
          </div>

          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>

          <div
            className={`lg:w-7/12 w-full lg:bg-none bg-gradient-to-b from-gray-600 to-gray-900 lg:static fixed top-0 p-10 transition-all ${
              !offCanvas ? "-left-full" : "left-0"
            }`}
          >
            <button
              onClick={() => setOffCanvas(false)}
              className="lg:hidden absolute top-10 right-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex lg:space-x-14 lg:space-y-0 space-y-4 lg:items-center flex-col lg:flex-row">
              <li>
                <a href="#" className="hover:underline">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Front-end
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Back-end
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="hover:underline flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] rounded bg-gray-800 shadow-xl mt-4">
                    {dropdownList &&
                      dropdownList.map((dd, index) => (
                        <li
                          key={index}
                          className="border-b border-white/5 last:border-0"
                        >
                          <a
                            href={dd.href}
                            className="flex px-6 py-3  hover:underline hover:bg-gray-700/60 "
                            onClick={() => setDropdown(!dropdown)}
                          >
                            {dd.text}
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div
            className={`lg:w-3/12 w-full lg:static absolute left-0 px-5 transition-all ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <label className="relative text-gray-400 focus-within:text-gray-600 block">
              <svg
                className="pointer-events-none w-[14px] h-[14px] absolute top-1/2 transform -translate-y-1/2 left-6"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.1" clipPath="url(#clip0_5_30)">
                  <path
                    d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z"
                    stroke="white"
                    strokeWidth="2
                "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.25 12.25L9.71251 9.71246"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_30">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <input
                name="search"
                type="text"
                className="bg-gray-700 text-white py-4 px-6 lg:rounded-full rounded-xl pl-12 appearance-none w-full block focus:outline-none"
                placeholder="Search"
              />
            </label>

            <button
              onClick={() => setSearch(false)}
              className="lg:hidden pointer-events absolute top-4 right-10 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
