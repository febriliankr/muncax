import React, { ReactElement } from "react";
import Link from "next/link";
import Search from "./SearchBar";
import { useRouter } from "next/router";

interface Props {}

function Navbar({}: Props): ReactElement {
  const router = useRouter();
  const isAtHome = router.route === "/";
  // console.log("router", isAtHome);
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <Link href="/">
          <h1>Muncak App 🗻</h1>
        </Link>
      </div>
      {isAtHome ? null : <Search />}
      <div className="navbar__links">
        <Link href="/s/register">Register as Seller</Link>
      </div>
    </div>
  );
}

export default Navbar;
