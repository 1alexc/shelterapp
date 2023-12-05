"use client"
import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../components/BackButton.jsx"
// pages/index.js or components/YourComponent.js
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';



const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supaurl, supakey);

export default function ViewAllSUs() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
          try {
            const { data, error } = await supabase.from('service_users').select('*');
            console.log(data);
            if (error) {
              throw error;
            }
    
            setData(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        }
    
        fetchData();
      }, []);
    return (
        <main>
        <BackButton/>
            <h1>View SU</h1>
            <Link href="/viewsuprofile">
                <button>View Specific Service User Button</button>
            </Link>
        </main>
    )
}
