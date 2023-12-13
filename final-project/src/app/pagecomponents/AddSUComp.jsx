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
    const [posts, setPosts] = useState([])
    //singular post variable to store the user input in coloumn
    const [post, setPost] = useState({user_id:"", first_name:""})
    //destructure the coloum from the table
    const {user_id, first_name} = post
    
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
                {user_id, first_name}
            ])
            .single()
            setPost({user_id:"", first_name:""})
            fetchPosts()
    }

    return (
        <div className="AddSUComp">
            <input
                placeholder="User_id"
                value={user_id}
                onChange={e => setPost({...post, user_id: e.target.value})}
                />
            <input
                placeholder="First_name"
                value={first_name}
                onChange={e => setPost({...post, first_name: e.target.value})}
                />
            <button onClick={createPost}>Create Post</button>
            {
                posts.map(post =>(
                    <div key= {post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                 ))
            }
            
           
        </div>
    )
}
