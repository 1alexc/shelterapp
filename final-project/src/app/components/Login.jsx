"use client";
// import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { redirect } from 'next/navigation'
import Link from "next/link";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }
  redirect("/dashboard")
}

// } else {
//   return (
//     <>
//     <button
//       onClick={async () => {
//         const {error } = await supabase.auth.signOut();
//         if (error) {
//           console.error(error);
//         }
//       }}
//       >Log Out</button>
//       <Link href="/dashboard">
//         <button>Login Button</button>
//       </Link>
//     </>
//     );