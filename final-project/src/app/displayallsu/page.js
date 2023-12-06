"use client"
//must use client for useffect and usestate
import Link from "next/link";
import AuthRouter from "../AuthRouter.jsx";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

// pages/index.js or components/YourComponent.js

export default function ViewAllSUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //try catch to catch errors
      try {
        //supabase-specific syntax for a SQL query .from('service_users').select('*') instead of SELECT * from service_users
        // data from supabase is fetched as an object - this is deconstructed as data and error
        const { data, error } = await supabase
          .from("service_users")
          .select("*");
        console.log("data fetched on viewallsus", data);
        if (error) {
          throw error;
        }

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);
    console.log(data)

  return (
    <>
      <AuthRouter pageName={"displayallsu"} />
      <h1>View SU</h1>
      {/* map su data to the buttons - currently they are not connected to a specific profile but they are links */}
      {data.map(profiles => (
        <Link key={profiles.user_id} href={`/displayonesu/${profiles.user_id}`}>
          
            <button>{profiles.first_name} {profiles.last_name}</button>
          
        </Link>
      ))}
      <Link href="/displayonesu">
        <button>View Specific Service User Button</button>
      </Link>
    </>
  );
}
