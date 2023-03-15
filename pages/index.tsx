import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/NavigationTab";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>What a Chad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/trident.png" />
      </Head>
      <Header />
      <main>
        <Navigation />
        <div>contents</div>
      </main>
      <Footer />
    </>
  );
}
