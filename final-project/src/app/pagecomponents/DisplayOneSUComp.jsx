/* File explanation
      1) DISPLAY ONE SU COMPONENT
      - Takes in a prop {allFetchedDataAboutSpecificSU}...
      - ... This prop has been passed from the page.js file -> auth router -> this component.
      - ... The reason for this is that fetching using an async function and await does NOT work in a jsx file.
      - We immediately destructure {allFetchedDataAboutSpecificSU} into its sub-objects, simply to make the references below shorter
      - ... e.g. "profile[0].first_name", instead of "allFetchedDataAboutSpecificSU.profile[0].first_name"
______________________________________________________________________________________________________________________________*/

// IMPORTS ------------------------------------------------------------------
import compStyles from "./displayonesu.css";
import Link from "next/link";
import Image from "next/image.js";
import SUDataValuePair from "../babycomponents/SUDataValuePair";

// DISPLAY ONE SU COMPONENT ------------------------------------------------------------------
export default function DisplayOneSUComp({ allFetchedDataAboutSpecificSU }) {
  const {
    profile,
    strengths,
    medical,
    employment_status,
    residence,
    comments,
  } = allFetchedDataAboutSpecificSU;
  return (
    <>
      <div className="page-container">
        {/* WELCOME BOX */}
        <div className="flexbox-container-w">
          <div className="flexbox-item-image">
            <Image
              className="SU-pic"
              src={profile[0].su_image}
              alt="William Brown"
              width="100"
              height="100"
            />
          </div>
          <div className="flexbox-item-serviceusername">
            Welcome to {profile[0].first_name}'s profile
          </div>
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Basic Information</div>
          <SUDataValuePair data={"First name"} value={profile[0].first_name} />
          <SUDataValuePair data={"Last name"} value={profile[0].last_name} />
          <SUDataValuePair data={"Age"} value={profile[0].age} />
          <SUDataValuePair data={"Gender"} value={profile[0].gender} />
          <SUDataValuePair data={"DOB"} value={profile[0].dob} />
          <SUDataValuePair data={"NI Number"} value={profile[0].ni_number} />
          <SUDataValuePair data={"Phone Number"} value={profile[0].phone} />
          <SUDataValuePair data={"Email"} value={"william.b@example.com"} />
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Emergency Contact</div>
          <SUDataValuePair data={"EC Name"} value={profile[0].emergency_contact_name}/>
          <SUDataValuePair
            data={"EC Relationship"}
            value={profile[0].emergency_contact_relationship}
          />
          <SUDataValuePair
            data={"EC Phone Number"}
            value={profile[0].emergency_contact_phone}
          />
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Strengths & Interests</div>
          <SUDataValuePair data={"1"} value={strengths[0].strengths_text_one} />
          <SUDataValuePair data={"2"} value={strengths[0].strengths_text_two} />
          <SUDataValuePair
            data={"3"}
            value={strengths[0].strengths_text_three}
          />
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Medical</div>
          <SUDataValuePair data="NHS number" value={medical[0].nhs_number} />
          <SUDataValuePair
            data="Mental health disclosures"
            value={medical[0].mental_health_disclosures}
          />
          <SUDataValuePair
            data="Physical health disclosure"
            value={medical[0].physical_health_disclosures}
          />
          <SUDataValuePair
            data="Substance abuse disclosures"
            value={medical[0].substance_abuse_disclosures}
          />
          <SUDataValuePair 
            data="Registered medical practitioner"
            value={medical[0].registered_medical_practice}
          />
          <SUDataValuePair data="Blood Type" value={medical[0].blood_type} />
          <SUDataValuePair data="Allergies" value={medical[0].allergies} />
          <SUDataValuePair data="Medications" value={medical[0].medications} />
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Employment History</div>
          <SUDataValuePair data={"Job description"} value={employment_status[0].job_description}/>
          <SUDataValuePair data={"Start date"} value={employment_status[0].start_date} />
          <SUDataValuePair
            data={"End date"}
            value={employment_status[0].end_date}
          />
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Comments</div>
          {comments.map((commentrow) => (
            <div key={commentrow}>
              <hr></hr>
              <SUDataValuePair data="Comment" value={commentrow.comment_text}/>
              <SUDataValuePair data="Date" value={commentrow.comment_date} />
              <SUDataValuePair data="Staff member" value={commentrow.staff_id} />
            </div>
          ))}
        </div>

        {/* NEXT BOX */}

        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Residence</div>
          <SUDataValuePair data={"Entry date"} value={residence[0].date_entry} />
          <SUDataValuePair data={"Current status"} value={residence[0].current_status} />
          <SUDataValuePair data={"Previous stays"} value={residence[0].previous_stays} />
        </div>
        {/* NEXT BOX */}
        <div className="edit-button">
          <Link href="/editsu" passHref legacyBehavior>
             <p>Edit Service User</p>
          </Link>
        </div>
      </div>
    </>
  );
}
