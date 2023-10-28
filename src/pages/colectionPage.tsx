'use-client'
import { Inter } from "next/font/google"
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import TopHistory from "@/components/TopHistory";
import NftCard from "@/components/NftCards";
import ChartLineal from "@/components/ChartLineal";
import ChartBars from "@/components/ChartBarra";
import TransactionTable from "@/components/TransactionTable";



const inter = Inter({ subsets: ["latin"] });

export default function ColectionPage() {

  return (
    <div >
      <Header2 />

      <div className="cointener-none flex mx-4 bg-zinc-950 ">

        <div className='w-1/2 mx-10 justify-end'>

          <div className='flex gap-4 '>
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className='flex  gap-4'>
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className='flex  gap-4'>
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className='flex  gap-4'>
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className='flex  gap-4'>
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
  
        </div>

        <div className="w-1/2 flex flex-col ">
         
          <TopHistory />
          <TransactionTable />
          <div className="flex justify-center ">
          <ChartLineal/>
          </div>
          <div className="flex justify-center ">
          <ChartBars/>
          </div>
        </div>

      </div>

      <Footer />


    </div>

  );
}