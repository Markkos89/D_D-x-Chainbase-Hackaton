# D_D x Chainbase Hackathon

##### October 2023

This project aims to interact with the CHAINBASE API, we choose the NFT API:
Since our objective was to create a platform that shows information about a
certain searched collection as well as the top trending collections on eth
mainnet

## Introduction

This documentation will guide you to run the project locally and make different
queries to the CHAINBASE API.

- [D_D x Chainbase Hackathon](#d_d-x-chainbase-hackathon) -
  [October 2023](#october-2023)
  - [Installation](#installation)
  - [Run](#run)
  - [Chainbase API Routes](#chainbase-api-routes)
  - [Examples of use](#examples-of-use)
  - [GET top trending NFTs](#get-top-trending-nfts)
  - [Deploy on Vercel](#deploy-on-vercel)

### Installation

Asumiendo que tiene node.js preinstalado, asegurese de que su terminal este
posicionada en la carpeta raiz del proyecto y ejecute el siguiente comando para
instalar todas las dependencias necesarias:

```
pnpm install
```

### Run

Ahora ya puedes comenzar a ejecutar el programa con el siguiente comando:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

Start making requests from Thunder Client, Postman, or another alternative

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.tsx`. The page
auto-updates as you edit the file.

### Chainbase API Routes

| METHOD | URL                                                     | DESCRIPTION                                                                                                                                      |
| ------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | https://api.chainbase.online/v1/nft/collection/trending | Get the most popular NFTs. The parameters `chain_id`, `range`, `exchange_name`, `sort`, `page` and `limit` must be provided as query parameters. |

### Examples of use

All GET queries will return a JSON format.

### GET top trending NFTs

URL route to get top trending NFTs collections:

`https://api.chainbase.online/v1/nft/collection/trending?chain_id=1&range=7d&exchange_name=all&sort=volume_desc&page=1&limit=20`

Request body:

```json
{
  "chain_id": "1",
  "range": "7d",
  "exchange_name": "all",
  "sort": "volume_desc",
  "page": "1",
  "limit": "20"
}
```

Please note that this is just an example and may not exactly reflect how GET
routes work in the Chainbase API. I would recommend you check the official
documentation or contact the development team for accurate information. ¡I hope
this helps!.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
