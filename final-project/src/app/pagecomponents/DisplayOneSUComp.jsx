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
import EditablePair from "../babycomponents/EditablePair";
import React from "react";
import ServiceUserContext from "../babycomponents/serviceUserContext";
import PairStrengths from "../babycomponents/EditablePair";
export const dynamic = 'force-dynamic' //forces next js to revaluate data preventing caching
export const revalidate = 0    //tells supabase to not use caching


// SUPABASE
import { createClient } from "@supabase/supabase-js";
const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaurl, supakey);


// DISPLAY ONE SU COMPONENT ------------------------------------------------------------------
export default function DisplayOneSUComp({ allFetchedDataAboutSpecificSU }) {
  const {
    service_users,
    strengths,
    medical,
    employment_status,
    residence,
    comments,
  } = allFetchedDataAboutSpecificSU;
  let userID=allFetchedDataAboutSpecificSU.profile[0].user_id


  // TOGGLE FUNCTIONS AND STATE
  const [displayStatusProfile, setDisplayStatusProfile] = useState('none');
  const [displayStatusStrengths, setDisplayStatusStrengths] = useState('none');
  const [displayStatusEmergencyContact, setDisplayStatusEmergencyContact] = useState('none');
  const [displayStatusMedical, setDisplayStatusMedical] = useState('none');
  const [displayStatusEmployment, setDisplayStatusEmployment] = useState('none');
  const [displayStatusResidence, setDisplayStatusResidence] = useState('none');
  const [displayStatusComments, setDisplayStatusComments] = useState('none');

  function handleDisplayClickProfile() {
    if (displayStatusProfile == 'none') {
      setDisplayStatusProfile('inline');
    } else {
      setDisplayStatusProfile('none');
    }
  };
  function handleDisplayClickMedical() {
    if (displayStatusMedical == 'none') {
      setDisplayStatusMedical('inline');
    } else {
      setDisplayStatusMedical('none');
    }
  };
  function handleDisplayClickResidence() {
    if (displayStatusResidence == 'none') {
      setDisplayStatusResidence('inline');
    } else {
      setDisplayStatusResidence('none');
    }
  };
  function handleDisplayClickStrengths() {
    if (displayStatusStrengths == 'none') {
      setDisplayStatusStrengths('inline');
    } else {
      setDisplayStatusStrengths('none');
    }
  };
  function handleDisplayClickComments() {
    if (displayStatusComments == 'none') {
      setDisplayStatusComments('inline');
    } else {
      setDisplayStatusComments('none');
    }
  };
  function handleDisplayClickEmergencyContact() {
    if (displayStatusEmergencyContact == 'none') {
      setDisplayStatusEmergencyContact('inline');
    } else {
      setDisplayStatusEmergencyContact('none');
    }
  };
  function handleDisplayClickEmployment() {
    if (displayStatusEmployment == 'none') {
      setDisplayStatusEmployment('inline');
    } else {
      setDisplayStatusEmployment('none');
    }
  };

// EDIT FUNCTION CODE
// edit_strengths
  const [editStatusStrengths, setEditStatusStrengths] = useState(false);
  function handleEditStrengths() {
    setDisplayStatusStrengths('inline');
    if (editStatusStrengths == false) {
      setEditStatusStrengths(true);
    } else {
      setEditStatusStrengths(false);
    }
  };
  // edit_profile
  const [editStatusProfile, setEditStatusProfile] = useState(false);
  function handleEditProfile() {
    setDisplayStatusProfile('inline');
    if (editStatusProfile == false) {
      setEditStatusProfile(true);
    } else {
      setEditStatusProfile(false);
    }
  };
    // edit_history

  const [editStatusHistory, setEditStatusHistory] = useState(false);
  function handleEditHistory() {
    setDisplayStatusHistory('inline');
    if (editStatusHistory == false) {
      setEditStatusHistory(true);
    } else {
      setEditStatusHistory(false);
    }
  };
    // edit_comments

const [editStatusComments, setEditStatusComments] = useState(false);
  function handleEditComments() {
    setDisplayStatusComments('inline');
    if (editStatusComments == false) {
      setEditStatusComments(true);
    } else {
      setEditStatusComments(false);
    }
  };
  // edit_medical
  const [editStatusMedical, setEditStatusMedical] = useState(false);
  function handleEditMedical() {
    setDisplayStatusMedical('inline');
    if (editStatusMedical == false) {
      setEditStatusMedical(true);
    } else {
      setEditStatusMedical(false);
    }
  };

  // edit_emergency

  const [editStatusEmergencyContact, setEditStatusEmergencyContact] = useState(false);
  function handleEditEmergencyContact() {
    setDisplayStatusEmergencyContact('inline');
    if (editStatusEmergencyContact == false) {
      setEditStatusEmergencyContact(true);
    } else {
      setEditStatusEmergencyContact(false);
    }
  };


  // edit_residence
  const [editStatusResidence, setEditStatusResidence] = useState(false);
  function handleEditResidence() {
    setDisplayStatusResidence('inline');
    if (editStatusResidence == false) {
      setEditStatusResidence(true);
    } else {
      setEditStatusResidence(false);
    }
  };

  // STATE FOR EDITING DATA
  const [suData, setSuData] = useState(allFetchedDataAboutSpecificSU);


  // FUNCTION FOR UPDATING CONTEXT BEFORE PUSH
  function updateContext (table, column, newInputValue) {
    allFetchedDataAboutSpecificSU[table][0][column] = newInputValue
    let updatedData = allFetchedDataAboutSpecificSU
    setSuData(updatedData)
    console.log(suData);
  }


    // FUNCTION TO UPDATE/INSERT DATA,
    async function updateOrInsertData(table){
      // part 1: checking to see if data exists
        const {data, error} =  await supabase
          .from(table)
          .select("*")
          .eq('user_id', userID)
      
      // part 2: if there is data, run an UPDATE query for a specific input value
          if(data.length >= 1) {await supabase
                    .from(table) 
                    .update(suData[table][0])
                    .eq('user_id', userID)
                    console.log(`Data already existed, so data will be updated for user no. "${userID}""`)
          }
        // if there is no data, -> INSERT
        else {await supabase
                    .from("strengths") 
                    .insert(suData[table][0])
                    .eq('user_id', userID)
                    console.log(`Data did not exist , so data will be inserted for user no. "${userID}".`)
          }

    }

// RETURN
  return (
    <>
    <div className="onesu-page-container">
        {/* WELCOME BOX */}
        <div className="onesu-flexbox-container-w">
          <Link href="/displayallsu">
            <div className="onesu-flexbox-item-serviceusername">
            <img className="onesu-item-back-bttn" src="/backarrow.png" alt="back button icon" />
              <p className="onesu-item-back-serviceusername"></p>
            </div>
          </Link>
          <div className="onesu-flexbox-item-serviceusername">
            Welcome to {service_users[0].first_name}'s profile 
          </div>
        </div>


        {/* STRENGTHS/INTERESTS BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div className="onesu-toggle-title" onClick={handleDisplayClickStrengths}>
              <span>Strengths & Interests</span>
            <Image src={displayStatusStrengths==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="onesu-toggle-edit" onClick={handleEditStrengths}>Edit</div>
          </div>
          <div className="onesu-toggle-information-flexbox" style={{display: displayStatusStrengths}}>
              <ServiceUserContext.Provider value={suData}>
                <EditablePair dataLabel="1" table={"strengths"} column={"strengths_text_one"} updateContext={updateContext} editMode={editStatusStrengths}></EditablePair>
                <EditablePair dataLabel="2" table={"strengths"} column={"strengths_text_two"} updateContext={updateContext} editMode={editStatusStrengths}></EditablePair>
                <EditablePair dataLabel="3" table={"strengths"} column={"strengths_text_three"} updateContext={updateContext} editMode={editStatusStrengths}></EditablePair>
                <br></br>
                <div className="onesu-update-container">
                  <div className="onesu-update-btn" style={{display: editStatusStrengths? 'inline':'none'}} onClick={function () {updateOrInsertData("strengths")}} >UPDATE</div>
                </div>
              </ServiceUserContext.Provider>
          </div>
        </div>

















        {/* PROFILE/INTERESTS BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div className="onesu-toggle-title" onClick={handleDisplayClickProfile}>
              <span>Basic Info</span>
            <Image src={displayStatusProfile==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="onesu-toggle-edit" onClick={handleEditProfile}>Edit</div>
          </div>
          <div className="onesu-toggle-information-flexbox" style={{display: displayStatusProfile}}>
              <ServiceUserContext.Provider value={suData}>
                <EditablePair dataLabel="First name" table={"service_users"} column={"first_name"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                {/* <EditablePair dataLabel="Last name" table={"profile"} column={"last_name"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                <EditablePair dataLabel="Age" table={"profile"} column={"age"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                <EditablePair dataLabel="Gender" table={"profile"} column={"gender"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                <EditablePair dataLabel="DOB" table={"profile"} column={"dob"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                <EditablePair dataLabel="NI Number" table={"profile"} column={"ni_number"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                <EditablePair dataLabel="Phone" table={"profile"} column={"phone"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair>
                <EditablePair dataLabel="Email" table={"profile"} column={"email"} updateContext={updateContext} editMode={editStatusProfile}></EditablePair> */}
                <br></br>
                <div className="onesu-update-container">
                  <div className="onesu-update-btn" style={{display: editStatusProfile? 'inline':'none'}} onClick={function () {updateOrInsertData("strengths")}} >UPDATE</div>
                </div>
              </ServiceUserContext.Provider>
          </div>
        </div>







        {/* EMERGENCY BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div className="onesu-toggle-title" onClick={handleDisplayClickEmergencyContact}>
              <span>Emergency Contact</span>
            <Image src={displayStatusEmergencyContact==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="onesu-toggle-edit" onClick={handleEditEmergencyContact}>Edit</div>
          </div>
          <div className="onesu-toggle-information-flexbox" style={{display: displayStatusEmergencyContact}}>
              <ServiceUserContext.Provider value={suData}>
                {/* <EditablePair dataLabel="Name" table={"service_users"} column={"emergency_contact_name"} updateContext={updateContext} editMode={editStatusEmergencyContact}></EditablePair> */}
                {/* <EditablePair dataLabel="Relationship to user" table={"service_users"} column={"emergency_contact_relationship"} updateContext={updateContext} editMode={editStatusEmergencyContact}></EditablePair> */}
                {/* <EditablePair dataLabel="Phone" table={"service_users"} column={"emergency_contact_phone"} updateContext={updateContext} editMode={editStatusEmergencyContact}></EditablePair> */}
                <br></br>
                <div className="onesu-update-container">
                  <div className="onesu-update-btn" style={{display: editStatusEmergencyContact? 'inline':'none'}} onClick={function () {updateOrInsertData("strengths")}} >UPDATE</div>
                </div>
              </ServiceUserContext.Provider>
          </div>
        </div>


        {/* MEDICAL BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleDisplayClickMedical}>
            <span>Medical</span>
            <Image src={displayStatusMedical==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusMedical}}>
          {/* <SUDataValuePair data="NHS number" value={medical[0]?.nhs_number || ""} />
          <SUDataValuePair data="Mental health disclosures" value={medical[0]?.mental_health_disclosures || ""} />
          <SUDataValuePair data="Physical health disclosure" value={medical[0]?.physical_health_disclosures || ""} />
          <SUDataValuePair data="Substance abuse disclosures" value={medical[0]?.substance_abuse_disclosures || ""} />
          <SUDataValuePair data="Registered medical practitioner" value={medical[0]?.registered_medical_practice || ""} />
          <SUDataValuePair data="Blood Type" value={medical[0]?.blood_type || ""} />
          <SUDataValuePair data="Allergies" value={medical[0]?.allergies || ""} />
          <SUDataValuePair data="Medications" value={medical[0]?.medications || ""} /> */}
          </div>
        </div>
        {/* EMPLOYMENT BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleDisplayClickEmployment}>
            <span>Employment history</span>
            <Image src={displayStatusEmployment==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusEmployment}}>
              {/* <SUDataValuePair data={"Job description"} value={employment_status[0]?.job_description || ""} />
              <SUDataValuePair data={"Start date"} value={formatDate(employment_status[0]?.start_date) || ""} />
              <SUDataValuePair data={"End date"} value={formatDate(employment_status[0]?.end_date) || ""} /> */}

          </div>
        </div>
        {/* COMMENTS BOX */}
        <div className="toggle-container">
          <div className="toggle-title" onClick={handleDisplayClickComments}>
            <span>Comments ({comments.length})</span>
            <Image src={displayStatusComments==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusComments}}>
                {comments.map((commentrow) => (
                  <div key={commentrow}>
                    <hr></hr>
                    {/* <SUDataValuePair data="Comment" value={commentrow?.comment_text || ""} />
                    <SUDataValuePair data="Date" value={formatDate(commentrow?.comment_date) || ""} />
                    <SUDataValuePair data="Staff member" value={commentrow?.staff_name || ""} /> */}
                  </div>
                ))}
          </div>
        </div>

        {/* RESIDENCE BOX */}

        <div className="toggle-container">
          <div className="toggle-title" onClick={handleDisplayClickResidence}>
            <span>Residence</span>
            <Image src={displayStatusResidence==="none"? "/arrowup.png":"/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
          </div>
          <div className="toggle-information-flexbox" style={{display: displayStatusResidence}}>
          {/* <SUDataValuePair data={"Entry date"} value={formatDate(residence[0]?.date_entry) || ""} />
          <SUDataValuePair data={"Current status"} value={residence[0]?.current_status || ""} />
          <SUDataValuePair data={"Previous stays"} value={residence[0]?.previous_stays || ""} /> */}
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
