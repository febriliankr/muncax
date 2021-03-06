import Head from "next/head";
import Footer from "../components/Footer";
import Search from "../components/SearchBar";
import axos from "axios";
import Axios from "axios";

export default function Home() {
  Axios.get('/api/sellers')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return (
    <div>
      <Head>
        <title>Sewa Peralatan Gunung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sewa peralatan naik gunung terdekat</h1>
        <Search />
      </main>
      <div className="home__container">
        <div className="hero">
          <div className="hero__text">
            <h2>Cari penyewa terdekat, termurah</h2>
            <p>Pilih dari puluhan penyewa yang ada di dekat anda.</p>
          </div>

          <img className="hero__image" src="/backpacker-2.webp" alt="gunung" />
        </div>
        <div className="hero">
          <img className="hero__image" src="/backpacker-1.webp" alt="gunung" />
          <div className="hero__text">
            <h2>Pinjamkan gear naik gunung anda</h2>
            <p>Punya carrier atau tenda tidak terpakai? Sewakan di sini</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
