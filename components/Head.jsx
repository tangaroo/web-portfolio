import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Cassandra Tang</title>
      <meta property="og:title" content="Cassandra Tang" key="title" />
      <meta
        name="og:description"
        content="Product Designer, based in Glasgow. I like crafting intuitive products and meaningful experiences."
      />
      <meta property="og:image" content="./ct-siteimage.png" />
      <link rel="icon" href="/favicon.svg" />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
    </Head>
  );
}
