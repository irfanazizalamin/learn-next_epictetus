import { useState } from "react";

export default function Navbar() {
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
          <div className="w-2/12 flex items-center">
            <div className="bg-gray-500 w-10 h-10 rounded flex justify-center items-center mr-4 shadow-2xl">
              E
            </div>
            Epictetus
          </div>
          <div className="w-8/12">
            <ul className="flex space-x-14">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
          <div className="w-2/12">
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <svg
                class="pointer-events-none w-[14px] h-[14px] absolute top-1/2 transform -translate-y-1/2 left-6"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.1" clip-path="url(#clip0_5_30)">
                  <path
                    d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z"
                    stroke="white"
                    stroke-width="2
                "
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.25 12.25L9.71251 9.71246"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                className="bg-gray-700 text-white py-4 px-6 rounded-full pl-12 appearance-none w-full block focus:outline-none"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
