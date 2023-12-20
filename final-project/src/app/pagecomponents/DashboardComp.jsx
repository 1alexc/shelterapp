import compStyles from "./dashboard.css";
// import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { supabase } from "../AuthRouter";

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
  const todayDateString = today.toLocaleDateString();
  function convertDDMMYYYY(dateString) {
    const dateComponents = dateString.split("/");
    const day = dateComponents[0];
    const month = dateComponents[1];
    const year = dateComponents[2];
    
    const ordinalSuffix = getOrdinalSuffix(day);
    const monthName = getMonthName(month);
    
    return `${day}${ordinalSuffix} ${monthName} ${year}`;
  }
  
  function getOrdinalSuffix(day) {
    const suffixes = ["th", "st", "nd", "rd"];
    const lastDigit = day % 10;
    
    if (lastDigit >= 1 && lastDigit <= 3 && day !== 11 && day !== 12 && day !== 13) {
      return suffixes[lastDigit];
    } else {
      return suffixes[0];
    }
  }

  function getMonthName(month) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    return months[parseInt(month) - 1];
  }
  return (
    <>  
    <div className="white-font"> {/* <--- This div affects the whole page */}
    {/* WELCOME BOX */}
    <section className="global-welcome">
        <h1 className="global-heading">Welcome to your dashboard, {staffName}
        </h1>
        <p className="global-description">Today's date is {convertDDMMYYYY(todayDateString)}</p>
      </section>
    {/* CONTENT BOX */}
    <section className="global-content">
        <div className="dash-grid">
          <div className="dash-grid-row-1-top-bar">
          </div>
          <div className="dash-grid-row-2-text-section">Welcome to the Home Horizon Database App, providing Home Shelter staff with practical solutions! We are thrilled to have you on board, as your contribution makes a significant impact in providing support to those in need. This app is designed specifically for Home Horizon, a homeless shelter that relies on dedicated individuals like you to make this amazing service possible.
          </div>

          <div className="dash-grid-row-3-button dash-grid-row-3-button1">
            <Link href="/displayallsu" passHref legacyBehavior>
                <div className="dash-button">
                  <Image src="/dashboard4.png" className="dash-button-image" alt="View or edit database" width="64" height="64" />
                  <h5 className="dash-button-text">View or Edit Database</h5>
                </div>           
              </Link>
          </div>
          <div className="dash-grid-row-3-button dash-grid-row-3-button2">
            <Link href="/addsu" passHref legacyBehavior>
                <div className="dash-button">
                  <Image src="/dashboard3.png" className="dash-button-image" alt="Add new user" width="64" height="64" />
                  <h5 className="dash-button-text">Add New User</h5>
                </div>           
              </Link>
          </div>
          <div className="dash-grid-row-3-button dash-grid-row-3-button3">
            <Link href="/referrallinks" passHref legacyBehavior>
              <div className="dash-button">
                <Image src="/dashboard2.png" className="dash-button-image" alt="Referral links" width="64" height="64" />
                <h5 className="dash-button-text">Referral Links</h5>
              </div>           
            </Link>
          </div>
          <div onClick={signOut} className="dash-grid-row-3-button dash-grid-row-3-button4">
            <Link href="/" passHref legacyBehavior>
              <div className="dash-button">
                <Image src="/dashboard1.png" className="dash-button-image" alt="Referral links" width="64" height="64" />
                <h5 className="dash-button-text">Sign Out</h5>
              </div>           
            </Link>
          </div>
          <div className="dash-grid-row-4">
            <img src={images[currentImage]} alt="Slideshow" className="slideshowimages"/>
          </div>
        </div>
    </section>

    </div>
    </>
  );
}
