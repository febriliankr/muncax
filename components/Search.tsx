import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  const router = useRouter();

  const [search, setSearch] = useState("f");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    // router.push('/api/cities')
  }

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="searchTerm"
          placeholder="Cari barang yang anda butuhkan"
        />
        <button type="submit" className="searchButton">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
