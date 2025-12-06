import Image from "next/image";
import Headline from "./Headline";
import BannerIntro from "./BannerIntro";
import CTA from "./CTA";

const Banner = () => {
  function animateBanner() {
    if (typeof window === "object") {
      const banner = document.querySelector(".c-banner");
      setTimeout(() => {
        banner.classList.add("animated");
      }, 1000);
    }
  }
  return (
    <div className="c-banner o-panel _layer-600" data-animate={animateBanner()}>
      <Headline
        headline="Helping you bridge the gap between business &amp;"
        expression="Audience"
      />

      <BannerIntro introType="v2" intro="Hello" />
      <CTA ctaText={"Start A Conversation"} variant={"primary"} />
    </div>
  );
};

export default Banner;
