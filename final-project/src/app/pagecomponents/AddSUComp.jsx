import compStyles from "./addsu.css"
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);
//, last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:""
//, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone

export default function AddSUComp({staffId, staffName}) {
    // FETCH 
    const [fetchedDataProfile, setFetchedDataProfile] = useState([])
    async function fetchDataProfile(){
        const {data} = await supabase
            .from("service_users")
            .select()
            setFetchedDataProfile(data)
    }
    useEffect(()=>{
        fetchDataProfile("service-users")
    }, []);
    // INPUT SETUP ________________________________________________________________
    // let userIDForAdding = ""

    // input- profile _____________________
    // 1 blank columns
    const profileColumnsBlank= {first_name:"", last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:"", su_image:""};
    // 2 input state
    const [inputProfile, setInputProfile] = useState(profileColumnsBlank)
    // 3 destructuring input state
    const {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image} = inputProfile
    // 4 destructuring columns
    const profileColumns = {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image};

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
    async function submitPost(tableName, columns, columnsBlank, isProfile){
        const { data, error } = await supabase
            .from(tableName) 
            .insert(columns)
            .single()
            .select()
        // if(isProfile) {userIDForAdding = data.user_id};
        // console.log(userIDForAdding)
            setFetchedDataProfile(columnsBlank)
            fetchDataProfile();
    }

    return (
        <div className="page-container">
        {/* USERS IN THE DATABASE */}
        <h1>Users currently in database:</h1>
            {
                fetchedDataProfile.map(input =>(
                    <div key= {input.id}>
                        <hr></hr>
                        <span><strong>UserID: </strong>{input.user_id} </span>
                        <span><strong>Name: </strong> {input.first_name} {input.last_name}</span>
                    </div>
                 ))
            }
        {/* PROFILE INPUTS _________________________________________________________________________________________ */}    
            {/* PROFILE - first name */}
            <input
                placeholder="First_name"
                value={first_name}
                onChange={e => setInputProfile({...inputProfile, first_name: e.target.value})}
                />
            {/* PROFILE - last_name */}
            <input
                placeholder="last_name"
                value={last_name}
                onChange={e => setInputProfile({...inputProfile, last_name: e.target.value})}
                />
            {/* PROFILE - age */}
            <input
                placeholder="age"
                value={age}
                onChange={e => setInputProfile({...inputProfile, age: e.target.value})}
                />
                        {/* PROFILE - gender */}
                        <input
                placeholder="gender"
                value={gender}
                onChange={e => setInputProfile({...inputProfile, gender: e.target.value})}
                />
            {/* PROFILE - dob */}
            <input
                placeholder="dob"
                value={dob}
                onChange={e => setInputProfile({...inputProfile, dob: e.target.value})}
                />
            {/* PROFILE - ni_number */}
            <input
                placeholder="ni_number"
                value={ni_number}
                onChange={e => setInputProfile({...inputProfile, ni_number: e.target.value})}
                />
            {/* PROFILE - phone */}
            <input
                placeholder="phone"
                value={phone}
                onChange={e => setInputProfile({...inputProfile, phone: e.target.value})}
                />
            {/* PROFILE - emergency_contact_name */}
            <input
                placeholder="emergency_contact_name"
                value={emergency_contact_name}
                onChange={e => setInputProfile({...inputProfile, emergency_contact_name: e.target.value})}
                />
            {/* PROFILE - emergency_contact_relationship  */}
            <input
                placeholder="emergency_contact_relationship"
                value={emergency_contact_relationship}
                onChange={e => setInputProfile({...inputProfile, emergency_contact_relationship: e.target.value})}
                />
                        {/* PROFILE - su_image */}
                        <input
                placeholder="su_image"
                value={su_image}
                onChange={e => setInputProfile({...inputProfile, su_image: e.target.value})}
                />
            {/* PROFILE - submit button  */}
            <button onClick={function () {submitPost("service_users", [profileColumns], [profileColumnsBlank], true)}}>Post Profile</button>
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
    )
}
