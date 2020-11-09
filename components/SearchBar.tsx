import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
function Search({}) {
  const router = useRouter();
  const [currentSearch, setCurrentSearch] = useState(router.query.q);
  const [search, setSearch] = useState(router.query?.q);
  const [searchFocus, setSearchFocus] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    //st => search type, q=> query
    router.push(`/search?st=product&q=${search}`);
  }

  function handleClickSuggestion(e, query) {
    e.preventDefault();
    // console.log('e,', e,)
    router.push(`/search?st=product&q=${query}`);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const [suggestions, setSuggestions] = useState([
    "Carrier Gunung",
    "Tenda",
    "Lampu",
    "Sandal",
    "Sepatu Gunung",
  ]);

  return (
    <div className="searchbar__container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          onChange={handleChange}
          type="text"
          className="searchTerm"
          placeholder="Cari barang yang anda butuhkan"
          value={search}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />

        <button onClick={handleSubmit} className="searchButton">
          <AiOutlineSearch />
        </button>
      </form>
      {searchFocus ? (
        <div className="searchbar__suggestions">
          <ul>
            {suggestions.map((text, index) => {
              return (
                <li
                  onMouseOver={() => setSearch(text)}
                  // onClick={(e) => alert(e)}
                  key={index}
                >
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
