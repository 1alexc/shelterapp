import compStyles from "./dashboard.css";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useState, useEffect } from "react";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);


export default function DashboardComp({staffName}) {
console.log(staffName, "hello")
// const [staffName, setStaffName] = useState("Dave");


  // useEffect(() => {
  //   async function fetchStaffName(uuid) {
  //     try {
  //       const { data, error } = await supabase
  //         .from("staff_profile")
  //         .select("first_name")
  //         .eq("user_id", userDetails);

  //       if (error) {
  //         console.error('Error fetching staff user:', error.message);
  //         return null;
  //       }

  //       if (data && data.length > 0) {
  //         setStaffName(data[0].first_name);
  //       }
  //     } catch (error) {
  //       console.error('Unexpected error:', error.message);
  //     }
  //   }

  //   // Fetch data only when userDetails changes (on mount and when userDetails changes)
  //   fetchStaffName(userDetails);
  // }, [userDetails]);

  
  return (
    <>
      <div className="page-container">
        <div className="flexbox-container-w">
          <p className="flexbox-item-w">Welcome {staffName} to your Dashboard</p>
        </div>
        <div className="flexbox-container-links">
          <Link href="/displayallsu" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img" src="/icons8-view-32.png" alt="View Service User Icon" />
              <p className="item-links-text">View Service Users</p>
            </div>
          </Link>
          <Link href="/addsu" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img"  src="icons8-add-male-user-64.png"
                  alt="Add Service User Icon" />
              <p className="item-links-text">Add Service User</p>
            </div>
          </Link>
          <Link href="/referrallinks" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img" src="icons8-referral-24.png"alt="Referral Link Button" />
              <p className="item-links-text">Referral Links</p>
            </div>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <div className="flexbox-item-links-box">
              <img className="item-links-img" src="icons8-sign-out-50.png" alt="Sign out Button" />
              <p className="item-links-text">Sign Out</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
