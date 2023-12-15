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
    // const [fetchedDataProfile, setFetchedDataProfile] = useState([])
    // async function fetchDataProfile(){
    //     const {data} = await supabase
    //         .from("service_users")
    //         .select()
    //         setFetchedDataProfile(data)
    // }
    // useEffect(()=>{
    //     fetchDataProfile("service-users")
    // }, []);
    // INPUT SETUP ________________________________________________________________
    // input- profile _____________________
    // 1 blank columns
    const profileColumnsBlank= {first_name:"", last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:"", su_image:""};
    // 2 input state
    const [inputProfile, setInputProfile] = useState(profileColumnsBlank)
    // 3 destructuring input state
    const {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image} = inputProfile
    // 4 destructuring columns
    const profileColumns = {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image};

    // SUBMIT POST FUNCTION
    async function submitPost(tableName, columns, columnsBlank, isProfile){
        const { data, error } = await supabase
            .from(tableName) 
            .insert(columns)
            .single()
            .select()
            setFetchedDataProfile(columnsBlank)
            fetchDataProfile();
    }

    return (
        <div className="page-container">
        {/* USERS IN THE DATABASE */}
            {/* {
                fetchedDataProfile.map(input =>(
                    <div key= {input.id}>
                        <hr></hr>
                        <span><strong>UserID: </strong>{input.user_id} </span>
                        <span><strong>Name: </strong> {input.first_name} {input.last_name}</span>
                    </div>
                 ))
            } */}
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
        </div>
    )
}
