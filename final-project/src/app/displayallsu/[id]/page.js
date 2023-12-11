/* File explanation
      1) GENERATE STATIC PARAMS pre-renders the file routes (displaysu.../1, /2, /3 etc)
      - It also returns the id of the route selected as {params.id}.
      - You need to restart the server if you make changes to this function.
      2) FETCH SPECIFIC SU DATA FROM SUPABASE queries the database to return info from all tables about a specific service user.
      3) AUTH ROUTER WITH PROPS passes a request for the displayOneSu component AND all the fetched data about a specific service user.
      - {params} relates to the dynamic routing.
______________________________________________________________________________________________________________________________*/

// IMPORTS ------------------------------------------------------------------
import AuthRouter from "../../AuthRouter.jsx";
import { createClient } from "@supabase/supabase-js";

// SUPABASE KEY, URL AND CLIENT ---------------------------------------------
const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaurl, supakey);

// GENERATE STATIC PARAMS ----------------------------------------------------
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

// FETCH SPECIFIC SU DATA FROM SUPABASE --------------------------------------
async function fetchSpecificSUDataFromSupabase(id) {
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

  const commentsResponse = await supabase
    .from("comments")
    .select("*")
    .eq("user_id", id);

  const profile = profileResponse.data;
  const strengths = strengthsResponse.data;
  const medical = medicalResponse.data;
  const employment_status = employment_statusResponse.data;
  const residence = residenceResponse.data;
  const comments = commentsResponse.data;

  let fetchedData = {
    profile,
    strengths,
    medical,
    employment_status,
    residence,
    comments,
  };
  return fetchedData;
}

// AUTHROUTER WITH PROPS -----------------------------------------------------
export default async function DisplayOneSU({ params }) {
  const id = params.id;
  const allFetchedDataAboutSpecificSU = await fetchSpecificSUDataFromSupabase(
    id
  );

  return (
    <>
      <AuthRouter
        pageName={"displayonesu"}
        allFetchedDataAboutSpecificSU={allFetchedDataAboutSpecificSU}
      />
    </>
  );
}
