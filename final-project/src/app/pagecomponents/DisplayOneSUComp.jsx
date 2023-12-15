/* File explanation
      1) DISPLAY ONE SU COMPONENT
      - Takes in a prop {allFetchedDataAboutSpecificSU}...
      - ... This prop has been passed from the page.js file -> auth router -> this component.
      - ... The reason for this is that fetching using an async function and await does NOT work in a jsx file.
      - We immediately destructure {allFetchedDataAboutSpecificSU} into its sub-objects, simply to make the references below shorter
      - ... e.g. "profile[0].first_name", instead of "allFetchedDataAboutSpecificSU.profile[0].first_name"
      2) TOGGLE BOXES
      - Each box has their own state and respective handle click function
      - The state is used as a variable for the display styling
______________________________________________________________________________________________________________________________*/

// IMPORTS ------------------------------------------------------------------
import compStyles from "./displayonesu.css";
import Link from "next/link";
import Image from "next/image.js";
import SUDataValuePair from "../babycomponents/SUDataValuePair";
import { useState } from "react";
import { formatDate } from "../displayallsu/helper";

export const dynamic = 'force-dynamic' //forces next js to revaluate data preventing caching
export const revalidate = 0    //tells supabase to not use caching
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


  // TOGGLE FUNCTIONS AND STATE
  const [displayStatusProfile, setDisplayStatusProfile] = useState('inline');
  const [displayStatusStrengths, setDisplayStatusStrengths] = useState('inline');
  const [displayStatusEmergencyContact, setDisplayStatusEmergencyContact] = useState('none');
  const [displayStatusMedical, setDisplayStatusMedical] = useState('none');
  const [displayStatusEmployment, setDisplayStatusEmployment] = useState('none');
  const [displayStatusResidence, setDisplayStatusResidence] = useState('none');
  const [displayStatusComments, setDisplayStatusComments] = useState('none');

  function handleClickProfile() {
    if (displayStatusProfile == 'none') {
      setDisplayStatusProfile('inline');
    } else {
      setDisplayStatusProfile('none');
    }
  };
  function handleClickMedical() {
    if (displayStatusMedical == 'none') {
      setDisplayStatusMedical('inline');
    } else {
      setDisplayStatusMedical('none');
    }
  };
  function handleClickResidence() {
    if (displayStatusResidence == 'none') {
      setDisplayStatusResidence('inline');
    } else {
      setDisplayStatusResidence('none');
    }
  };
  function handleClickStrengths() {
    if (displayStatusStrengths == 'none') {
      setDisplayStatusStrengths('inline');
    } else {
      setDisplayStatusStrengths('none');
    }
  };
  function handleClickComments() {
    if (displayStatusComments == 'none') {
      setDisplayStatusComments('inline');
    } else {
      setDisplayStatusComments('none');
    }
  };
  function handleClickEmergencyContact() {
    if (displayStatusEmergencyContact == 'none') {
      setDisplayStatusEmergencyContact('inline');
    } else {
      setDisplayStatusEmergencyContact('none');
    }
  };
  function handleClickEmployment() {
    if (displayStatusEmployment == 'none') {
      setDisplayStatusEmployment('inline');
    } else {
      setDisplayStatusEmployment('none');
    }
  };
 
