import React from 'react'
import Image from 'next/image'

const ListCards = () => {
    return (
        <div className="my-4 flex  flex-col items-center  ">
            <div className="dark:!bg-navy-800 relative mx-auto flex w-[576px] flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-black bg-clip-border p-4 shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:text-white dark:shadow-none">
                <div className="flex w-full items-center justify-between rounded-t-3xl p-3">

                </div>
                <div className="dark:!bg-navy-800 dark:hover:!bg-navy-700 flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:hover:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Image
                                src="/Nft3.png"
                                alt="User"
                                width={250}
                                height={100}
                                // objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-navy-700 text-base font-bold dark:text-white">
                                Colorful Heaven
                            </h5>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                                Mark Benjamin
                            </p>
                        </div>
                    </div>
                    <div className="text-navy-700 mt-1 flex items-center gap-2 justify-center dark:text-white">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                            </svg>
                        </div>
                        <div className="text-navy-700 ml-1 flex items-center text-sm font-bold dark:text-white">
                            <p> </p>
                            0.4<p className="ml-1">ETH</p>
                        </div>
                        <button className="mx-2 linear rounded-lg w-full bg-white px-[16px] py-[8px] text-base font-medium text-black transition duration-[200ms]">
                            BUY NFT
                        </button>
                    </div>
                </div>
                <div className="dark:!bg-navy-800 dark:hover:!bg-navy-700 flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:hover:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Image
                                src="/Nft3.png"
                                alt="User"
                                width={150}
                                height={10}
                                // objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-navy-700 text-base font-bold dark:text-white">
                                3D Cubes Art
                            </h5>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                                Esthera Jackson
                            </p>
                        </div>
                    </div>
                    <div className="text-navy-700 gap-2 mt-1 flex items-center justify-center dark:text-white">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                            </svg>
                        </div>
                        <div className="text-navy-700 ml-1 flex items-center text-sm font-bold dark:text-white">
                            <p> </p>
                            0.4<p className="ml-1">ETH</p>
                        </div>
                       
                        <button className="mx-2 linear rounded-lg w-full bg-white px-[16px] py-[8px] text-base font-medium text-black transition duration-[200ms]">
                            BUY NFT
                        </button>
                    </div>
                </div>
                <div className="dark:!bg-navy-800 dark:hover:!bg-navy-700 flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:hover:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Image
                                src="/Nft3.png"
                                alt="User"
                                width={250}
                                height={100}
                                // objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-navy-700 text-base font-bold dark:text-white">
                                Swipe Circles
                            </h5>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                                Peter Will
                            </p>
                        </div>
                    </div>
                    <div className="text-navy-700 mt-1 gap-2 flex items-center justify-center dark:text-white">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                            </svg>
                        </div>
                        <div className="text-navy-700 ml-1 flex items-center text-sm font-bold dark:text-white">
                            <p> </p>
                            0.4<p className="ml-1">ETH</p>
                        </div>
                        
                        <button className="mx-2 linear rounded-lg w-full bg-white px-[16px] py-[8px] text-base font-medium text-black transition duration-[200ms]">
                            BUY NFT
                        </button>
                    </div>
                </div>
                <div className="dark:!bg-navy-800 dark:hover:!bg-navy-700 flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:hover:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Image
                                src="/Nft3.png"
                                alt="User"
                                width={250}
                                height={100}
                                // objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-navy-700 text-base font-bold dark:text-white">
                                Swipe Circles
                            </h5>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                                Manny Gates
                            </p>
                        </div>
                    </div>
                    <div className="text-navy-700 mt-1  gap-2 flex items-center justify-center dark:text-white">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                            </svg>
                        </div>
                        <div className="text-navy-700 ml-1 flex items-center text-sm font-bold dark:text-white">
                            <p> </p>
                            0.4<p className="ml-1">ETH</p>
                        </div>
                        
                        <button className="mx-2 linear rounded-lg w-full bg-white px-[16px] py-[8px] text-base font-medium text-black transition duration-[200ms]">
                            BUY NFT
                        </button>
                    </div>
                </div>
                <div className="dark:!bg-navy-800 dark:hover:!bg-navy-700 flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] bg-black px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:hover:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Image
                                src="/Nft3.png"
                                alt="User"
                                width={250}
                                height={100}
                                // objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-navy-700 text-base font-bold dark:text-white">
                                Mesh Gradients
                            </h5>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                                Will Smith
                            </p>
                        </div>
                    </div>
                    <div className="text-navy-700 mt-1 gap-2 flex items-center justify-center dark:text-white">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                            </svg>
                        </div>
                        <div className="text-navy-700 ml-1 flex items-center text-sm font-bold dark:text-white">
                            <p> </p>
                            0.4<p className="ml-1">ETH</p>
                        </div>
                        
                        <button className="mx-2 linear rounded-lg w-full bg-white px-[16px] py-[8px] text-base font-medium text-black transition duration-[200ms]">
                            BUY NFT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCards