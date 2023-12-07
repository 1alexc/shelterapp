import compStyles from "./referrallinks.css";

import Link from "next/link";

export default function ReferralLinksComp() {
  return (
    <>
      <div className="page-container">
        {/* WELCOME BOX */}
        <div className="flexbox-container-w">
          <div className="flexbox-item-image">image</div>
          <div className="flexbox-item-serviceusername">
            Welcome to William Brown's profile
          </div>
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
          <div className="flexbox-item-title">Strengths</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Strengths One:</div>
            <div className="value">
              William is really good at communicating with others. He enjoys
              talking to customers and greeting other staff members.
            </div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Strength Two:</div>
            <div className="value">
              Singing. William is a keen rapper in his spare time.
            </div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Strength Three:</div>
            <div className="value">
              Cooking. William enjoys making delicious home made bread.
            </div>
          </div>
        </div>

        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Medical</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">NHS Number:</div>
            <div className="value">88901323</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Mental Health Disclosures:</div>
            <div className="value">None</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Physical Health Disclosure:</div>
            <div className="value">None</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Substance Abuse Disclosures:</div>
            <div className="value">None</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Registered Medical Practice:</div>
            <div className="value">Cherry Tree Practice, London</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Blood Type:</div>
            <div className="value">A+</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Allergies</div>
            <div className="value">None</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Medications</div>
            <div className="value">None.</div>
          </div>
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Employment History</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Job Description:</div>
            <div className="value">Dog Walker</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Start Date:</div>
            <div className="value">2010-09-11</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">End Date:</div>
            <div className="value">2010-10-11</div>
          </div>
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Notes</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">2023-12-07:</div>
            <div className="value">Note One: Enter the shelter</div>
          </div>
        </div>
        {/* NEXT BOX */}
        <div className="flexbox-container-info">
          <div className="flexbox-item-title">Residence</div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Entry Date:</div>
            <div className="value">2023-12-07</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Current Status:</div>
            <div className="value">True</div>
          </div>
          <div className="flexbox-item-keyvaluepair">
            <div className="key">Previous Stays:</div>
            <div className="value">4</div>
          </div>
        </div>
      </div>
    </>
  );
}
