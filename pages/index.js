import Head from "next/head";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Graphic from "../components/Graphic";

export default function Home() {
  return (
    <div className="o-constrain">
      <Head>
        <title>Philosofiq Development Group, LLC | Home</title>
        <meta
          name="description"
          content="Philosofiq Development Group, LLC is a design, branding and technology collective focused on crafting bespoke branding and digital experiences. Start a conversation today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Graphic type={"line-elipse-vertical"} />

      <Banner />
      <Graphic type={"line-elipse-group"} />

      <div className="_md:flex justify-end _layer-200">
        <Gallery gridType="auto" />
      </div>
    </div>
  );
}
