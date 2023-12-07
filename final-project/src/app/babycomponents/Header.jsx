import BackButton from "./BackButton";
import babyCompStyles from "./header.css";
import Image from "next/image";
export default function Header() {
  return (
      <div className="flexbox-container">
        <div className="flexbox-item-home">
          <BackButton />
        </div>
        <div className="flexbox-item-title">
          <h1 >Home Horizon</h1>
        </div>
        <div className="flexbox-item-status">
          <p>Username</p>
        </div>
      </div>
  );
}
