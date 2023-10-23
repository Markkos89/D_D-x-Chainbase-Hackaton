export interface TopTrendingNFTsResponse {
  code: number;
  message: string;
  data: Datum[];
  next_page: number;
  count: number;
}

export interface Datum {
  avg_price: number;
  collection: Collection | null;
  contract_address: string;
  exchange_name: ExchangeName;
  floor_price: number;
  floor_price_change: number;
  last_floor_price: number;
  latest_trade_time: Date;
  sales: number;
  volume: number;
}

export interface Collection {
  banner_image_url: string;
  contract_address: string;
  deploy_block_number: number;
  description: string;
  erc_type: ErcType;
  image_url: string;
  media_info: MediaInfo;
  name: string;
  owner: string;
  symbol: string;
  traits: Traits | null;
}

export enum ErcType {
  Erc721 = "ERC721",
}

export interface MediaInfo {
  discord: null | string;
  email?: string;
  github?: string;
  instagram: null | string;
  medium: null | string;
  telegram: null;
  twitter: null | string;
  website: null | string;
}

export interface Traits {
  BACK?: { [key: string]: number };
  BACKGROUND?: { [key: string]: number };
  CLOTHING?: { [key: string]: number };
  COMPANIONS?: Companions;
  DIVISION?: Division;
  EAR?: { [key: string]: number };
  EYEWEAR?: { [key: string]: number };
  FACE?: { [key: string]: number };
  HEAD?: { [key: string]: number };
  HEADWEAR?: { [key: string]: number };
  MOUTH?: { [key: string]: number };
  NECK?: Neck;
  Background?: { [key: string]: number };
  Clothes?: { [key: string]: number };
  Earring?: Earring;
  Eyes?: { [key: string]: number };
  Fur?: { [key: string]: number };
  Hat?: { [key: string]: number };
  Mouth?: { [key: string]: number };
  Clothing?: { [key: string]: number };
  Ear?: { [key: string]: number };
  Face?: { [key: string]: number };
  Hair?: { [key: string]: number };
  Headgear?: { [key: string]: number };
  Neck?: { [key: string]: number };
  Offhand?: { [key: string]: number };
  Special?: { [key: string]: number };
  Type?: { [key: string]: number };
  Bottle?: { [key: string]: number };
  Hoody?: { [key: string]: number };
  Liquid?: { [key: string]: number };
  Logo?: { [key: string]: number };
  Mask?: { [key: string]: number };
  Outline?: { [key: string]: number };
  Tassels?: Tassels;
  Teeth?: { [key: string]: number };
  "Annual Rainfall (mm)"?: AnnualRainfallMm;
  "Aquatic Life Density"?: EDensity;
  "Coal (%)"?: AnnualRainfallMm;
  "Common Metals (%)"?: AnnualRainfallMm;
  "Dirt (%)"?: AnnualRainfallMm;
  "Foliage Density"?: EDensity;
  "Fresh Water (%)"?: AnnualRainfallMm;
  "Gemstones (%)"?: AnnualRainfallMm;
  "Highest Point From Sea Level (m)"?: AnnualRainfallMm;
  "Land Area (km^2)"?: AnnualRainfallMm;
  "Land Bias (%)"?: AnnualRainfallMm;
  "Lowest Point From Sea Level (m)"?: AnnualRainfallMm;
  "Lumber (%)"?: AnnualRainfallMm;
  "Oil (%)"?: AnnualRainfallMm;
  Rank?: AnnualRainfallMm;
  "Rare Metals (%)"?: AnnualRainfallMm;
  Rarity?: Rarity;
  "Salt Water (%)"?: AnnualRainfallMm;
  "Water Area (km^2)"?: AnnualRainfallMm;
  "Wildlife Density"?: EDensity;
  property?: { [key: string]: number };
  Element?: { [key: string]: number };
  Mutation?: { [key: string]: number };
  Size?: Size;
  Stage?: { [key: string]: number };
  "1/1"?: { [key: string]: number };
  "Rarity Rank"?: AnnualRainfallMm;
  Archetype?: { [key: string]: number };
  Armour?: { [key: string]: number };
  "Armour Plug"?: { [key: string]: number };
  Attachments?: { [key: string]: number };
  Beard?: Beard;
  Body?: { [key: string]: number };
  Crystals?: Crystals;
  Earrings?: { [key: string]: number };
  Extra?: { [key: string]: number };
  Eyewear?: { [key: string]: number };
  HUD?: { [key: string]: number };
  Hands?: { [key: string]: number };
  Head?: { [key: string]: number };
  Headwear?: { [key: string]: number };
  Helmet?: { [key: string]: number };
  Hood?: Hood;
  "Invisible Ink"?: InvisibleInk;
  Manga?: Manga;
  Nature?: { [key: string]: number };
  "Neck Plate"?: { [key: string]: number };
  Necklace?: Necklace;
  Nose?: { [key: string]: number };
  Orb?: { [key: string]: number };
  Patches?: { [key: string]: number };
  Rings?: Rings;
  "Third Eye"?: ThirdEye;
  Visor?: Visor;
  Planet?: { [key: string]: number };
  Species?: { [key: string]: number };
  Status?: Status;
  Dance?: Dance;
  Ears?: { [key: string]: number };
  Expression?: { [key: string]: number };
  Music?: { [key: string]: number };
  Sex?: Sex;
  Top?: { [key: string]: number };
}

