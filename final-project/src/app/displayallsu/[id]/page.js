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

async function getSuStrengths(id) {
  const res = await supabase.from("strengths").select("*").eq("user_id", id);

  const data = res;
  return data.data;
}
//renders the page, gets the user id from generatestaticparams, fetches profile using this id as an argument
//as data is fetched server-side the console logs will only be in the next.js terminal and not on the website

export default async function DisplayOneSU({ params }) {
  const id = params.id;
  // console.log("id", id);

  const suProfiles = await getSuProfile(id);
  // console.log("su profile", suProfiles);
  const suStrengths = await getSuStrengths(id);
  // console.log(suStrengths);

  return (
    <>
      <AuthRouter pageName={"displayonesu"} />
      <h1>View SU Profile</h1>
    
        <h1>
          {suProfiles[0].first_name} {suProfiles[0].last_name}
        </h1>
    {/* HIGHLEVELTABLE */}

        <p><strong>Age: </strong>{suProfiles[0].age}</p>
        <p><strong>Age: </strong>{suProfiles[0].gender}</p>
        <p><strong>DOB: </strong>{suProfiles[0].dob}</p>
        <p><strong>NI Number: </strong>{suProfiles[0].ni_number}</p>
        <p><strong>Phone: </strong>{suProfiles[0].phone}</p>
        <p><strong>Email: </strong>{suProfiles[0].email}</p>
        <p><strong>Emergency Contact Name: </strong>{suProfiles[0].emergency_contact_name}</p>
        <p><strong>Emergency Contact Relationship:: </strong>Emergency Contact Relationship: {suProfiles[0].emergency_contact_relationship} </p>
        <p><strong>Emergency Contact Phone: </strong>{suProfiles[0].emergency_contact_phone} </p>
      {/* STRENGTHS TABLE  */}
        <h1>STRENGTHS</h1>
        <p><strong>One: </strong>{suStrengths[0].strengths_text_one}</p>
        <p><strong>Two: </strong>{suStrengths[0].strengths_text_two}</p>
        <p><strong>Three: </strong>{suStrengths[0].strengths_text_three}</p>
      <Link href="/editsu">
        <button>Edit Service User Button</button>
      </Link>
    </>
  );
}
