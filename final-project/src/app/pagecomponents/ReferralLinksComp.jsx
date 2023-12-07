import compStyles from "./referrallinks.css";

import Link from "next/link";

export default function ReferralLinksComp() {
  return (
    <>
    <div className="page-container">
    {/* WELCOME BOX */}
        <div className="flexbox-container-w">
            <div className="flexbox-item-image">image</div>
            <div className="flexbox-item-serviceusername">Welcome to William Brown's profile</div>
        </div>
    {/* NEXT BOX */}
        <div className="flexbox-container-info">
            <div className="flexbox-item-title">Basic Information</div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">First Name:</div>
                <div className="value">William</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Last Name:</div>
                <div className="value">Brown</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Age:</div>
                <div className="value">35</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Gender:</div>
                <div className="value">Male</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">DOB:</div>
                <div className="value">1987-12-05</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">NI Number:</div>
                <div className="value">IJ678901E</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Phone Number:</div>
                <div className="value">07654321098</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Email:</div>
                <div className="value">william.b@example.com</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Emergency Contact Name:</div>
                <div className="value">Olivia Brown</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Emergency Contact Relationship:</div>
                <div className="value">Aunt</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">Emergency Contact Phone Number:</div>
                <div className="value">07654321098</div>
            </div>
            
        </div>
    {/* NEXT BOX */}
        <div className="flexbox-container-info">
            <div className="flexbox-item-title">Accomodation info</div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">age</div>
                <div className="value">27</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">key</div>
                <div className="value">value</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">key</div>
                <div className="value">value</div>
            </div>
            <div className="flexbox-item-keyvaluepair">
                <div className="key">key</div>
                <div className="value">value</div>
            </div>
        </div>
    </div>


      <div className="page-container">
        <div className="flexbox-container-w">
          <p className="flexbox-item-w">Welcome XXX to your Dashboard</p>
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
