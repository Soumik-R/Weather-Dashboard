const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
