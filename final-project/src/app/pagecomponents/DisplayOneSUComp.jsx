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
import { toast } from "sonner";
import { supabase } from "../AuthRouter";
export const dynamic = "force-dynamic"; //forces next js to revaluate data preventing caching
export const revalidate = 0; //tells supabase to not use caching

// SUPABASE
// import { createClient } from "@supabase/supabase-js";
// const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabase = createClient(supaurl, supakey);

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
  let userID = allFetchedDataAboutSpecificSU.service_users[0].user_id;

  // TOGGLE FUNCTIONS AND STATE
  const [displayStatusProfile, setDisplayStatusProfile] = useState("none");
  const [displayStatusStrengths, setDisplayStatusStrengths] = useState("none");
  const [displayStatusEmergencyContact, setDisplayStatusEmergencyContact] =
    useState("none");
  const [displayStatusMedical, setDisplayStatusMedical] = useState("none");
  const [displayStatusEmployment, setDisplayStatusEmployment] =
    useState("none");
  const [displayStatusResidence, setDisplayStatusResidence] = useState("none");
  const [displayStatusComments, setDisplayStatusComments] = useState("none");

  function handleDisplayClickProfile() {
    if (displayStatusProfile == "none") {
      setDisplayStatusProfile("inline");
    } else {
      setDisplayStatusProfile("none");
    }
  }
  function handleDisplayClickMedical() {
    if (displayStatusMedical == "none") {
      setDisplayStatusMedical("inline");
    } else {
      setDisplayStatusMedical("none");
    }
  }
  function handleDisplayClickResidence() {
    if (displayStatusResidence == "none") {
      setDisplayStatusResidence("inline");
    } else {
      setDisplayStatusResidence("none");
    }
  }
  function handleDisplayClickStrengths() {
    if (displayStatusStrengths == "none") {
      setDisplayStatusStrengths("inline");
    } else {
      setDisplayStatusStrengths("none");
    }
  }
  function handleDisplayClickComments() {
    if (displayStatusComments == "none") {
      setDisplayStatusComments("inline");
    } else {
      setDisplayStatusComments("none");
    }
  }
  function handleDisplayClickEmergencyContact() {
    if (displayStatusEmergencyContact == "none") {
      setDisplayStatusEmergencyContact("inline");
    } else {
      setDisplayStatusEmergencyContact("none");
    }
  }
  function handleDisplayClickEmployment() {
    if (displayStatusEmployment == "none") {
      setDisplayStatusEmployment("inline");
    } else {
      setDisplayStatusEmployment("none");
    }
  }

  // EDIT FUNCTION CODE
  // edit_strengths
  const [editStatusStrengths, setEditStatusStrengths] = useState(false);
  function handleEditStrengths() {
    setDisplayStatusStrengths("inline");
    if (editStatusStrengths == false) {
      setEditStatusStrengths(true);
    } else {
      setEditStatusStrengths(false);
    }
  }
  // edit_profile
  const [editStatusProfile, setEditStatusProfile] = useState(false);
  function handleEditProfile() {
    setDisplayStatusProfile("inline");
    if (editStatusProfile == false) {
      setEditStatusProfile(true);
    } else {
      setEditStatusProfile(false);
    }
  }
  // edit_history

  const [editStatusHistory, setEditStatusHistory] = useState(false);
  function handleEditHistory() {
    setEditStatusHistory("inline");
    if (editStatusHistory == false) {
      setEditStatusHistory(true);
    } else {
      setEditStatusHistory(false);
    }
  }
  // edit_comments

  const [editStatusComments, setEditStatusComments] = useState(false);
  function handleEditComments() {
    setDisplayStatusComments("inline");
    if (editStatusComments == false) {
      setEditStatusComments(true);
    } else {
      setEditStatusComments(false);
    }
  }
  // edit_medical
  const [editStatusMedical, setEditStatusMedical] = useState(false);
  function handleEditMedical() {
    setDisplayStatusMedical("inline");
    if (editStatusMedical == false) {
      setEditStatusMedical(true);
    } else {
      setEditStatusMedical(false);
    }
  }

  // edit_emergency

  const [editStatusEmergencyContact, setEditStatusEmergencyContact] =
    useState(false);
  function handleEditEmergencyContact() {
    setDisplayStatusEmergencyContact("inline");
    if (editStatusEmergencyContact == false) {
      setEditStatusEmergencyContact(true);
    } else {
      setEditStatusEmergencyContact(false);
    }
  }

  // edit_residence
  const [editStatusResidence, setEditStatusResidence] = useState(false);
  function handleEditResidence() {
    setDisplayStatusResidence("inline");
    if (editStatusResidence == false) {
      setEditStatusResidence(true);
    } else {
      setEditStatusResidence(false);
    }
  }

  // STATE FOR EDITING DATA
  const [suData, setSuData] = useState(allFetchedDataAboutSpecificSU);

  // FUNCTION FOR UPDATING CONTEXT BEFORE PUSH
  function updateContext(table, column, newInputValue) {
    allFetchedDataAboutSpecificSU[table][0][column] = newInputValue;
    let updatedData = allFetchedDataAboutSpecificSU;
    setSuData(updatedData);
    console.log(suData);
  }

  // FUNCTION TO UPDATE/INSERT DATA,
  async function updateOrInsertData(table) {
    console.log(table);
    toast("Success", {
      className: "success-toast",
      description: "Successfully Edited Service User",
      duration: 2000,
      position: "top-left",
      // onAutoClose: window.location.reload(), //will reload page(after toast disappears)
      style: {
        background: "#f5f5f5",
        color: "#111111",
        border: "3px solid #111111",
      },
    });
    // part 1: checking to see if data exists
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("user_id", userID);

    // part 2: if there is data, run an UPDATE query for a specific input value
    if (data.length >= 1) {
      await supabase.from(table).update(suData[table][0]).eq("user_id", userID);
      console.log(
        `Data already existed, so data will be updated for user no. "${userID}""`
      );
    }

    // if there is no data, -> INSERT
    else {
      await supabase
        .from("strengths")
        .insert(suData[table][0])
        .eq("user_id", userID);
      console.log(
        `Data did not exist , so data will be inserted for user no. "${userID}".`
      );
    }

    //upsert method to experiment with
    //    const { data, error } = await supabase
    //   .from(table)
    //   .select("*")
    //   .eq("user_id", userID);

    // // Assuming suData[table][0] is the data you want to insert/update
    // const dataToUpsert = suData[table][0];

    // // Check if there's existing data
    // if (data.length >= 1) {
    //   // If there's existing data for this user, update it
    //   await supabase
    //     .from(table)
    //     .upsert(dataToUpsert, { onConflict: ['user_id'] })  // Here, 'user_id' is the unique constraint
    //     .eq("user_id", userID);

    //   console.log(`Data already existed, so data will be updated for user no. "${userID}"`);
    // } else {
    //   // If no existing data for this user, insert the new data
    //   await supabase
    //     .from(table)
    //     .insert(dataToUpsert);

    //   console.log(`Data did not exist, so data will be inserted for user no. "${userID}".`);
    // }
  }

  // RETURN
  return (
    <>
    {/* WELCOME BOX */}
    <section className="global-welcome">
        <h1 className="global-heading">Service user information
        </h1>
        <p className="global-description"> View and edit the information below</p>
      </section>
    {/* CONTENT BOX */}
    <section className="global-content">
      <div className="onesu-flexbox-top">
          <Link href="/displayallsu">
            <div className="onesu-flexbox-item-serviceusername">
              <img
                className="global-button-shadow"
                src="/backarrow.png"
                alt="back button icon"
              />
            </div>
          </Link>
          <section className="global-welcome">
            <h1 className="global-heading">{service_users[0]?.first_name}'s profile
            </h1>
            <p className="global-description">{service_users[0]?.first_name} loves... {strengths[0]?.interest_text_one.toLowerCase() || ""},  {strengths[0]?.interest_text_two.toLowerCase() || ""} and  {strengths[0]?.interest_text_three.toLowerCase() || "being at the shelter"}.</p>
          </section>
          <div className="onesu-avatar global-rounded-border">
            <Image
              src={"/avatar2.svg"}
              alt="su avatar"
              width={120}
              height={120}
              priority
              className="onesu-avatar-pic global-rounded-border"
            />
          </div>
        </div>
      
        {/* PROFILE/INTERESTS BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickProfile}
            >
              <span>Basic Info</span>
              <Image
                src={
                  displayStatusProfile === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div className="onesu-toggle-edit" onClick={handleEditProfile}>
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox white-font"
            style={{ display: displayStatusProfile }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="First name"
                table={"service_users"}
                column={"first_name"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="Last name"
                table={"service_users"}
                column={"last_name"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="Age"
                table={"service_users"}
                column={"age"}
                type="number"
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="Gender"
                table={"service_users"}
                column={"gender"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="DOB"
                table={"service_users"}
                column={"dob"}
                type={"date"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="NI Number"
                table={"service_users"}
                column={"ni_number"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="Phone"
                type={"tel"}
                table={"service_users"}
                column={"phone"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <EditablePair
                dataLabel="Email"
                table={"service_users"}
                column={"email"}
                type={"email"}
                updateContext={updateContext}
                editMode={editStatusProfile}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{ display: editStatusProfile ? "inline" : "none" }}
                  onClick={function () {
                    updateOrInsertData("service_users");
                    setEditStatusProfile(false);
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>

        {/* STRENGTHS/INTERESTS BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickStrengths}
            >
              <span>Strengths & Interests</span>
              <Image
                src={
                  displayStatusStrengths === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div className="onesu-toggle-edit" onClick={handleEditStrengths}>
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox"
            style={{ display: displayStatusStrengths }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="Strength 1"
                table={"strengths"}
                column={"strengths_text_one"}
                updateContext={updateContext}
                editMode={editStatusStrengths}
              ></EditablePair>
              <EditablePair
                dataLabel="Strength 2"
                table={"strengths"}
                column={"strengths_text_two"}
                updateContext={updateContext}
                editMode={editStatusStrengths}
              ></EditablePair>
              <EditablePair
                dataLabel="Strength 3"
                table={"strengths"}
                column={"strengths_text_three"}
                updateContext={updateContext}
                editMode={editStatusStrengths}
              ></EditablePair>
                            <hr></hr>
              <EditablePair
                dataLabel="Interest 1"
                table={"strengths"}
                column={"interest_text_one"}
                updateContext={updateContext}
                editMode={editStatusStrengths}
              ></EditablePair>
              <EditablePair
                dataLabel="Interest 2"
                table={"strengths"}
                column={"interest_text_two"}
                updateContext={updateContext}
                editMode={editStatusStrengths}
              ></EditablePair>
              <EditablePair
                dataLabel="Interest 3"
                table={"strengths"}
                column={"interest_text_three"}
                updateContext={updateContext}
                editMode={editStatusStrengths}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{ display: editStatusStrengths ? "inline" : "none" }}
                  onClick={function () {
                    updateOrInsertData("strengths");
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>
        {/* EMERGENCY BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickEmergencyContact}
            >
              <span>Emergency Contact</span>
              <Image
                src={
                  displayStatusEmergencyContact === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div
              className="onesu-toggle-edit"
              onClick={handleEditEmergencyContact}
            >
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox"
            style={{ display: displayStatusEmergencyContact }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="Name"
                table={"service_users"}
                column={"emergency_contact_name"}
                updateContext={updateContext}
                editMode={editStatusEmergencyContact}
              ></EditablePair>
              <EditablePair
                dataLabel="Relationship to user"
                table={"service_users"}
                column={"emergency_contact_relationship"}
                updateContext={updateContext}
                editMode={editStatusEmergencyContact}
              ></EditablePair>
              <EditablePair
                dataLabel="Phone"
                table={"service_users"}
                type="tel"
                column={"emergency_contact_phone"}
                updateContext={updateContext}
                editMode={editStatusEmergencyContact}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{
                    display: editStatusEmergencyContact ? "inline" : "none",
                  }}
                  onClick={function () {
                    updateOrInsertData("service_users");
                    setEditStatusEmergencyContact(false);
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>
        {/* MEDICAL BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickMedical}
            >
              <span>Medical</span>
              <Image
                src={
                  displayStatusMedical === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div className="onesu-toggle-edit" onClick={handleEditMedical}>
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox"
            style={{ display: displayStatusMedical }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="NHS number"
                table={"medical"}
                column={"nhs_number"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Mental health disclosures"
                table={"medical"}
                column={"mental_health_disclosures"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Physical health disclosures"
                table={"medical"}
                column={"physical_health_disclosures"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Substance abuse disclosures"
                table={"medical"}
                column={"substance_abuse_disclosures"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Registered medical practice"
                table={"medical"}
                column={"registered_medical_practice"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Blood type"
                table={"medical"}
                column={"blood_type"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Allergies"
                table={"medical"}
                column={"allergies"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <EditablePair
                dataLabel="Medications"
                table={"medical"}
                column={"medications"}
                updateContext={updateContext}
                editMode={editStatusMedical}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{ display: editStatusMedical ? "inline" : "none" }}
                  onClick={function () {
                    updateOrInsertData("medical");
                    setEditStatusMedical(false);
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>
        {/* EMPLOYMENT BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickEmployment}
            >
              <span>Employment history</span>
              <Image
                src={
                  displayStatusEmployment === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div className="onesu-toggle-edit" onClick={handleEditHistory}>
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox"
            style={{ display: displayStatusEmployment }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="Job title"
                table={"employment_status"}
                column={"job_description"}
                updateContext={updateContext}
                editMode={editStatusHistory}
              ></EditablePair>
              <EditablePair
                dataLabel="Start date"
                table={"employment_status"}
                column={"start_date"}
                type={"date"}
                updateContext={updateContext}
                editMode={editStatusHistory}
              ></EditablePair>
              <EditablePair
                dataLabel="End date"
                table={"employment_status"}
                column={"end_date"}
                type={"date"}
                updateContext={updateContext}
                editMode={editStatusHistory}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{ display: editStatusHistory ? "inline" : "none" }}
                  onClick={function () {
                    updateOrInsertData("employment_status");
                    setEditStatusHistory(false);
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>
        {/* COMMENTS */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickComments}
            >
              <span>Comments</span>
              <Image
                src={
                  displayStatusComments === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div className="onesu-toggle-edit" onClick={handleEditComments}>
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox"
            style={{ display: displayStatusComments }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="Comment Text"
                table={"comments"}
                column={"comment_text"}
                updateContext={updateContext}
                editMode={editStatusComments}
              ></EditablePair>
              <EditablePair
                dataLabel="Comment Date"
                table={"comments"}
                column={"comment_date"}
                updateContext={updateContext}
                editMode={editStatusComments}
              ></EditablePair>
              <EditablePair
                dataLabel="Staff Name"
                table={"comments"}
                column={"staff_name"}
                updateContext={updateContext}
                editMode={editStatusComments}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{ display: editStatusComments ? "inline" : "none" }}
                  onClick={function () {
                    updateOrInsertData("comments");
                    setEditStatusComments(false);
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>
        {/* RESIDENCE BOX */}
        <div className="onesu-toggle-container">
          <div className="onesu-toggle-header">
            <div
              className="onesu-toggle-title"
              onClick={handleDisplayClickResidence}
            >
              <span>Residence history</span>
              <Image
                src={
                  displayStatusResidence === "none"
                    ? "/arrowup.png"
                    : "/arrowdown.png"
                }
                alt="collapse headings button"
                width="50"
                height="15"
                className="link"
              />
            </div>
            <div className="onesu-toggle-edit" onClick={handleEditResidence}>
              Edit
            </div>
          </div>
          <div
            className="onesu-toggle-information-flexbox"
            style={{ display: displayStatusResidence }}
          >
            <ServiceUserContext.Provider value={suData}>
              <EditablePair
                dataLabel="Date entry"
                table={"residence"}
                column={"date_entry"}
                updateContext={updateContext}
                editMode={editStatusResidence}
              ></EditablePair>
              <EditablePair
                dataLabel="Current status"
                table={"residence"}
                column={"current_status"}
                updateContext={updateContext}
                editMode={editStatusResidence}
              ></EditablePair>
              <EditablePair
                dataLabel="Previous stays"
                table={"residence"}
                column={"previous_stays"}
                updateContext={updateContext}
                editMode={editStatusResidence}
              ></EditablePair>
              <br></br>
              <div className="onesu-update-container">
                <div
                  className="onesu-update-btn"
                  style={{ display: editStatusResidence ? "inline" : "none" }}
                  onClick={function () {
                    updateOrInsertData("residence");
                    setEditStatusResidence(false);
                  }}
                >
                  UPDATE
                </div>
              </div>
            </ServiceUserContext.Provider>
          </div>
        </div>
    </section>


    </>
  );
}
