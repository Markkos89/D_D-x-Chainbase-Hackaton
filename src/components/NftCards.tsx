import Image from 'next/image'
import Link from 'next/link'

const NftCards = () => {
  return (


    <div className="flex flex-col my-4 justify-center items-center">
      <div className="relative flex flex-col rounded-2xl max-w-md bg-black shadow-3xl p-4">
                <div className="h-full w-full">
        <div className="relative w-full mb-3">

        <div className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full">
            <Image
              src="/Nft3.png"
              alt="User"
              width={250}
              height={100}
              objectFit="cover"
            />
          </div>
          </div>

          <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-black p-2 text-brand-500 hover:cursor-pointer">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
          </button>
        </div>
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 text-white"> Abstract Colors </p>
            <p className="mt-1 text-sm font-medium text-white">By Esthera Jackson </p>
          </div>
          <div className="flex flex-row-reverse">
            {/* Add your avatar images here */}

            <Image
              src="/avatar2.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full border-white border-2 -mr-3 z-10"
            />
            <Image
              src="/avatar2.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full border-white border-2 -mr-3 z-10"
            />
            <Image
              src="/avatar2.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full border-white border-2 -mr-3 z-10"
            />



            <span className="inline-flex h-full w-full items-center justify-center rounded-full text-xs text-navy bg-[#252525] border-white border ml-[1px] z-[0]">+5</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <p className="text-sm font-bold text-white text-brand">Current Bid: 0.91 ETH</p>
          </div>
          {/* Replace the href with your desired link */}
          <Link href="https://tailwindcomponents.com/component/nft-card-horizon-ui-tailwind" passHref>
            <button className=" linear bg-white transition duration-[200ms] rounded-lg px-[16px] py-[8px] text-base font-medium text-black">Place Bid</button>
          </Link>
        </div>
      </div>
    </div>

  )
}
export default NftCards;
