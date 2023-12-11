import compStyles from "./displayallsu.css"
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Link from "next/link";


const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

export default function DisplayAllSUComp() {
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
    console.log(data);
    return (
        <>
            <h1>View All Service Users</h1>
            <p>Click the person below to view their data.</p>

            <div className="displayall">
                {data.map((profiles) => (
                    <Link key={profiles.user_id} href={`/displayallsu/${profiles.user_id}`}>
                <button>
                     {profiles.first_name} {profiles.last_name}
                </button>
        </Link>
      ))}
                
            </div>
        </>
    )}
