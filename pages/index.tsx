import Head from "next/head";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>M</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sewa peralatan naik gunung terdekat</h1>
        <SearchBar />
      </main>
      <div className="home__container">
        <div className="hero">
          <div className="hero__text">
            <h2>Cari penyewa terdekat, termurah</h2>
            <p>Pilih dari puluhan penyewa yang ada di dekat anda.</p>
          </div>

          <img className="hero__image" src="/backpacker-2.jpg" alt="gunung" />
        </div>
        <div className="hero">
          <img className="hero__image" src="/backpacker-1.jpg" alt="gunung" />
          <div className="hero__text">
            <h2>Pinjamkan gear naik gunung anda</h2>
            <p>Punya carrier atau tenda tidak terpakai? Sewakan di sini</p>
          </div>
        </div>
      </div>
    </div>
  );
}
