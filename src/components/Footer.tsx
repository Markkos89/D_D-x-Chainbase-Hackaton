import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-blueGray-200 relative pb-6 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="fonat-semibold text-blueGray-700 text-3xl">
                Lets keep in touch!
              </h4>
              <h5 className="text-blueGray-600 mb-2 mt-0 text-lg">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mb-6 mt-6 lg:mb-0">
                <button
                  className="text-lightBlue-400 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="text-lightBlue-600 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="text-blueGray-800 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-gray-500"></hr>
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="text-blueGray-500 py-1 text-sm font-semibold">
                Copyright © Marcos and Psique
                <span id="get-current-year"> - 2023</span>{" "}
                {/*<a href="https://github.com/Markkos89/D_D-x-Chainbase-Hackaton/tree/main/src/pages" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Blockchain by
                                <a href="https://github.com/Markkos89/D_D-x-Chainbase-Hackaton/tree/main/src/pages" className="text-blueGray-500 hover:text-blueGray-800">Creative</a>DAO</a>*/}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
