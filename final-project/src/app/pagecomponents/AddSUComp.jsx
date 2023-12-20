import compStyles from "./addsu.css";
// import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
// Make sure to npm i to install Toast package
import { toast } from "sonner";
import { supabase } from "../AuthRouter";

// const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
// const supabase = createClient(supaurl, supakey);
//, last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:""
//, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone

export default function AddSUComp({ staffId, staffName }) {
  // FETCH
  const [fetchedDataProfile, setFetchedDataProfile] = useState([]);
  const [ShowMessage, setShowMessage] = useState("false");
  async function fetchDataProfile() {
    const { data } = await supabase.from("service_users").select();
    setFetchedDataProfile(data);
  }
  useEffect(() => {
    fetchDataProfile("service-users");
  }, []);
  // INPUT SETUP ________________________________________________________________
  // let userIDForAdding = ""

  // input- profile _____________________
  // 1 blank columns
  const profileColumnsBlank = {
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    dob: "",
    ni_number: "",
    phone: "",
    emergency_contact_name: "",
    emergency_contact_relationship: "",
    email: "",
    emergency_contact_phone: "",
    su_image: "",
  };
  // 2 input state
  const [inputProfile, setInputProfile] = useState(profileColumnsBlank);
  // 3 destructuring input state
  const {
    first_name,
    last_name,
    age,
    gender,
    dob,
    ni_number,
    phone,
    emergency_contact_name,
    emergency_contact_relationship,
    email,
    emergency_contact_phone,
    su_image,
  } = inputProfile;
  // 4 destructuring columns
  const profileColumns = {
    first_name,
    last_name,
    age,
    gender,
    dob,
    ni_number,
    phone,
    emergency_contact_name,
    emergency_contact_relationship,
    email,
    emergency_contact_phone,
    su_image,
  };

  // input- strengths _____________________
  // 1 blank columns
  // const strengthsColumnsBlank = {strengths_id:"", user_id:"", strengths_text_one:"", strengths_text_two:"", strengths_text_three:""};
  // 2 input state
  // const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank)
  // 3 destructuring input state
  // const {strengths_id, user_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths
  // 4 destructuring columns
  // const strengthsColumns = {strengths_id, user_id:{userIDForAdding}, strengths_text_one, strengths_text_two, strengths_text_three};

  // input- medical _____________________
  // 1 blank columns
  const medicalColumnsBlank = {
    medical_id: "",
    nhs_number: "",
    mental_health_disclosures: "",
    physical_health_disclosures: "",
    substance_abuse_disclosures: "",
    registered_medical_practice: "",
    blood_type: "",
    allergies: "",
    medication: "",
  };
  // 2 input state
  const [inputMedical, setInputMedical] = useState(medicalColumnsBlank);
  // 3 destructuring input state
  const {
    medical_id,
    nhs_number,
    mental_health_disclosures,
    physical_health_disclosures,
    substance_abuse_disclosures,
    registered_medical_practice,
    blood_type,
    allergies,
    medication,
  } = inputMedical;
  // 4 destructuring columns
  const medicalColumns = {
    medical_id,
    nhs_number,
    mental_health_disclosures,
    physical_health_disclosures,
    substance_abuse_disclosures,
    registered_medical_practice,
    blood_type,
    allergies,
    medication,
  };
  // input-employment history _____________________
  // 1 blank columns
  const employmentStatusColumnsBlank = {
    employment_id: "",
    job_description: "",
    start_date: "",
    end_date: "",
  };
  // 2 input state
  const [inputEmploymentStatus, setInputEmploymentStatus] = useState(
    employmentStatusColumnsBlank
  );
  // 3 destructuring input state
  const { employment_id, job_description, start_date, end_date } =
    inputEmploymentStatus;
  // 4 destructuring columns
  const employmentStatusColumns = {
    employment_id,
    job_description,
    start_date,
    end_date,
  };
  // input-comments history _____________________
  // 1 blank columns
  const commentsColumnsBlank = {
    comment_id: "",
    comment_text: "",
    comment_date: "",
    staff_id: staffId,
    staff_name: staffName,
  };
  // 2 input state
  const [inputComments, setInputComments] = useState(commentsColumnsBlank);
  // 3 destructuring input state
  const { comment_id, comment_text, comment_date } = inputComments;
  // 4 destructuring columns
  const commentsColumn = {
    comment_id,
    comment_text,
  };
  // input-residence history _____________________
  // 1 blank columns
  const residenceColumnsBlank = {
    date_entry: "",
    current_status: "",
    previous_stays: "",
  };
  // 2 input state
  const [inputResidence, setInputResidence] = useState(residenceColumnsBlank);
  // 3 destructuring input state
  const { date_entry, current_status, previous_stays } = inputResidence;
  // 4 destructuring columns
  const residenceColumn = {
    date_entry,
    current_status,
    previous_stays,
  };

  // SUBMIT POST FUNCTION
  async function submitPost(tableName, columns, columnsBlank, isProfile) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(columns)
      .single()
      .select();
    // if(isProfile) {userIDForAdding = data.user_id};
    // console.log(userIDForAdding)
    setFetchedDataProfile(columnsBlank);
    fetchDataProfile();
  }
 

  return (
    <div className="page-container">
    
      {/* USERS IN THE DATABASE */}
      {/* <h1>Users currently in database:</h1>
      {fetchedDataProfile.map((input) => (
        <div key={input.id}>
          <hr></hr>
          <span>
            <strong>UserID: </strong>
            {input.user_id}{" "}
          </span>
          <span>
            <strong>Name: </strong> {input.first_name} {input.last_name}
          </span>
        </div>
      ))} */}

      {/* PROFILE INPUTS _________________________________________________________________________________________ */}
      {/* PROFILE - first name */}
      <form className="addsu_form" id="myform">
        <div className="inputcontainer">
          <label
            htmlFor="first_name"
            className="labeltext"
            id="first_name_label"
          >
            First Name:{" "}
          </label>
          <input
            type="text"
            className="inputfield"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            value={first_name}
            required
            // This event handler updates the inputProfile state with the value of the 'first_name' field when it changes
            onChange={(e) =>
              setInputProfile({ ...inputProfile, first_name: e.target.value })
            }
          />
        </div>

        {/* PROFILE - last_name */}
        <div className="inputcontainer">
          <label htmlFor="last_name" id="last_name_label" className="labeltext">
            Last Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Last Name"
            id="last_name"
            className="inputfield"
            name="last_name"
            value={last_name}
            required
            onChange={(e) =>
              setInputProfile({ ...inputProfile, last_name: e.target.value })
            }
          />
        </div>

        {/* PROFILE - age */}
        <div className="inputcontainer">
          <label htmlFor="age" id="age_label" className="labeltext">
            Age:{" "}
          </label>
          <input
            type="number"
            id="age"
            className="inputfield"
            name="age"
            min={18}
            max={120}
            value={age}
            onChange={(e) =>
              setInputProfile({ ...inputProfile, age: e.target.value })
            }
          />
        </div>

        {/* PROFILE - gender */}
        <div className="inputcontainer">
          <label htmlFor="gender" id="gender_label" className="labeltext">
            Gender:{" "}
          </label>
          <input
            placeholder="Gender"
            name="gender"
            id="gender"
            className="inputfield"
            value={gender}
            onChange={(e) =>
              setInputProfile({ ...inputProfile, gender: e.target.value })
            }
          />
        </div>

        {/* PROFILE - dob */}
        <div className="inputcontainer">
          <label htmlFor="dob" className="labeltext" id="dob_label">
            DOB:{" "}
          </label>
          <input
            type="date"
            name="dob"
            // Min max dates are set to prevent users from entering dates that are too far in the past or future
            min={"1900-01-01"}
            max={"2040-12-18"}
            className="inputfield"
            id="dob_input"
            value={dob}
            onChange={(e) =>
              setInputProfile({ ...inputProfile, dob: e.target.value })
            }
          />
        </div>

        {/* PROFILE - ni_number */}
        <div className="inputcontainer">
          <label htmlFor="ni_number" id="ni_number_label" className="labeltext">
            NI Number:{" "}
          </label>
          <input
            placeholder="NI Number"
            value={ni_number}
            type="text"
            className="inputfield"
            id="ni_number"
            //Pattern means NI number must be in the format of 2 letters, 6 numbers, 1 letter (captial letters)
            pattern="[A-Za-z]+\d{6}[A-Za-z]+"
            minLength={9}
            maxLength={9}
            // autoCapitalize="characters"
            onChange={(e) =>
              setInputProfile({ ...inputProfile, ni_number: e.target.value })
            }
          />

        </div>

        {/* PROFILE - phone */}
        <div className="inputcontainer">
          <label htmlFor="phone" id="phone_label" className="labeltext">
            Phone:{" "}
          </label>
          <input
            // the type being tel means that the input will display a number pad on mobile devices
            type="tel"
            maxLength={11}
            // pattern to ensure only 11 numbers are entered
            pattern="[0-9]{11}"
            placeholder="Phone Number"
            id="phone"
            className="inputfield"
            value={phone}
            onChange={(e) =>
              setInputProfile({ ...inputProfile, phone: e.target.value })
            }
          />
        </div>

        {/* PROFILE - email */}
        <div className="inputcontainer">
          <label htmlFor="email" id="email_label" className="labeltext">
            Email:{" "}
          </label>
          <input
            // the type being email means that the input will be validated to ensure it is a valid email address (use of @ symbol)
            type="email"
            placeholder="Email"
            id="email"
            className="inputfield"
            value={email}
            onChange={(e) =>
              setInputProfile({ ...inputProfile, email: e.target.value })
            }
          />
        </div>

        {/* PROFILE - emergency_contact_name */}
        <div className="inputcontainer">
          <label
            htmlFor="emergency_contact_name"
            id="emergency_contact_name_label"
            className="labeltext"
          >
            Emergency Contact Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Emergency Contact Name"
            id="emergency_contact_name"
            className="inputfield"
            value={emergency_contact_name}
            onChange={(e) =>
              setInputProfile({
                ...inputProfile,
                emergency_contact_name: e.target.value,
              })
            }
          />
        </div>

        {/* PROFILE - emergency_contact_relationship  */}
        <div className="inputcontainer">
          <label
            htmlFor="emergency_contact_relationship"
            id="emergency_contact_relationship_label"
            className="labeltext"
          >
            Emergency Contact Relationship:{" "}
          </label>
          <input
            type="text"
            placeholder="Emergency Contact Relationship"
            id="emergency_contact_relationship"
            className="inputfield"
            value={emergency_contact_relationship}
            onChange={(e) =>
              setInputProfile({
                ...inputProfile,
                emergency_contact_relationship: e.target.value,
              })
            }
          />
        </div>

        {/* PROFILE - emergency_contact_phone  */}
        <div className="inputcontainer">
          <label
            htmlFor="emergency_contact_phone"
            id="emergency_contact_phone_label"
            className="labeltext"
          >
            Emergency Contact Phone:{" "}
          </label>
          <input
            type="tel"
            placeholder="Emergency Contact Phone"
            id="emergency_contact_phone"
            className="inputfield"
            maxLength={11}
            pattern="[0-9]{11}"
            value={emergency_contact_phone}
            onChange={(e) =>
              setInputProfile({
                ...inputProfile,
                emergency_contact_phone: e.target.value,
              })
            }
          />
        </div>

        {/* PROFILE - submit button  */}

        <button
          className="submit_button"
          onClick={async function (e) {
            // the e.preventDefault() prevents the page from refreshing when the button is clicked
            e.preventDefault();
            e.target.disabled = true;

            try {
              await submitPost(
                "service_users",
                [profileColumns],
                [profileColumnsBlank],
                true
              );
              //  We are using a package called Toast which has been imported (remember to npm i)
              // The toast title is "Success" and the description is "Service User Successfully Added"
              // The notification will remain on screen for 3 seconds
              // The position is top-left, can style in the style attribute
              toast("Success", {
                className: "submit-toast",
                description: "Service User Successfully Added",
                duration: 3000,
                position: "top-left",
                // onAutoClose: window.location.reload(), //will reload page(after toast disappears)
                style: {
                  background: "#B3F5A3",
                  color: "black",
                  border: "3px solid white",
                },
              });

              // This function will refresh the page after 4 seconds, clearing the input fields
              setTimeout(function () {
                // Refresh the page
                window.location.reload();
              }, 4000); // Adjust the delay time

              //   alert("Service User Successfully Added");
              // displaymessage();
            } catch (error) {
              console.error("Error submitting form:", error);
              // Handle errors if needed
            }
          }}
        >
          + Add Service User
        </button>
      </form>

      {/* NEXT SECTION ||||| */}
      {/* STRENGTHS INPUTS _________________________________________________________________________________________ */}
      {/* const strengthsColumns = {strengths_id, strengths_text_one, strengths_text_two, strengths_text_three}; */}
      {/* STRENGTHS - user_id */}
      {/* <input
                placeholder="user_id"
                value={user_id}
                onChange={e => setInputStrengths({...inputStrengths, user_id: e.target.value})}
                /> */}
      {/* STRENGTHS - strengths_id */}
      {/* <input
                placeholder="strengths_id"
                value={strengths_id}
                onChange={e => setInputStrengths({...inputStrengths, strengths_id: e.target.value})}
                /> */}

      {/* STRENGTHS - strengths_text_one */}
      {/* <input
                placeholder="strengths_text_one"
                value={strengths_text_one}
                onChange={e => setInputStrengths({...inputStrengths, strengths_text_one: e.target.value})}
                /> */}

      {/* STRENGTHS - strengths_text_two */}
      {/* <input
                placeholder="strengths_text_two"
                value={strengths_text_two}
                onChange={e => setInputStrengths({...inputStrengths, strengths_text_two: e.target.value})}
                /> */}
      {/* STRENGTHS - strengths_text_three */}
      {/* <input
                placeholder="strengths_text_three"
                value={strengths_text_three}
                onChange={e => setInputStrengths({...inputStrengths, strengths_text_three: e.target.value})}
                /> */}
      {/* PROFILE - submit button  */}
      {/* <button onClick={function () {submitPost("strengths", [strengthsColumns], [strengthsColumnsBlank], false)}}>Post Strengths</button> */}
    </div>
  );
}
