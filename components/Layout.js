import Header from "./Header";
import { setState } from "react";
export default function Layout({ children }) {
  const copyrightDate = new Date().getFullYear();
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main>
      <footer>
        <small>©{copyrightDate} | PHILOSOFIQ DEVELOPMENT GROUP, LLC</small>
      </footer>
    </div>
  );
}
