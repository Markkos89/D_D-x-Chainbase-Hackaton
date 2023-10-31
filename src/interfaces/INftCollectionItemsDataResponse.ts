export interface INftCollectionItemsResponse {
  code: number;
  message: string;
  data: Datum[];
  next_page: number;
  count: number;
}

export interface Datum {
  blockchain: string;
  contract_address: string;
  erc_type: string;
  image_uri: string;
  metadata: Metadata;
  mint_time: number;
  mint_transaction_hash: string;
  name: string;
  owner: string;
  rarity_rank: number;
  rarity_score: number;
  symbol: string;
  token_id: string;
  token_uri: string;
  traits: Trait[];
}

export interface Metadata {
  attributes: Trait[];
  image: string;
  name: string;
}

export interface Trait {
  trait_type: string;
  value: string;
}
