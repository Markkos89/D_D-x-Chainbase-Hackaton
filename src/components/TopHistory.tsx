import React from 'react'
import Image from 'next/image';

const TopHistory = () => {
  return (
    <div className="flex flex-col  items-center my-4 ">
            <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[576px] mx-auto p-4 bg-black bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
                    <div className="text-lg font-bold text-navy-700 dark:text-white">
                        History
                    </div>
                    <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                        See all
                    </button>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
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
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Colorful Heaven
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            Mark Benjamin
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                        <p>   </p>
                        0.4<p className="ml-1">ETH</p>
                        </div>
                        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                        <p>30s</p>
                        <p className="ml-1">ago</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
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
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            3D Cubes Art
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            Esthera Jackson
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                        <p>   </p>
                        0.4<p className="ml-1">ETH</p>
                        </div>
                        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                        <p>30s</p>
                        <p className="ml-1">ago</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
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
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Swipe Circles
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            Peter Will
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                        <p>   </p>
                        0.4<p className="ml-1">ETH</p>
                        </div>
                        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                        <p>4h</p>
                        <p className="ml-1">ago</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
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
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Swipe Circles
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            Manny Gates
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                        <p>   </p>
                        0.4<p className="ml-1">ETH</p>
                        </div>
                        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                        <p>30s</p>
                        <p className="ml-1">ago</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
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
                        <div className="flex flex-col">
                        <h5 className="text-base font-bold text-navy-700 dark:text-white">
                            Mesh Gradients
                        </h5>
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            Will Smith
                        </p>
                        </div>
                    </div> 
                    <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                        <div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        </div>
                        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                        <p>   </p>
                        0.4<p className="ml-1">ETH</p>
                        </div>
                        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                        <p>30s</p>
                        <p className="ml-1">ago</p>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
  )
}

export default TopHistory