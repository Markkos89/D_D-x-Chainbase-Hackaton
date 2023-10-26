import { Inter } from "next/font/google";
import Searchbar from "@/components/Searchbar";
import ChainsListTab from "@/components/ChainsListTab";
import { useEffect, useState } from "react";
import { TopTrendingNFTsResponse } from "@/interfaces/topTrendingNFTsResponse";
import Image from "next/image";
import { Address } from "@thirdweb-dev/sdk";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentChain, setCurrentChain] = useState<number>(1);
  const [topTrendingNFTs, setTopTrendingNFTs] =
    useState<TopTrendingNFTsResponse>({
      code: 1,
      message: "",
      data: [],
      next_page: 2,
      count: 20,
    });
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchInputValue, 500);

  const router = useRouter();

  useEffect(() => {
    async function getTopTrendingNFTs() {
      const options = {
        method: "GET",
        headers: { accept: "application/json", "x-api-key": "demo" },
      };
      const res = await fetch(
        `https://api.chainbase.online/v1/nft/collection/trending?chain_id=${currentChain}&range=7d&exchange_name=all&sort=volume_desc&page=1&limit=20`,
        options,
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));

      if (!res) return;
      setTopTrendingNFTs(res);
    }
    getTopTrendingNFTs();
  }, [currentChain]);

  useEffect(() => {
    if (debouncedValue === "") return;
    if (debouncedValue.startsWith("0x")) {
      router.push(`/nftcollection/${debouncedValue}/1`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <Searchbar
        searchInputValue={searchInputValue}
        handleSearchInputValue={setSearchInputValue}
      />
      <section className="container mx-auto">
        <ChainsListTab
          selectedChainId={currentChain}
          setSelectedChainId={setCurrentChain}
        />
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Rank
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Image
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Collection Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Symbol
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Owner
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Volume
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Floor Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Last Floor Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Last Trade Time
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        Sales
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                    {topTrendingNFTs !== undefined &&
                    topTrendingNFTs?.data &&
                    topTrendingNFTs.data?.length > 0
                      ? topTrendingNFTs?.data?.map((nftData, idx) => (
                          <tr key={idx}>
                            <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200">
                              <div className="inline-flex items-center gap-x-3">
                                <span>{`#${idx + 1}`}</span>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                              <Image
                                className="h-8 w-8 rounded-full object-cover"
                                src={
                                  nftData.collection?.image_url
                                    ? nftData.collection.image_url
                                    : ""
                                }
                                alt=""
                                width={32}
                                height={32}
                              />
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                              {`${nftData.collection?.name}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                              {`${nftData.collection?.symbol}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                              {`${nftData.collection?.owner}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                              {`${nftData.volume}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm">
                              {`${nftData.floor_price}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm">
                              {`${nftData.last_floor_price}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm">
                              {`${nftData.latest_trade_time}`}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm">
                              {`${nftData.sales}`}
                            </td>
                          </tr>
                        ))
                      : null}
                    {/* Here, instead of showing a null value we will show a loading SPINNER */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <div className="hidden items-center gap-x-3 md:flex">
            <a
              href="#"
              className="rounded-md bg-blue-100/60 px-2 py-1 text-sm text-blue-500 dark:bg-gray-800"
            >
              1
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              2
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              3
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              ...
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              12
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              13
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              14
            </a>
          </div>

          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
