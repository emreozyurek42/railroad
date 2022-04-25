import './Search.css'


function Search({setSearchValue,searchValue}) {

    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value);
      };

    return (
        <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={searchValue}
            onChange={handleSearchInputChanges}
          />
        </label>
        <div className="export-button">
          <button>Add Record</button>
        </div>
        <div className="export-button">
          <button>Export to Excel</button>
        </div>
      </div>
    )
}

export default Search;