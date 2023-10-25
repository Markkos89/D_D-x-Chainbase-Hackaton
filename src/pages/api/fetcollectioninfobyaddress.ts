import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Process a POST request
    const options = {
      method: "GET",
      headers: { accept: "application/json", "x-api-key": "demo" },
    };

    const rawNFTsOwnersFetchResponse = await fetch(
      "https://api.chainbase.online/v1/nft/owners?chain_id=1&contract_address=0xed5af388653567af2f388e6224dc7c4b3241c544&page=1&limit=20",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const rawNFTCollectionFloorPriceFetchResponse = await fetch(
      "https://api.chainbase.online/v1/nft/floor_price?chain_id=1&contract_address=0xed5af388653567af2f388e6224dc7c4b3241c544",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const rawNFTTransfersFetchResponse = await fetch(
      "https://api.chainbase.online/v1/nft/transfers?chain_id=1&contract_address=0xed5af388653567af2f388e6224dc7c4b3241c544&address=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&page=1&limit=20",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    const rawNFTCollectionMetadataFetchResponse = await fetch(
      "https://api.chainbase.online/v1/nft/collection?chain_id=1&contract_address=0xed5af388653567af2f388e6224dc7c4b3241c544",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    return res.status(200).json({
      message: "Hello from Next.js!",
      rawNFTsOwnersFetchResponse,
      rawNFTCollectionFloorPriceFetchResponse,
      rawNFTTransfersFetchResponse,
      rawNFTCollectionMetadataFetchResponse,
    });
  } else {
    // Handle any other HTTP method
    return res.status(400).json({ message: "Request method not allowed" });
  }
}
