import Link from 'next/link'
import AuthRouter from '../../AuthRouter.jsx'
import { createClient } from "@supabase/supabase-js";
import SuDisplay from "../SuDisplay.jsx";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

export async function generateStaticParams() {
    const res = await supabase.from("service_users").select("*");
    const data = res;
  
    return data.data.map((suProfile) => ({
      user_id: suProfile.user_id.toString(),
    }));
  }

  async function getSuProfile(user_id) {
   
    const res = await supabase.from("service_users").select("*");
    const data = res;
  
    return data.data;
  }
  

export default async function DisplayOneSU() {
    
    const suProfiles = await getSuProfile();
  console.log("su profile", suProfiles);
  const id = generateStaticParams();
  console.log(id);

    return (
        <>
            <AuthRouter pageName={"displayonesu"}/>
            <h1>View SU Profile</h1>
            {suProfiles &&
        suProfiles.map(({ user_id, first_name, last_name, age, gender, dob, ni_number, phone, email, emergency_contact_name, emergency_contact_relationship, emergency_contact_phone }) => (
          <SuDisplay
            key={user_id}
            first_name={first_name}
            last_name={last_name}
            id={id}
            age={age}
            gender={gender}
            dob={dob}
            ni_number={ni_number}
            phone={phone}
            email={email}
            emergency_contact_name={emergency_contact_name}
            emergency_contact_relationship={emergency_contact_relationship}
            emergency_contact_phone={emergency_contact_phone}
          />
        ))}
      
            <Link href="/editsu">
                <button>Edit Service User Button</button>
            </Link>
        </>
    )
}
