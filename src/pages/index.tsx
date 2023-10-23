import { Inter } from "next/font/google";
import Searchbar from "@/components/Searchbar";
import ChainsListTab from "@/components/ChainsListTab";
import TrendingNFTsTable from "@/components/TrendingNFTsTable";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentChain, setCurrentChain] = useState<number>(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <Searchbar />
      <section className="container mx-auto">
        <ChainsListTab
          selectedChainId={currentChain}
          setSelectedChainId={setCurrentChain}
        />
        <TrendingNFTsTable currentChain={currentChain} />
      </section>
    </main>
  );
}
