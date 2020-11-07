import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>M</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Hello world
        </h1>
      </Container>
    </div>
  );
}
