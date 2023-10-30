/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [metadataData, setMetadataData] = useState<any>(null);
  const [floorPricesData, setFloorPricesData] = useState<any>(null);
  const [collectionItemsData, setCollectionItemsData] = useState<any>(null);

  useEffect(() => {
    async function fetchData(address: string, id: string) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": "2XVK0Amlk4BiJwM9fng1QWjhMs5",
        },
      };

      const rawNFTsOwnersFetchResponse: any = await fetch(
        `https://api.chainbase.online/v1/nft/owners?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
        options,
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));

      // const rawNFTCollectionFloorPriceFetchResponse = await fetch(
      //   `https://api.chainbase.online/v1/nft/floor_price?chain_id=${id}&contract_address=${address}`,
      //   options,
      // )
      //   .then((response) => response.json())
      //   .catch((err) => console.error(err));

      fetch(
        "https://api.chainbase.online/v1/nft/collection/items?chain_id=1&contract_address=0xed5af388653567af2f388e6224dc7c4b3241c544&page=1&limit=20",
        options,
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

      const rawNFTCollectionMetadataFetchResponse = await fetch(
        `https://api.chainbase.online/v1/nft/collection?chain_id=${id}&contract_address=${address}`,
        options,
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));

      if (rawNFTCollectionMetadataFetchResponse) {
        const formattedMetadataData = {
          banner_image_url:
            rawNFTCollectionMetadataFetchResponse.data.banner_image_url,
          name: rawNFTCollectionMetadataFetchResponse.data.name,
          description: rawNFTCollectionMetadataFetchResponse.data.description,
          symbol: rawNFTCollectionMetadataFetchResponse.data.symbol,
          owner_address:
            rawNFTCollectionMetadataFetchResponse.data.owner_address,
        };
        setMetadataData(formattedMetadataData);

        const formattedFloorPriceData = {
          floor_price: rawNFTCollectionMetadataFetchResponse.data.floor_prices,
        };

        setFloorPricesData(formattedFloorPriceData);
      }

      console.log({
        rawNFTsOwnersFetchResponse,
        // rawNFTCollectionFloorPriceFetchResponse,
        rawNFTCollectionMetadataFetchResponse,
      });
    }
    async function fetchCollectionItems(address: string, id: string) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": "2XVK0Amlk4BiJwM9fng1QWjhMs5",
        },
      };
      const rawNFTCollectionItems = await fetch(
        // `https://api.chainbase.online/v1/nft/collection/items?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
        `https://api.chainbase.online/v1/nft/collection/items?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
        options,
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      console.log({ rawNFTCollectionItems });
      setCollectionItemsData(rawNFTCollectionItems);
    }
    if (querydata === undefined) return;

    const [address, id] = querydata as string[];
    if (address && id) {
      fetchData(address, id);
      const timer1sec = setTimeout(() => {
        fetchCollectionItems(address, id);
      }, 1300);
      return () => clearTimeout(timer1sec);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querydata]);

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
