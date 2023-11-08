import Button from "../../UI/Button";

const SearchBar = () => {
  return (
    <div className="w-100vh flex justify-center align-center px-4 lg:px-24 my-10">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mr-4 ring-2 shadow-md hover:ring-blue-600 rounded-xl"
      />
      <div className="w-3/12">
        <Button color="primary" onClick={() => {}}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
