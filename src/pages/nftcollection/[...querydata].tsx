/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NftCard from "@/components/NftCards";
// import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ColectionPage() {
  const router = useRouter();

  const { querydata } = router.query;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData(address: string, id: string) {
      const res = await fetch(`api/getcollectioninfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, chainId: id }),
      });
      const data = await res.json();
      setData(data);
    }
    console.log({ querydata });

    if (querydata === undefined) return;

    const [address, id] = querydata as string[];
    if (address && id) {
      fetchData(address, id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ data });
  return (
    <div className="cointener-none ml-4 mr-4 justify-items-stretch bg-zinc-950">
      <div className="w-full border-0 ">
        <div className="h-72 w-full rounded-t-lg bg-black px-4 ">
          <div className="pt-46  absolute p-56 text-2xl  font-bold text-white">
            DEVELOPER DAO
          </div>
        </div>
        <div className="absolute left-4 -mt-32 ml-5 box-border rounded-xl border-4 border-zinc-950">
          {/* <Image
            src="/Dao-perfil.png"
            alt="User"
            width={150}
            border-width={2}
            height={10}
            border-radius={0.5}
            className="rounded-md"
          /> */}
        </div>
      </div>

      <div className="bg-primary flex-col pt-14">
        <div className="mb-1 h-5 w-96 text-white">
          <a
            href="https://etherscan.io/name-lookup-search?id=devdao.eth"
            target="_blank"
          >
            <h2 className="ml-4 text-2xl font-bold ">Devs for Revolution</h2>
          </a>
        </div>

        <div className="flex gap-8 px-5  pt-8">
          <div className="flex  flex-row  ">
            <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">
              <p className="font-bold"> · desarrollador-dao</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">
              · Ganancias del creador 10%
            </div>
          </div>
          <div className="flex flex-row">
            <div className="text-s content-evenly text-gray-400/80 hover:text-gray-400">
              · Por desarrollador-dao
            </div>
          </div>
          <div className="flex-crow flex">
            <div className="text-s content-evenly  text-gray-400/80 hover:text-gray-400">
              ·Por desarrollador-dao
            </div>
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

        <div className="h-30 mx-auto  flex w-full items-center  px-5">
          <div className="mb-4 flex h-8 w-9/12 rounded-full border-none bg-white p-3 shadow-md ">
            <div className="flex items-center ">
              <i className="fas fa-search ml-1 px-3"></i>
              <input
                type="text"
                placeholder="Buscar..."
                className="focus:outline-non  ml-3 "
              />
            </div>
          </div>

          <div className="bg-blackshadow-lg my-4 flex items-center space-x-6 p-5">
            <div className="flex w-72 space-x-4 rounded-lg bg-gray-100 p-4">
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Article name or keyword..."
              />
            </div>
            <div className="flex cursor-pointer rounded-lg bg-gray-100 px-4 py-3 font-semibold text-gray-500">
              <span>Categories</span>

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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="duration-3000 cursor-pointer rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:shadow-lg">
              <span>Add</span>
            </div>
          </div>
        </div>
        <div>
          <NftCard />
        </div>
      </div>
    </div>
  );
}
