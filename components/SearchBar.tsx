import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
function Search({}) {
  const router = useRouter();
  const [currentSearch, setCurrentSearch] = useState(router.query.q);
  const [search, setSearch] = useState(router.query?.q);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    //st => search type, q=> query
    router.push(`/search?st=product&q=${search}`);
  }

  return (
    <div className="searchbar__container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="searchTerm"
          placeholder="Cari barang yang anda butuhkan"
          value={search}
        />
        <button type="submit" className="searchButton">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