export interface AnnualRainfallMm {
  max: number;
  min: number;
}

export interface EDensity {
  high: number;
  low: number;
  medium: number;
  "very high": number;
  "very low": number;
}

export interface Beard {
  black: number;
  cosmic: number;
  grey: number;
  red: number;
}

export interface Companions {
  "26 - other accessory": number;
  "27 - other accessory": number;
  bat: number;
  juju: number;
  séance: number;
}

export interface Crystals {
  blue: number;
  calm: number;
  dark: number;
  fire: number;
  light: number;
  red: number;
  water: number;
}

export interface Division {
  eternal: number;
  initiate: number;
  legendary: number;
  shapeshifter: number;
  wayward: number;
}

export interface Dance {
  "big nod": number;
  bob: number;
  groove: number;
  round: number;
  "side nod": number;
  "side to side": number;
  "subtle nod": number;
  turn: number;
}

export interface Earring {
  cross: number;
  "diamond stud": number;
  "gold hoop": number;
  "gold stud": number;
  "silver hoop": number;
  "silver stud": number;
}

export interface Hood {
  "combat black": number;
  "combat blue": number;
  "demon ninja": number;
  "shadow dancer full": number;
  "shadow dancer og": number;
  "shadow dancer shinobi": number;
  "shinobi black": number;
  "shinobi green": number;
  "shinobi red": number;
}

export interface InvisibleInk {
  "agent golem": number;
  "demon lines": number;
  "star agent supply": number;
  "tako party": number;
  "the brawler": number;
  "the builder": number;
  "toad samurai cut": number;
}

export interface Manga {
  alchemist: number;
  delinquent: number;
  golem: number;
}

export interface Neck {
  "aztec necklace": number;
  "doggerel tags": number;
  "enemies of the inquisitor": number;
  "flaming pendant": number;
  "marianas anchor": number;
  "pentagram chain": number;
  "ring of shadows": number;
  "rose red ruby of revocation": number;
}

export interface Necklace {
  dxxm: number;
  "gold chain": number;
  "killin 'em in 8-bit": number;
  "silver chain": number;
}

export interface Rarity {
  common: number;
  epic: number;
  legendary: number;
  rare: number;
  unusual: number;
  utopian: number;
}

export interface Rings {
  black: number;
  blue: number;
  "fake real": number;
  fire: number;
  gold: number;
  silver: number;
}

export interface Sex {
  female: number;
  male: number;
}

export interface Size {
  large: number;
  medium: number;
  small: number;
}

export interface Status {
  revealed: number;
  unrevealed: number;
}

export interface Tassels {
  black: number;
  "tied black": number;
  "tied blue": number;
  "tied green": number;
  "tied maroon": number;
  "tied purple": number;
  "tied white": number;
  "tied yellow": number;
  white: number;
}

export interface ThirdEye {
  brown: number;
  green: number;
  grey: number;
  light: number;
  red: number;
}

export interface Visor {
  "amber alert": number;
  attack: number;
  "crystal clear": number;
  standby: number;
  warning: number;
}

export enum ExchangeName {
  X2Y2 = "x2y2",
}
