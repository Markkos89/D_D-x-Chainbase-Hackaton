import React from 'react'
import Image from 'next/image';




export const Header2 = () => {
    return (


        <div className="cointener-none mx-4 bg-zinc-950 justify-items-stretch">

            <div className="w-full border-0 ">
                <div className="w-full px-4 bg-black h-72 rounded-t-lg ">
                    <div className='absolute  text-white text-2xl font-bold  pt-46 p-56'>DEVELOPER DAO</div>
                </div>
                <div className="absolute -mt-32 left-4 box-border rounded-xl border-4 border-zinc-950 ml-5">

                    <Image
                        src="/Dao-perfil.png"
                        alt="User"

                        width={150}
                        border-width={2}
                        height={10}
                        border-radius={0.5}
                        className="rounded-md"
                    />
                </div>
            </div>


            <div className="bg-primary pt-14 flex-col">
                <div className="mb-1 text-white h-5 w-96">
                    <a href="https://etherscan.io/name-lookup-search?id=devdao.eth" target="_blank">
                        <h2 className="text-2xl ml-4 font-bold ">Devs for Revolution</h2>
                    </a>

                </div>


                <div className="pt-8 px-5 flex  gap-8">
                    <div className="flex  flex-row  ">
                        <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400"><p className='font-bold'> · desarrollador-dao</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">· Ganancias del creador 10%
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">· Por desarrollador-dao
                        </div>
                    </div>
                    <div className="flex flex-crow">
                        <div className="text-s content-evenly  text-gray-400/80 hover:text-gray-400">·Por desarrollador-dao
                        </div>
                    </div>
                </div>


                <div className="px-5 break-all bcode my-6">
                    <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">368 ETH</p>
                            <p className="text-sm font-normal text-white-600">total volume</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                0,0171 ETH
                            </p>
                            <p className="text-sm font-normal text-white-600">floor price</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                0,0083 WETH
                            </p>
                            <p className="text-sm font-normal text-white-600">best offer</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                0,5%
                            </p>
                            <p className="text-sm font-normal text-white-600">listed</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                6463
                            </p>
                            <p className="text-sm font-normal text-white-600">owners</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-bold text-navy-700 dark:text-white">
                                82%
                            </p>
                            <p className="text-sm font-normal text-white-600">unique owners</p>
                        </div>
                    </div>
                </div>



                <hr></hr>


                <div className="flex mx-auto  px-5 items-center w-full  h-30">

                    <div className="bg-white rounded-full flex border-none p-3 mb-4 shadow-md w-9/12 h-8 ">
                        <div className="flex items-center ">
                            <i className="px-3 fas fa-search ml-1"></i>
                            <input
                                type="text"
                                placeholder="Buscar..." className="ml-3  focus:outline-non "
                            />

                        </div>
                    </div>

                    <div className="flex items-center my-4 p-5 space-x-6 bg-blackshadow-lg">

                        <div className="flex py-3 px-4 rounded-lg bg-gray-100 text-gray-500 font-semibold cursor-pointer">
                            <span>Categories</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
                            <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="grid">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                <span>Grid</span>
                            </button>
                            <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                <span>List</span>
                            </button>
                        </div>

                    </div>

                </div>
                
                
                </div>
            </div>
            );
};

            export default Header2;