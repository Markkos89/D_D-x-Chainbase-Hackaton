export interface INftCollectionMetadataData {
  banner_image_url: string;
  name: string;
  description: string;
  symbol: string;
  owner_address: string;
  floor_prices: FloorPrice[];
}

// To parse this data:
//
//   import { Convert, INftCollectionMetadataResponse } from "./file";
//
//   const iNftCollectionMetadataResponse = Convert.toINftCollectionMetadataResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface INftCollectionMetadataResponse {
  code: number;
  message: string;
  data: Data;
}

export interface Data {
  contract_address: string;
  name: string;
  symbol: string;
  description: string;
  owner: string;
  deploy_block_number: number;
  erc_type: string;
  banner_image_url: string;
  image_url: string;
  media_info: MediaInfo;
  traits: Trait[];
  floor_prices: FloorPrice[];
}

export interface FloorPrice {
  value: string;
  symbol: string;
  address: string;
}

export interface MediaInfo {
  discord: string;
  email: null;
  github: null;
  instagram: string;
  medium: null;
  telegram: null;
  twitter: string;
  website: string;
}

export interface Trait {
  trait_type: string;
  values: Value[];
}

export interface Value {
  count: number;
  value: string;
}
