import Select from "react-select";
import Axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();

  const [search, setSearch] = useState("f");

  function handleSubmit(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
      // router.push('/api/cities')
      console.log(search);
    }
  }

  function handleChange(text) {
    console.log("CHANGE", text);
  }

  const options = [
    { value: "Carrier", label: "Carrier" },
    { value: "Tenda", label: "Tenda" },
    { value: "Matras", label: "Matras" },
    { value: "Lampu", label: "Lampu" },
  ];

  return (
    <div className="searchbar__container">
      <Select 
        onKeyDown={handleSubmit}
        options={options}
        placeholder="🔍 Cari barang yang anda butuhkan..."
      />
    </div>
  );
}

export default SearchBar;
