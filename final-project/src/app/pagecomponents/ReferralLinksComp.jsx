import compStyles from "./referrallinks.css";

import Link from "next/link";

export default function ReferralLinksComp() {
  return (
    <>
        {/* Welcome message */}
        <div className="global-welcome"><strong>Welcome to your Dashboard, </strong>.
          <p>Today's date is </p>
        </div>


        <h1>Referral Links</h1>
        <h2>Health</h2>
        <p><a href="https://www.nhs.uk/">Nhs</a></p>
        <h2>Housing</h2> 
        <p><a href="https://www.gov.uk/housing-association-homes">Housing Association</a></p>
        <h2>Mental Health</h2>
        <p><a href="www.mind.org,uk">MIND</a></p>
    </>
  );
}
