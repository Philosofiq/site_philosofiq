export default function BannerIntro({ intro, introType }) {
  function checkType() {
    if (introType === "v2") {
      return "We are a collective of makers, digital consultants, and creative problem solvers committed to making accessible, sustainable, and meaningful digital products.";
    } else {
      return "We are a collective of makers, digital consultants, and creative problem solvers committed to making accessible, sustainable, and meaningful digital products to bridge the gap between business and audience.";
    }
  }
  return <p className="intro">{(intro = checkType())}</p>;
}
