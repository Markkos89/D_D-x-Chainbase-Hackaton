import { supportedChainsArray } from "@/constants/chainbaseSupportedNetworks";
import React from "react";

type Props = {
  selectedChainId: number;
  setSelectedChainId: (chainId: number) => void;
};

const ChainsListTab = ({ selectedChainId, setSelectedChainId }: Props) => {
  return (
    <div className="border-bottom: 2px solid #eaeaea w-full mb-2">
      <ul className="flex cursor-pointer">
        {supportedChainsArray.map((chain, idx) =>
          selectedChainId === chain.chainId ? (
            <li
              key={idx}
              className="py-2 px-6 bg-white rounded-t-lg"
            >{`${chain.chainName}`}</li>
          ) : (
            <li
              key={idx}
              className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200"
              onClick={() => setSelectedChainId(chain.chainId)}
            >
              {`${chain.chainName}`}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ChainsListTab;
