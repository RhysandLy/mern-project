const Search = ({ setSearch }) => {
  return (
    <form>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};

export default Search;
