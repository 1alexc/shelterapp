"use client";
// import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { redirect } from "next/navigation";
import Header from "./babycomponents/Header";

// components
import DashboardComp from "./pagecomponents/DashboardComp";
import DisplayAllSUComp from "./pagecomponents/DisplayAllSUComp";
import DisplayOneSUComp from "./pagecomponents/DisplayOneSUComp";
import AddSUComp from "./pagecomponents/AddSUComp";
import EditSUComp from "./pagecomponents/EditSUComp";
import ReferralLinksComp from "./pagecomponents/ReferralLinksComp";
import LogoForLogin from "./babycomponents/LogoForLogin";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default function AuthRouter({
  pageName,
  allFetchedDataAboutSpecificSU,
}) {
  
  const [session, setSession] = useState(null);
  const [staffName, setStaffName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);

        const userDetails = session.user.id;

        try {
          const { data, error } = await supabase
            .from("staff_profile")
            .select("first_name")
            .eq("user_id", userDetails);

          if (error) {
            console.error("Error fetching staff user:", error.message);
            return;
          }

          if (data && data.length > 0) {
            const staffName = data[0].first_name;
            setStaffName(staffName);
            console.log(staffName); // Log the fetched name
          }
        } catch (error) {
          console.error("Unexpected error:", error.message);
        }
      } catch (error) {
        console.error("Error getting session:", error.message);
      }
    };

    fetchData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <>
      <LogoForLogin></LogoForLogin>
      <Auth supabaseClient={supabase} appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#7b76c4",
                  brandAccent: "darkblue",
                },
              },
            },
            style: {
              label: {color: 'white', fontWeight:'bold'},
              button: {boxShadow: '2px 2px white'}
            }
          }} providers={[]} showLinks={false}/>
    </>
  }
  // redirector
  
  switch (pageName) {
    case "dashboard":
      return <> 
      <Header staffName={staffName} />
      <DashboardComp staffName={staffName} />
        </>
    case "displayallsu":
      return <>
      <Header staffName={staffName} />
      <DisplayAllSUComp />
      </>
    case "displayonesu":
      return (<>
      <Header staffName={staffName} />
        <DisplayOneSUComp
          allFetchedDataAboutSpecificSU={allFetchedDataAboutSpecificSU}
        /></>
      )
    case "editsu":
      return <>
      <Header staffName={staffName} />
      <EditSUComp />
      </>
    case "addsu":
      return <>
      <Header staffName={staffName} />
      <AddSUComp />
      </>
    case "referrallinks":
      return <>
      <Header staffName={staffName} />
      <ReferralLinksComp />
      </>
    default:
      return <div>page Name passed to login as a prop wasnt matched</div>
  }
}
