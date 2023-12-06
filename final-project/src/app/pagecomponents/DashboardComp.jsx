import compStyles from "./dashboard.css";

import Link from "next/link";

export default function DashboardComp() {
  return (
    <>
      <div className="flexbox-container1">
        <p className="flexbox-item flexbox-item1">
          Welcome XXX to your Dashboard
        </p>
      </div>

      <div className="flexbox-container2">
        <div className="flexbox-item flexbox-item2">
          <Link href="/displayallsu">
            <button>View Service User Button</button>
          </Link>
          <Link href="/addsu">
            <button>Add Service User Button</button>
          </Link>
          <Link href="/referrallinks">
            <button>Referral Link Button</button>
          </Link>
          <Link href="./">
            <button>Sign Out Button</button>
          </Link>
        </div>
      </div>
    </>
  );
}
