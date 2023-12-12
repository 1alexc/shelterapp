import BackButton from "./BackButton";
import babyCompStyles from "./header.css";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";


const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);


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
