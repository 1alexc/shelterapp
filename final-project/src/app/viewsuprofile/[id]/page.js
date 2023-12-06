
import Link from 'next/link'
import BackButton from "../../components/BackButton.jsx"
import { createClient } from '@supabase/supabase-js';
import SuDisplay from '@/app/components/Sudisplay.js';

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

async function getSuProfile() {
    const res = await supabase.from('service_users').select('*');
    const data = res;
    
    return data;
};





export default async function ViewSUProfile() {
 const suProfiles = await getSuProfile();
 console.log("su profile", suProfiles);
 console.log()
    return (
        <main>
        <BackButton/>
            <h1>View SU Profile</h1>
            {suProfiles.map(({user_id, first_name, last_name}) => (
                <SuDisplay key={user_id} first_name={first_name} last_name={last_name}  />
            ))

             }
            <Link href="/editsu">
                <button>Edit Service User Button</button>
            </Link>
        </main>
    )
}
