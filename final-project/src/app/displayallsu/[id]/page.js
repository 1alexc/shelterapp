import Link from "next/link";
import AuthRouter from "../../AuthRouter.jsx";
import { createClient } from "@supabase/supabase-js";
import SuDisplay from "./SuDisplay.jsx";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

//this pre-renders the dynamic routes (so remember to restart the server if you make any changes! and returns the id of the route selected as a param - accessed as params.id)

export async function generateStaticParams() {
  try {
    const res = await supabase.from("service_users").select("user_id");

    const userData = res.data[0]; //This only fetches one result

    if (userData) {
      return [{ id: userData.user_id.toString() }];
    } else {
      // Handles the case where no user with the user_id is found
      // Throws an error if this happens
      return []; 
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
}

//This fetches a specific profile (server-side so the code is different from the diaplayallsu which fetches client-side)
// .eq is equivalent to WHERE in SQL

async function getSuProfile(id) {
  const res = await supabase
    .from("service_users")
    .select("*")
    .eq("user_id", id);

  const data = res;
  return data.data;
}

//renders the page, gets the user id from generatestaticparams, fetches profile using this id as an argument
//as data is fetched server-side the console logs will only be in the next.js terminal and not on the website

export default async function DisplayOneSU({ params }) {
  const id = params.id;
  console.log("id", id);

  const suProfiles = await getSuProfile(id);
  console.log("su profile", suProfiles);
 

  return (
    <>
      <AuthRouter pageName={"displayonesu"} />
      <h1>View SU Profile</h1>
      {suProfiles &&
        suProfiles.map(
          ({
            user_id,
            first_name,
            last_name,
            age,
            gender,
            dob,
            ni_number,
            phone,
            email,
            emergency_contact_name,
            emergency_contact_relationship,
            emergency_contact_phone,
          }) => (
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
          )
        )}

      <Link href="/editsu">
        <button>Edit Service User Button</button>
      </Link>
    </>
  );
}
