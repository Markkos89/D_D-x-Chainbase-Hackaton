import { type SetStateAction, type Dispatch } from "react";

type SearchbarProps = {
  searchInputValue: string;
  handleSearchInputValue: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({
  searchInputValue,
  handleSearchInputValue,
}: SearchbarProps) => {
  const handleSearchInputValueChange = (e: any) => {
    handleSearchInputValue(e.target.value);
  };

  return (
    <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md w-full">
      <div className="flex items-center">
        <i className="px-3 fas fa-search ml-1"></i>
        <input
          type="text"
          placeholder="Search NFT (or ERC20 token?) by address..."
          className="ml-3 focus:outline-none w-full"
          value={searchInputValue}
          onChange={handleSearchInputValueChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
