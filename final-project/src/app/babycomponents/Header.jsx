import BackButton from "./BackButton";
import babyCompStyles from "./header.css";
import Image from "next/image";
export default function Header() {
  return (
    <nav className="header">
      <div className="flexbox-container">
        <BackButton />
        <Image
          src="/logo1.png"
          alt="Home Horizon Logo"
          width="64"
          height="64"
          className="logo"
        />
        <p className="login-status">Key Worker</p>
      </div>
    </nav>
  );
}
