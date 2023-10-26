import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    // Process a POST request
    const options = {
      method: "GET",
      headers: { accept: "application/json", "x-api-key": "demo" },
    };

    if (req.body.address === undefined || req.body.chainId === undefined) {
      return res
        .status(400)
        .json({ message: "Request body is missing address" });
    }

    if (
      typeof req.body.address !== "string" ||
      typeof req.body.chainId !== "string"
    ) {
      return res
        .status(400)
        .json({ message: "Request body address is not a string" });
    }

    // if req.body.address is not a valid contract address using thirdweb/sdk type Addresss then 400 error

    // if chainId number is not a supperted network chainId then 400 error
    if (
      req.body.chainId !== "1" &&
      req.body.chainId !== "137" &&
      req.body.chainId !== "56" &&
      req.body.chainId !== "43114" &&
      req.body.chainId !== "42161" &&
      req.body.chainId !== "10" &&
      req.body.chainId !== "250"
    ) {
      return res
        .status(400)
        .json({ message: "Request body chainId is not a supported chainId" });
    }

    const rawNFTsOwnersFetchResponse = await fetch(
      `https://api.chainbase.online/v1/nft/owners?chain_id=${req.body.chainId}&contract_address=${req.body.address}&page=1&limit=20`,
      options,
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const rawNFTCollectionFloorPriceFetchResponse = await fetch(
      `https://api.chainbase.online/v1/nft/floor_price?chain_id=${req.body.chainId}&contract_address=${req.body.address}`,
      options,
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const rawNFTCollectionItems = await fetch(
      `https://api.chainbase.online/v1/nft/collection/items?chain_id=${req.body.chainId}&contract_address=${req.body.address}&page=1&limit=20`,
      options,
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const rawNFTCollectionMetadataFetchResponse = await fetch(
      `https://api.chainbase.online/v1/nft/collection?chain_id=${req.body.chainId}&contract_address=${req.body.address}`,
      options,
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    return res.status(200).json({
      message: "Hello from Next.js!",
      rawNFTsOwnersFetchResponse,
      rawNFTCollectionFloorPriceFetchResponse,
      rawNFTCollectionItems,
      rawNFTCollectionMetadataFetchResponse,
    });
  } else {
    // Handle any other HTTP method
    return res.status(400).json({ message: "Request method not allowed" });
  }
}
