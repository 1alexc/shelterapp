import compStyles from "./referrallinks.css";
import Link from "next/link";

export default function ReferralLinksComp() {
  return (
    <>
      {/* WELCOME BOX */}
      <section className="global-welcome">
          <h1 className="global-heading">Referral Links
          </h1>
          <p className="global-description">Click the links below.</p>
        </section>
      {/* CONTENT BOX */}
      <section className="global-content">
        <section className="referrallinks-grid black-font">
        {/* grid-card */}
          <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Housing</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Immigration</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Language support</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Physical health</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Mental wellbeing</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Substance abuse</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Recreation</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Community</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Employment</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Crisis situations</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Sussex local partnerships</p></Link></li>
            </ul>
          </div>

        </section>
      </section>

    </>
  );
}
