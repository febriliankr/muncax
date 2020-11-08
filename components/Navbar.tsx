import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

function Navbar({}: Props): ReactElement {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <h1>Muncak App</h1>
      </div>
      <div className="navbar__links">
        <Link href="https://instagram.com">Instagram</Link>
      </div>
    </div>
  );
}

export default Navbar;
