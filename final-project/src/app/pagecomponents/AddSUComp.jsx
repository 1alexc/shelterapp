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



export default function AddSUComp() {
    // post array that will handle the post return from the superbase api
    const [retrievedData, setRetrievedData] = useState(["hi", "hi"])
    //singular post variable to store the user input in coloumn
    const [text, setText] = useState({user_id:"", first_name:""})
    //destructure the coloum from the table
    const {user_id, first_name} = text
    
    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData(){
        const {data} = await supabase
            .from("dummy")
            .select()
        setRetrievedData(data);
        console.log("hi");
        console.log(typeof retrievedData);
        console.log(retrievedData);

        
    }
    
    async function createPost(){
        await supabase
            .from("dummy")
            .insert([
                {user_id, first_name}
            ])
            .single()
            setRetrievedData([{user_id:"", first_name:""}])
            fetchData()
    }

    return (
        <div className="AddSUComp">
            <input
                placeholder="User_id"
                value={user_id}
                onChange={e => setText({...text, user_id: e.target.value})}
                />
            <input
                placeholder="First_name"
                value={first_name}
                onChange={e => setText({...text, first_name: e.target.value})}
                />
            <button onClick={createPost}>Create Post</button>
            {retrievedData.map((placeholder) => (
                    <div key={placeholder.id}>
                        <h3>{placeholder.user_id}</h3>
                        <p>{placeholder.first_name}</p>
                    </div>   
            ))}
            
           
        </div>
    )
}
