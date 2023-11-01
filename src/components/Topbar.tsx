import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <nav className="relative flex w-full items-center justify-between bg-zinc-950 px-5 py-6  ">
      <div className="absolute z-10 mx-2 mt-8">
        <Link href="/" className="dark:text-white">
          <Image
            src="/bichiLogo.png"
            alt="Logo NFT DATA TRACKER"
            width={120}
            height={120}
          />
          <h2 className="font-bold ">NFT DATA TRACKER</h2>
        </Link>
      </div>
      <div className="w-50 flex justify-between"></div>
      <ul
        id="drawer"
        role="menu"
        className="transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] absolute -left-48  top-0  flex min-h-screen w-48 cursor-pointer flex-col bg-white shadow-xl delay-150 dark:bg-slate-900 sm:static sm:flex sm:min-h-0 sm:w-auto sm:flex-row sm:gap-3 sm:bg-transparent sm:shadow-none  "
      >
        <li className="justify-betweend hover:text-primary text-l cursor-pointer  p-3 font-medium text-gray-600 transition-colors hover:bg-slate-300 hover:underline dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent">
          <Link href="/" className="dark:text-white">
            Home
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        {/* <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:fill-white"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9303 7C16.9621 6.92913 16.977 6.85189 16.9739 6.77432H17C16.8882 4.10591 14.6849 2 12.0049 2C9.325 2 7.12172 4.10591 7.00989 6.77432C6.9967 6.84898 6.9967 6.92535 7.00989 7H6.93171C5.65022 7 4.28034 7.84597 3.88264 10.1201L3.1049 16.3147C2.46858 20.8629 4.81062 22 7.86853 22H16.1585C19.2075 22 21.4789 20.3535 20.9133 16.3147L20.1444 10.1201C19.676 7.90964 18.3503 7 17.0865 7H16.9303ZM15.4932 7C15.4654 6.92794 15.4506 6.85153 15.4497 6.77432C15.4497 4.85682 13.8899 3.30238 11.9657 3.30238C10.0416 3.30238 8.48184 4.85682 8.48184 6.77432C8.49502 6.84898 8.49502 6.92535 8.48184 7H15.4932ZM9.097 12.1486C8.60889 12.1486 8.21321 11.7413 8.21321 11.2389C8.21321 10.7366 8.60889 10.3293 9.097 10.3293C9.5851 10.3293 9.98079 10.7366 9.98079 11.2389C9.98079 11.7413 9.5851 12.1486 9.097 12.1486ZM14.002 11.2389C14.002 11.7413 14.3977 12.1486 14.8858 12.1486C15.3739 12.1486 15.7696 11.7413 15.7696 11.2389C15.7696 10.7366 15.3739 10.3293 14.8858 10.3293C14.3977 10.3293 14.002 10.7366 14.002 11.2389Z"
            fill="#200E32"
          />
        </svg> */}

        <div className="user relative h-10 w-10 cursor-pointer rounded-full border-2 border-black bg-[url('https://www.developerdao.com/D_D_logo-dark.svg')] bg-cover bg-center ring-blue-700/30 hover:ring-4">
          <div className="drop-down  absolute right-3 top-12 w-48 overflow-hidden rounded-md bg-white shadow">
            {/* <ul>
              <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span> Setting </span>
              </li>
              <li className="px-3  py-3  text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                <span> Wishlist </span>
              </li>
              <li className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span> Logout </span>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="cursor-pointer sm:hidden" id="mobile-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="dark:strokeWhite"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
