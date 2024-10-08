import BackButton from "./BackButton";
import babyCompStyles from "./header.css";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

export default function Header({ staffName }) {

  return (
      <div className="flexbox-container">
        <div className="flexbox-item-home">
          <BackButton />
        </div>
        <div className="flexbox-item-title">
        </div>
        <Image
              className="global-button-shadow"
              src="/placeholderperson.png"
              alt="profile image"
              width="55"
              height="60"
        />
      </div>
  );
}
