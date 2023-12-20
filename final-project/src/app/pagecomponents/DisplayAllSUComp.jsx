import compStyles from "./displayallsu.css"
// import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../AuthRouter";

// const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
// const supabase = createClient(supaurl, supakey);

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
            .select("*")
            .order('last_name', { ascending: true });
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
          {/* WELCOME BOX */}
          <section className="global-welcome">
              <h1 className="global-heading"> Service user Database
              </h1>
              <p className="global-description"> Click a person below to view or edit their info.</p>
            </section>
          {/* CONTENT BOX */}
          <section className="global-content">
            <div className="displayallsu-grid"> 
            {data.map((profiles) => (
                  <div className="displayallsu-cards">
                  <Link passHref legacyBehavior key={profiles.user_id} href={`/displayallsu/${profiles.user_id}`}>
                      <div className="displayallsu-card-name">{profiles.last_name}, {profiles.first_name}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>        
          </section>
        </>
    )}
