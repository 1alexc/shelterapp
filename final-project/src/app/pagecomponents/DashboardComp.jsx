import compStyles from "./dashboard.css";

import Link from "next/link";

export default function DashboardComp() {
  return (
    <>
      <div className="flexbox-container1">
        <p className="flexbox-item1">
          Welcome XXX to your Dashboard
        </p>
      </div>

      <div className="flexbox-container2">
        <div className="flexbox-item2">
          <div className="button-container">
            <Link href="/displayallsu">
            <button><img src="/icons8-view-32.png" alt="View Service User Icon" />View Service User Button</button>
          </Link>
          </div>
          <div className="button-container">
            <Link href="/addsu">
            <button><img src="icons8-add-male-user-64.png" alt="Add Service User Icon" />Add Service User Button</button>
          </Link>
          </div>
          <div className="button-container">
          <Link href="/referrallinks">
            <button><img src="icons8-referral-24.png" alt="Referral Link Button" />Referral Links</button>
          </Link>
          </div>
          <div className="button-container">
          <Link href="./">
            <button><img src="icons8-sign-out-50.png" alt="Sign out Button" />Sign Out Button</button>
          </Link>
          </div>
        </div>
      </div>
    {/* <div className="flexbox-container">
          <div className="flexbox-item"></div>
          <div className="flexbox-item"></div>
          <div className="flexbox-item"></div>
          <div className="flexbox-item"></div>
    </div}
    </>
  );
}