import { type SetStateAction, type Dispatch } from "react";

type SearchbarProps = {
  searchInputValue: string;
  handleSearchInputValue: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({
  searchInputValue,
  handleSearchInputValue,
}: SearchbarProps) => {
  const handleSearchInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleSearchInputValue(e.target.value);
  };

  return (
    <div className="mb-4 w-full rounded-full border-none bg-white p-3 shadow-md">
      <div className=" flex items-center text-black">
        <i className="fas fa-search ml-1 px-3"></i>
        <input
          type="text"
          placeholder="Search NFT Collection by contract address..."
          className="ml-3 w-full focus:outline-none"
          value={searchInputValue}
          onChange={handleSearchInputValueChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
