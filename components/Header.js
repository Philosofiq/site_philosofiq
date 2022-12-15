import Image from "next/image";
import logo from "../public/images/philosofiq_logo.svg";
import Wordmark from "../public/images/philosofiq_wordmark.svg";

export default function Header() {
  return (
    <div className="c-header">
      <div className="o-constrain">
        <div className="branding">
          <Image src={Wordmark} alt="Logo" />
        </div>
        {/* <nav className="c-navigation">Menu</nav> */}
      </div>
    </div>
  );
}
