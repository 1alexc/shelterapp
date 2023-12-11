import Link from "next/link";
import AuthRouter from "../../AuthRouter.jsx";
import { createClient } from "@supabase/supabase-js";
import styles from "./sudisplay.css"
import Image from "next/image.js";

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
  let allInfo = {
    profile,
    strengths,
    medical,
    employment_status,
    residence,
    comments,
  };
  return allInfo;
}
//renders the page, gets the user id from generatestaticparams, fetches profile using this id as an argument
//as data is fetched server-side the console logs will only be in the next.js terminal and not on the website

export default async function DisplayOneSU({ params }) {
  const id = params.id;
  const {
    profile,
    strengths,
    medical,
    employment_status,
    residence,
    comments,
  } = await getSuData(id);

  return (
    <>
      <AuthRouter pageName={"displayonesu"} />
      <div className="page-container">
        {/* WELCOME BOX */}
        <div className="flexbox-container-w">
          <div className="flexbox-item-image">
            <Image className="SU-pic" src="/William_Brown.png" alt="William Brown" width="100" height="100" />
          </div>
          <div className="flexbox-item-serviceusername">
            Welcome to {profile[0].first_name}'s profile
          </div>
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Basic Information</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">First Name:</div>
            <div className="value">{profile[0].first_name}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Last Name:</div>
            <div className="value">{profile[0].last_name}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Age:</div>
            <div className="value">{profile[0].age}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Gender:</div>
            <div className="value">{profile[0].gender}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">DOB:</div>
            <div className="value">{profile[0].dob}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">NI Number:</div>
            <div className="value">{profile[0].ni_number}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Phone Number:</div>
            <div className="value">{profile[0].phone}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Email:</div>
            <div className="value">william.b@example.com</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Emergency Contact Name:</div>
            <div className="value">Olivia Brown</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Emergency Contact Relationship:</div>
            <div className="value">Aunt</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Emergency Contact Phone Number:</div>
            <div className="value">07654321098</div>
          </div>
        </div>
    

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Strengths</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Strengths One:</div>
            <div className="value">
              {strengths[0].strengths_text_one}
            </div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Strength Two:</div>
            <div className="value">
              {strengths[0].strengths_text_two}
            </div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Strength Three:</div>
            <div className="value">
             {strengths[0].strengths_text_three}
            </div>
          </div>
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Medical</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">NHS Number:</div>
            <div className="value">{medical[0].nhs_number}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Mental Health Disclosures:</div>
            <div className="value">{medical[0].mental_health_disclosures}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Physical Health Disclosure:</div>
            <div className="value">{medical[0].physical_health_disclosures}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Substance Abuse Disclosures:</div>
            <div className="value">{medical[0].substance_abuse_disclosures}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Registered Medical Practitioner:</div>
            <div className="value">{medical[0].registered_medical_practice}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Blood Type:</div>
            <div className="value">{medical[0].blood_type}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Allergies</div>
            <div className="value">{medical[0].allergies}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Medications</div>
            <div className="value">{medical[0].medications}</div>
          </div>
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Employment History</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Job Description:</div>
            <div className="value"> {employment_status[0].job_description}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Start Date:</div>
            <div className="value">{employment_status[0].start_date}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">End Date:</div>
            <div className="value">{employment_status[0].end_date}</div>
          </div>
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Comments</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Comment text:</div>
            <div className="value">{comments[0].comment_text}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Date issued:</div>
            <div className="value">{comments[0].comment_date}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Staff member:</div>
            <div className="value">{comments[0].staff_id}</div>
          </div>
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Residence</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Entry Date:</div>
            <div className="value">{residence[0].date_entry}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Current Status:</div>
            <div className="value">{residence[0].current_status ? "True" : "False"}</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Previous Stays:</div>
            <div className="value">{residence[0].previous_stays}</div>
          </div>
        </div>
      </div>

      {/* HIGHLEVELTABLE */}

     
      {/* To display all comments for loop, repeating comments.length number of times, returning the comment object */}
      
      <Link href="/editsu">
        <button>Edit Service User Button</button>
      </Link>
    </>
  );
}
