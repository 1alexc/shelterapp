import compStyles from "./addsu.css"
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

export default function AddSUComp() {
    // post array that will handle the post return from the superbase api
    const [posts, setPosts] = useState([])
    //singular post variable to store the user input in coloumn
    const [post, setPost] = useState({user_id:"", first_name:"", last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:""})
    //destructure the coloum from the table
    const {user_id, first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone} = post
    
    useEffect(()=>{
        fetchPosts()
    }, [])

    async function fetchPosts(){
        const {data} = await supabase
            .from("tablename")
            .select()
        setPosts(data)
    }
    
    async function createPost(){
        await supabase
            .from("tablename")
            .insert([
                {user_id, first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone}
            ])
            .single()
            setPost({user_id:"", first_name:"", last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:""})
            fetchPosts()
    }

    return (
        <div>
            <h1 className="add-title">hi from the add su component</h1>
        </div>
    )
}
