import Link from 'next/link'
import AuthRouter from '../../AuthRouter.jsx'
import { createClient } from "@supabase/supabase-js";
import SuDisplay from "./SuDisplay.jsx";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);


    export async function generateStaticParams() {
      try {
        const res = await supabase
          .from("service_users")
          .select("user_id")
         
    
        const userData = res.data[0]; // Assuming you expect only one result
    
        if (userData) {
          return [{ id: userData.user_id.toString() }];
        } else {
          // Handle the case where no user with user_id 1 was found
          return []; // Or you can return a default value or throw an error
        }
      } catch (error) {
        console.error("Error fetching data from Supabase:", error);
        throw error;
      }
    }
    
    

  async function getSuProfile(id) {
    
    
    const res = await supabase.from("service_users").select("*").eq("user_id", id);
    const data = res;
  
    return data.data;
  }
  

export default async function DisplayOneSU({params}) {
  
  const id = params.id;
  console.log("id", id);

    const suProfiles = await getSuProfile(id);
  console.log("su profile", suProfiles);
  // const id = await generateStaticParams();
  

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
