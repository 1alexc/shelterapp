"use client";
// import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { redirect } from 'next/navigation'
import Link from "next/link";

// components
import DashboardComp from "./pagecomponents/DashboardComp";
import DisplayAllSUComp from "./pagecomponents/DisplayAllSUComp";
import DisplayOneSUComp from "./pagecomponents/DisplayOneSUComp";
import AddSUComp from "./pagecomponents/AddSUComp";
import EditSUComp from './pagecomponents/EditSUComp'
import ReferralLinksComp from "./pagecomponents/ReferralLinksComp";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default function AuthRouter({pageName, allFetchedDataAboutSpecificSU}) {
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
  // redirector
  switch (pageName) {
    case 'dashboard':
      return <DashboardComp />;
    case 'displayallsu':
      return <DisplayAllSUComp />;
    case 'displayonesu':
      return <DisplayOneSUComp allFetchedDataAboutSpecificSU={allFetchedDataAboutSpecificSU} />;
    case 'editsu':
      return <EditSUComp />;
    case 'addsu':
      return <AddSUComp />;
    case 'referrallinks':
      return <ReferralLinksComp />;
    default:
      return <div>page Name passed to login as a prop wasnt matched</div>;
  }
}
