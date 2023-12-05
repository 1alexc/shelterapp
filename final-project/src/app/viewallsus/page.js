"use client"
//must use client ofr useffect and usestate
import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../components/BackButton.jsx"
// pages/index.js or components/YourComponent.js
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';



const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

export default function ViewAllSUs() {
  //capture SU info as state (2 different states - will eventually only choose 1)
    const [info, setInfo] = useState(null);
    const [data, setData] = useState([]);
  
    //possibly capture id from button click as state?
    function handleClick(){
      console.log("hi")
    }
  
    useEffect(() => {
      async function fetchData() {
        //try catch to catch errors
        try {
          //supabase-specific syntax for a SQL query .from('service_users').select('*') instead of SELECT * from service_users
          // data from supabase is fetched as an object - this is deconstructed as data and error
          const { data, error } = await supabase.from('service_users').select('*');
          console.log(data);
          if (error) {
            throw error;
          }
  
          setInfo(data);
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
  
      fetchData();
    }, []);
  
   
  
    return (
      <main>
        <BackButton />
        <h1>View SU</h1>
        {/* map su data to the buttons - currently they are not connected to a specific profile but they are links */}
        {data.map(profiles => (
        <Link key={profiles.id} href={`/viewsuprofile`}>
          
            <button>{profiles.first_name} {profiles.last_name}</button>
          
        </Link>
      ))}
        <Link href="/viewsuprofile">
          <button>View Specific Service User Button</button>
        </Link>
      </main>
    );
  }
