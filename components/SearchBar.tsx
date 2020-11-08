import Select from "react-select";

import React from "react";

function SearchBar() {
  const options = [
    { value: "Salatiga", label: "Salatiga" },
    { value: "Semarang", label: "Semarang" },
    { value: "Ungaran", label: "Ungaran" },
  ];
  return (
    <div className="searchbar__container">
      <Select options={options} placeholder="Cari penyewa berdasarkan lokasi"/>
    </div>
  );
}

export default SearchBar;