// RETURN
  return (
    <>
      <div className="page-container">
        {/* WELCOME BOX */}
        <div className="flexbox-container-w">
          <Link href="/displayallsu">
            <div className="flexbox-item-back-bttn">
              <img className="item-back-bttn" src="/backarrow.png" alt="back button icon" />
              <p className="item-back-bttn-text">back</p>
            </div>
          </Link>
          {/* <div className="flexbox-item-image">
            <Image
              className="SU-pic"
              src={`/${profile[0]?.su_image || ""}`}
              alt={profile[0].first_name}
              width="70"
              height="80"
            />
            {/* <Image
              className="SU-pic"
              src="/su3.png"
              alt={profile[0].first_name}
              width="70"
              height="80"
            /> */}
          {/* </div> */}
          <div className="flexbox-item-serviceusername">
            Welcome to {profile[0].first_name}'s profile
          </div>
        </div>

        {/* PROFILE BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickProfile}>
            <span>Basic Info </span>
            <Image src={displayStatusProfile==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusProfile}}>
          <SUDataValuePair data={"First name"} value={profile[0]?.first_name || ""} />
          <SUDataValuePair data={"Last name"} value={profile[0]?.last_name || ""} />
          <SUDataValuePair data={"Age"} value={profile[0]?.age || ""} />
          <SUDataValuePair data={"Gender"} value={profile[0]?.gender || ""} />
          <SUDataValuePair data={"DOB"} value={formatDate(profile[0]?.dob) || ""} />
          <SUDataValuePair data={"NI Number"} value={profile[0]?.ni_number || ""} />
          <SUDataValuePair data={"Phone Number"} value={profile[0]?.phone || ""} />
          <SUDataValuePair data={"Email"} value={profile[0]?.email || ""} />

          </div>
        </div>

        {/* STRENGTHS/INTERESTS BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickStrengths}>
            <span>Strengths & Interests</span>
            <Image src={displayStatusStrengths==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusStrengths}}>
          <SUDataValuePair data={"1"} value={strengths[0]?.strengths_text_one || ""} />
          <SUDataValuePair data={"2"} value={strengths[0]?.strengths_text_two || ""} />
          <SUDataValuePair data={"3"} value={strengths[0]?.strengths_text_three || ""} />

          </div>
        </div>
        {/* EMERGENCY CONTACT BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickEmergencyContact}>
            <span>Emergency Contact</span>
            <Image src={displayStatusEmergencyContact==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusEmergencyContact}}>
          <SUDataValuePair data={"EC Name"} value={profile[0]?.emergency_contact_name || ""} />
          <SUDataValuePair data={"EC Relationship"} value={profile[0]?.emergency_contact_relationship || ""} />
          <SUDataValuePair data={"EC Phone Number"} value={profile[0]?.emergency_contact_phone || ""} />

          </div>
        </div>


        {/* MEDICAL BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickMedical}>
            <span>Medical</span>
            <Image src={displayStatusMedical==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusMedical}}>
          <SUDataValuePair data="NHS number" value={medical[0]?.nhs_number || ""} />
          <SUDataValuePair data="Mental health disclosures" value={medical[0]?.mental_health_disclosures || ""} />
          <SUDataValuePair data="Physical health disclosure" value={medical[0]?.physical_health_disclosures || ""} />
          <SUDataValuePair data="Substance abuse disclosures" value={medical[0]?.substance_abuse_disclosures || ""} />
          <SUDataValuePair data="Registered medical practitioner" value={medical[0]?.registered_medical_practice || ""} />
          <SUDataValuePair data="Blood Type" value={medical[0]?.blood_type || ""} />
          <SUDataValuePair data="Allergies" value={medical[0]?.allergies || ""} />
          <SUDataValuePair data="Medications" value={medical[0]?.medications || ""} />

          </div>
        </div>
        {/* EMPLOYMENT BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickEmployment}>
            <span>Employment history</span>
            <Image src={displayStatusEmployment==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusEmployment}}>
              <SUDataValuePair data={"Job description"} value={employment_status[0]?.job_description || ""} />
              <SUDataValuePair data={"Start date"} value={formatDate(employment_status[0]?.start_date) || ""} />
              <SUDataValuePair data={"End date"} value={formatDate(employment_status[0]?.end_date) || ""} />

          </div>
        </div>
        {/* COMMENTS BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickComments}>
            <span>Comments ({comments.length})</span>
            <Image src={displayStatusComments==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusComments}}>
                {comments.map((commentrow) => (
                  <div key={commentrow}>
                    <hr></hr>
                    <SUDataValuePair data="Comment" value={commentrow?.comment_text || ""} />
                    <SUDataValuePair data="Date" value={formatDate(commentrow?.comment_date) || ""} />
                    <SUDataValuePair data="Staff member" value={commentrow?.staff_name || ""} />
                  </div>
                ))}
          </div>
        </div>

        {/* RESIDENCE BOX */}

        <div className="toggle-container">
          <div className="toggle-title" onClick={handleClickResidence}>
            <span>Residence</span>
            <Image src={displayStatusResidence==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusResidence}}>
          <SUDataValuePair data={"Entry date"} value={formatDate(residence[0]?.date_entry) || ""} />
          <SUDataValuePair data={"Current status"} value={residence[0]?.current_status || ""} />
          <SUDataValuePair data={"Previous stays"} value={residence[0]?.previous_stays || ""} />
          </div>
        </div>
        
        {/* EDIT SERVICE USER */}
        <div className="edit-button">
          <Link href="/editsu" passHref legacyBehavior>
             <p>Edit Service User</p>
          </Link>
        </div>
      </div>
    </>
  );
}
