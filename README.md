<h1>Chainbase Hackathon</h1>
Este proyecto tiene como fin interactuar con la API DE CHAINBASE, nosotros elegimos la
 API WEEBHOCK: Ya que nuestro objetivo era crea una plataforma que monitoree en tiempo real la creacion y tranferencia de token y les de a los coleccionistas o poseedores una forma precisa de realizar el seguimiento y saber su cotizacion.

<h2> Introducción</h2>
Esta documentación te guiará a realizar diferentes consultas hacia la API DE CHAINBASE.

</br>

- [Instalación:](#instalación)
- [Dependencias:](#dependencias)
- [Ejemplos de uso](#ejemplos-de-uso)



### Instalación

## Dependencias:
Asumiendo que tiene node.js preinstalado, asegurese de que su terminal este posicionada en la carpeta raiz del proyecto y ejecute  el siguiente comando para instalar todas las dependencias necesarias:
```
pnpm install
```

Ahora ya puedes comenzar a ejecutar el programa con el siguiente comando:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Comienza a realizar peticiones desde Thunder Client, Postman, u otra alternativa

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
# Rutas de la API de Chainbase

|MÉTODO|URL|DESCRIPCION|
|-|-|-|
|GET|https://api.chainbase.online/v1/nft/collection/trending|Obtiene los NFTs más populares. Los parámetros `chain_id`, `range`, `exchange_name`, `sort`, `page` y `limit` deben ser proporcionados como parámetros de consulta.

# Ejemplos de uso
Todas las consultas GET retornarán un formato JSON.

## GET NFTs más populares
La URL general para obtener los NFTs más populares.
```py
https://api.chainbase.online/v1/nft/collection/trending?chain_id=1&range=7d&exchange_name=all&sort=volume_desc&page=1&limit=20
```
Cuerpo de la solicitud:
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
Por favor, ten en cuenta que este es solo un ejemplo y puede que no refleje exactamente cómo funcionan las rutas GET en la API de Chainbase. Te recomendaría revisar la documentación oficial o ponerse en contacto con el equipo de desarrollo para obtener información precisa. ¡Espero que esto te ayude!.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
