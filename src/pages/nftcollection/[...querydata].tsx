/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ChartBars from "@/components/ChartBarra";
import ChartLineal from "@/components/ChartLineal";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import NftCard from "@/components/NftCards";
import TopHistory from "@/components/TopHistory";
import TransactionTable from "@/components/TransactionTable";
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
  }, [querydata]);

  console.log({ data });
  return (
    <div>
      <Header2 />
      <div className="cointener-none mx-4 flex bg-zinc-950 ">
        <div className="mx-10 w-1/2 justify-end">
          <div className="flex gap-4">
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className="flex gap-4">
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className="flex gap-4">
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className="flex gap-4">
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
        </div>
        <div className="flex w-1/2 flex-col ">
          <TopHistory />
          <TransactionTable />
          <div className="flex justify-center ">
            <ChartLineal />
          </div>
          <div className="flex justify-center ">
            <ChartBars />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
