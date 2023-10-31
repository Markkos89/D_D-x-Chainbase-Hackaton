/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import React from "react";
import Image from "next/image";
import type { FloorPrice } from "@/interfaces/INftCollectionMetadataData";

type HeaderProps = {
  banner_image_url: string;
  name: string;
  description: string;
  symbol: string;
  owner_address: string;
  floor_prices: FloorPrice[];
  image_url: string;
};

const Header = ({
  banner_image_url,
  name,
  description,
  symbol,
  owner_address,
  floor_prices,
  image_url,
}: HeaderProps) => {
  console.log({ floor_prices });
  return (
    <div className="cointener-none mx-4 justify-items-stretch bg-zinc-950">
      <div className="w-full border-0 ">
        <div className="h-72 w-full rounded-t-lg bg-black px-4 ">
          <div className="pt-46  absolute p-56 text-2xl  font-bold text-white">
            {symbol}
          </div>
        </div>
        <div className="absolute left-4 -mt-32 ml-5 box-border rounded-xl border-4 border-zinc-950">
          {image_url ? (
            <Image
              src={image_url}
              alt="NFT Collection Banner"
              width={150}
              border-width={2}
              height={150}
              border-radius={0.5}
              className="rounded-md"
            />
          ) : null}
        </div>
      </div>
      <div className="bg-primary flex-col pt-14">
        <div className="mb-1 h-5 w-96 text-white">
          {/* <a
            href="https://etherscan.io/name-lookup-search?id=devdao.eth"
            target="_blank"
          > */}
          <h2 className="ml-4 text-2xl font-bold ">{name}</h2>
          {/* </a> */}
        </div>
        <div className="flex gap-8 px-5  pt-8">
          <div className="flex  flex-row  ">
            <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">
              <p className="font-bold"> {description}</p>
            </div>
          </div>
          <div className="flex flex-row">
            {/* <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">
              · Ganancias del creador 10%
            </div> */}
          </div>
          <div className="flex flex-row">
            {/* <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">
              · Por desarrollador-dao
            </div> */}
          </div>
          <div className="flex-crow flex">
            {/* <div className="text-s content-evenly  text-gray-400/80 hover:text-gray-400">
              ·Por desarrollador-dao
            </div> */}
          </div>
        </div>
        <div className="bcode my-6 break-all px-5">
          <div className="mb-3 mt-6 flex gap-14 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-navy-700 text-2xl font-bold dark:text-white">
                368 ETH
              </p>
              <p className="text-white-600 text-sm font-normal">total volume</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-navy-700 text-2xl font-bold dark:text-white">
                0,0171 ETH
              </p>
              <p className="text-white-600 text-sm font-normal">floor price</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-navy-700 text-2xl font-bold dark:text-white">
                0,0083 WETH
              </p>
              <p className="text-white-600 text-sm font-normal">best offer</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-navy-700 text-2xl font-bold dark:text-white">
                0,5%
              </p>
              <p className="text-white-600 text-sm font-normal">listed</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-navy-700 text-2xl font-bold dark:text-white">
                6463
              </p>
              <p className="text-white-600 text-sm font-normal">owners</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-navy-700 text-2xl font-bold dark:text-white">
                82%
              </p>
              <p className="text-white-600 text-sm font-normal">
                unique owners
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="h-30 mx-6  flex w-full items-center  ">
          <div className="mx-4 my-4 mb-4 flex   justify-center rounded-full border-2 border-gray-200 bg-gray-200 text-sm leading-none text-gray-500">
            <button
              className="active inline-flex items-center rounded-l-full px-2 py-2 transition-colors duration-300 ease-in hover:text-blue-400 focus:text-blue-400 focus:outline-none"
              id="grid"
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
                className="mr-2 h-4 w-4 fill-current"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span>Grid</span>
            </button>
            <button
              className="inline-flex items-center rounded-r-full px-3 py-2 transition-colors duration-300 ease-in hover:text-blue-400 focus:text-blue-400 focus:outline-none"
              id="list"
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
                className="mr-2 h-4 w-4 fill-current"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span>List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
