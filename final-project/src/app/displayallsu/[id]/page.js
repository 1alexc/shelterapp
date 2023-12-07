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

async function getSuData(id) {
  const profileResponse = await supabase
    .from("service_users")
    .select("*")
    .eq("user_id", id);
    
  const strengthsResponse = await supabase
    .from("strengths")
    .select("*")
    .eq("user_id", id);

  const medicalResponse = await supabase
    .from("medical")
    .select("*")
    .eq("user_id", id);

  const employment_statusResponse = await supabase
    .from("employment_status")
    .select("*")
    .eq("user_id", id);

    const residenceResponse = await supabase
    .from("residence")
    .select("*")
    .eq("user_id", id);

  const profile = profileResponse.data;
  const strengths = strengthsResponse.data;
  const medical = medicalResponse.data;
  const employment_status = employment_statusResponse.data;
  const residence = residenceResponse.data;
  let allInfo = { profile, strengths, medical, employment_status, residence }
  return allInfo
}
//renders the page, gets the user id from generatestaticparams, fetches profile using this id as an argument
//as data is fetched server-side the console logs will only be in the next.js terminal and not on the website

export default async function DisplayOneSU({ params }) {
  const id = params.id;
  const { profile, strengths, medical, employment_status, residence } = await getSuData(id);

  return (
    <>
      <AuthRouter pageName={"displayonesu"} />
      <h1>View SU Profile</h1>
      <h1>{profile[0].first_name} {profile[0].last_name}</h1>
    {/* HIGHLEVELTABLE */}

        <p><strong>Age: </strong>{profile[0].age}</p>
        <p><strong>Age: </strong>{profile[0].gender}</p>
        <p><strong>DOB: </strong>{profile[0].dob}</p>
        <p><strong>NI Number: </strong>{profile[0].ni_number}</p>
        <p><strong>Phone: </strong>{profile[0].phone}</p>
        <p><strong>Email: </strong>{profile[0].email}</p>
        <p><strong>Emergency Contact Name: </strong>{profile[0].emergency_contact_name}</p>
        <p><strong>Emergency Contact Relationship:: </strong>{profile[0].emergency_contact_relationship} </p>
        <p><strong>Emergency Contact Phone: </strong>{profile[0].emergency_contact_phone} </p>
      {/* STRENGTHS TABLE  */}
        <h1>STRENGTHS</h1>
        <p><strong>One: </strong>{strengths[0].strengths_text_one}</p>
        <p><strong>Two: </strong>{strengths[0].strengths_text_two}</p>
        <p><strong>Three: </strong>{strengths[0].strengths_text_three}</p>
        <h1>Medical Hostory</h1>
        <p><strong>NHS Number: </strong>{medical[0].nhs_number}</p>
        <p><strong>Medical: </strong>{medical[0].mental_health_disclosures}</p>
        <p><strong>NHS Number: </strong>{medical[0].physical_health_disclosures}</p>
        <p><strong>NHS Number: </strong>{medical[0].substance_abuse_disclosures}</p>
        <p><strong>NHS Number: </strong>{medical[0].registered_medical_practice}</p>
        <p><strong>NHS Number: </strong>{medical[0].blood_type}</p>
        <p><strong>NHS Number: </strong>{medical[0].allergies}</p>
      <Link href="/editsu">
        <button>Edit Service User Button</button>
      </Link>
    </>
  );
}
