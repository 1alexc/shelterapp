import compStyles from "./dashboard.css";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);


export default function DashboardComp({staffName}) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg', 'slide6.jpg', 'slide7.jpg'];
  

  async function signOut() {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString();


  
  return (
    <> <div className="dash-master">
        {/* Welcome message */}
        <div className="dash-welcome"><strong>Welcome to your Dashboard, {staffName}</strong>!
          <p>Today's date is {formattedDate}</p>
        </div>
        {/* Content section */}
        <div className="dash-grid-content-box">
          <div className="dash-grid-row-1-top-bar">
          </div>
          <div className="dash-grid-row-2-text-section">Welcome to the Home Horizon Database App, providing Home Shelter staff with practical solutions! We are thrilled to have you on board, as your contribution makes a significant impact in providing support to those in need. This app is designed specifically for Home Horizon, a homeless shelter that relies on dedicated individuals like you to make this amazing service possible.
          </div>

          <div className="dash-grid-row-3-button dash-grid-row-3-button1">
            <Link href="/displayallsu" passHref legacyBehavior>
                <div className="dash-button">
                  <Image src="/icons8-referral-24.png" className="dash-button-image" alt="View or edit database" width="64" height="64" />
                  <h5 className="dash-button-text">View or Edit database</h5>
                </div>           
              </Link>
          </div>
          <div className="dash-grid-row-3-button dash-grid-row-3-button2">
            <Link href="/addsu" passHref legacyBehavior>
                <div className="dash-button">
                  <Image src="/icons8-referral-24.png" className="dash-button-image" alt="Add new user" width="64" height="64" />
                  <h5 className="dash-button-text">Add new user</h5>
                </div>           
              </Link>
          </div>
          <div className="dash-grid-row-3-button dash-grid-row-3-button3">
            <Link href="/referrallinks" passHref legacyBehavior>
              <div className="dash-button">
                <Image src="/icons8-referral-24.png" className="dash-button-image" alt="Referral links" width="64" height="64" />
                <h5 className="dash-button-text">Referral Links</h5>
              </div>           
            </Link>
          </div>
          <div onClick={signOut} className="dash-grid-row-3-button dash-grid-row-3-button4">
            <Link href="/referrallinks" passHref legacyBehavior>
              <div className="dash-button">
                <Image src="/icons8-referral-24.png" className="dash-button-image" alt="Referral links" width="64" height="64" />
                <h5 className="dash-button-text">Sign out</h5>
              </div>           
            </Link>
          </div>
          <div className="dash-grid-row-4">
            <img src={images[currentImage]} alt="Slideshow" className="slideshowimages"/>
          </div>
        </div>
    </div>
    </>
  );
}
