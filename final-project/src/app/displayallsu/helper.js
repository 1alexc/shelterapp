import { createClient } from "@supabase/supabase-js";
// import { supabase } from "../AuthRouter";

// SUPABASE KEY, URL AND CLIENT ---------------------------------------------
const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaurl, supakey);

// DATE CONVERTER _________________________________________________________________
export function formatDate(dateString) {
  // If dateString is undefined or null, return an empty string
  if (!dateString) {
    return "";
  }

  const arrayDate = dateString.split("-");
  const dayWithZeros = arrayDate[2];
  const parsedDay = parseInt(dayWithZeros);
  const dayWithoutZeros = parsedDay.toString();

  const monthsTextArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const monthIndex = arrayDate[1] - 1;
  const monthText = monthsTextArray[monthIndex];

  const year = arrayDate[0];

  return `${dayWithoutZeros} ${monthText} ${year}`;
}


// FETCH SPECIFIC SU DATA FROM SUPABASE --------------------------------------
export async function fetchSpecificSUDataFromSupabase(id) {
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

  const photoResponse = await supabase.from("").sel;

  const service_users = profileResponse?.data;
  const strengths = strengthsResponse?.data;
  const medical = medicalResponse?.data;
  const employment_status = employment_statusResponse?.data;
  const residence = residenceResponse?.data;
  const comments = commentsResponse?.data;

  let fetchedData = {
    service_users,
    strengths,
    medical,
    employment_status,
    residence,
    comments,
  };
  return fetchedData;
}

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
