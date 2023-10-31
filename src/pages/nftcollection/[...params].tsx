/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ChartBars from "@/components/ChartBarra";
import ChartLineal from "@/components/ChartLineal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NftCard from "@/components/NftCards";
import TopHistory from "@/components/TopHistory";
import TransactionTable from "@/components/TransactionTable";
import type { INftCollectionItemsResponse } from "@/interfaces/INftCollectionItemsDataResponse";
import type {
  INftCollectionMetadataData,
  INftCollectionMetadataResponse,
} from "@/interfaces/INftCollectionMetadataData";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

export async function getServerSideProps(context: any) {
  console.log({ context });
  const [address, id] = context.params as string[];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "2XVK0Amlk4BiJwM9fng1QWjhMs5",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*", // replace this your actual origin
      "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
      "Access-Control-Allow-Headers":
        "x-api-key, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
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

  const rawNFTCollectionMetadataFetchResponse: INftCollectionMetadataResponse =
    await fetch(
      `https://api.chainbase.online/v1/nft/collection?chain_id=${id}&contract_address=${address}`,
      options,
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

  const rawNFTCollectionItems: INftCollectionItemsResponse = await fetch(
    `https://api.chainbase.online/v1/nft/collection/items?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  if (
    rawNFTCollectionMetadataFetchResponse &&
    rawNFTCollectionItems &&
    rawNFTsOwnersFetchResponse
  ) {
    const formattedMetadataData = {
      banner_image_url:
        rawNFTCollectionMetadataFetchResponse.data.banner_image_url,
      name: rawNFTCollectionMetadataFetchResponse.data.name,
      description: rawNFTCollectionMetadataFetchResponse.data.description,
      symbol: rawNFTCollectionMetadataFetchResponse.data.symbol,
      owner_address: rawNFTCollectionMetadataFetchResponse.data.owner,
      floor_prices: rawNFTCollectionMetadataFetchResponse.data.floor_prices,
      image_url: rawNFTCollectionMetadataFetchResponse.data.image_url,
    };

    return {
      props: {
        metadataData: formattedMetadataData,
        collectionItemsData: rawNFTCollectionItems.data,
        collectionHoldersData: rawNFTsOwnersFetchResponse.data,
      }, // will be passed to the page component as props
    };
  }

  return {
    props: {
      metadataData: null,
      collectionItemsData: [],
    }, // will be passed to the page component as props
  };
}

export default function ColectionPage(
  metadataData: INftCollectionMetadataData | null,
  collectionItemsData: INftCollectionItemsResponse["data"],
  collectionHoldersData: any,
) {
  // const router = useRouter();

  // const { querydata } = router.query;
  // const [metadataData, setMetadataData] =
  //   useState<INftCollectionMetadataData | null>(null);
  // const [collectionItemsData, setCollectionItemsData] = useState<
  //   INftCollectionItemsResponse["data"]
  // >([]);

  // useEffect(() => {
  //   async function fetchData(address: string, id: string) {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         "x-api-key": "2XVK0Amlk4BiJwM9fng1QWjhMs5",
  //         "Access-Control-Allow-Credentials": "true",
  //         "Access-Control-Allow-Origin": "*", // replace this your actual origin
  //         "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
  //         "Access-Control-Allow-Headers":
  //           "x-api-key, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //       },
  //     };

  //     const rawNFTsOwnersFetchResponse: any = await fetch(
  //       `https://api.chainbase.online/v1/nft/owners?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
  //       options,
  //     )
  //       .then((response) => response.json())
  //       .catch((err) => console.error(err));

  //     // const rawNFTCollectionFloorPriceFetchResponse = await fetch(
  //     //   `https://api.chainbase.online/v1/nft/floor_price?chain_id=${id}&contract_address=${address}`,
  //     //   options,
  //     // )
  //     //   .then((response) => response.json())
  //     //   .catch((err) => console.error(err));

  //     const rawNFTCollectionMetadataFetchResponse: INftCollectionMetadataResponse =
  //       await fetch(
  //         `https://api.chainbase.online/v1/nft/collection?chain_id=${id}&contract_address=${address}`,
  //         options,
  //       )
  //         .then((response) => response.json())
  //         .catch((err) => console.error(err));

  //     if (rawNFTCollectionMetadataFetchResponse) {
  //       const formattedMetadataData = {
  //         banner_image_url:
  //           rawNFTCollectionMetadataFetchResponse.data.banner_image_url,
  //         name: rawNFTCollectionMetadataFetchResponse.data.name,
  //         description: rawNFTCollectionMetadataFetchResponse.data.description,
  //         symbol: rawNFTCollectionMetadataFetchResponse.data.symbol,
  //         owner_address: rawNFTCollectionMetadataFetchResponse.data.owner,
  //         floor_prices: rawNFTCollectionMetadataFetchResponse.data.floor_prices,
  //         image_url: rawNFTCollectionMetadataFetchResponse.data.image_url,
  //       };
  //       setMetadataData(formattedMetadataData);
  //     }

  //     const rawNFTCollectionItems: INftCollectionItemsResponse = await fetch(
  //       `https://api.chainbase.online/v1/nft/collection/items?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
  //       options,
  //     )
  //       .then((response) => response.json())
  //       .catch((err) => console.error(err));

  //     if (rawNFTCollectionItems) {
  //       setCollectionItemsData(rawNFTCollectionItems.data);
  //     }
  //   }

  //   async function fetchCollectionItems(address: string, id: string) {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         "x-api-key": "2XVK0Amlk4BiJwM9fng1QWjhMs5",
  //         "Access-Control-Allow-Credentials": "true",
  //         "Access-Control-Allow-Origin": "*", // replace this your actual origin
  //         "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
  //         "Access-Control-Allow-Headers":
  //           "x-api-key, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //       },
  //     };
  //     const rawNFTCollectionItems: INftCollectionItemsResponse = await fetch(
  //       `https://api.chainbase.online/v1/nft/collection/items?chain_id=${id}&contract_address=${address}&page=1&limit=20`,
  //       options,
  //     )
  //       .then((response) => response.json())
  //       .catch((err) => console.error(err));

  //     if (rawNFTCollectionItems) {
  //       setCollectionItemsData(rawNFTCollectionItems.data);
  //     }
  //   }
  //   if (querydata === undefined) return;

  //   const [address, id] = querydata as string[];
  //   if (address && id) {
  //     fetchData(address, id);
  //     // fetchCollectionItems(address, id);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      {metadataData !== null ? <Header {...metadataData} /> : null}
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
