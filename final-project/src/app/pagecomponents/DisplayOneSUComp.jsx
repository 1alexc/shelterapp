/* File explanation
      1) DISPLAY ONE SU COMPONENT
      - Takes in a prop {allFetchedDataAboutSpecificSU}...
      - ... This prop has been passed from the page.js file -> auth router -> this component.
      - ... The reason for this is that fetching using an async function and await does NOT work in a jsx file.
      - We immediately destructure {allFetchedDataAboutSpecificSU} into its sub-objects, simply to make the references below shorter
      - ... e.g. "profile[0].first_name", instead of "allFetchedDataAboutSpecificSU.profile[0].first_name"
______________________________________________________________________________________________________________________________*/

// IMPORTS ------------------------------------------------------------------
import compStyles from "./displayonesu.css"
import Link from "next/link";
import Image from "next/image.js";
import SUDataValuePair from "../babycomponents/SUDataValuePair";

// DISPLAY ONE SU COMPONENT ------------------------------------------------------------------
export default function DisplayOneSUComp({ allFetchedDataAboutSpecificSU }) {
    const {
        profile,
        strengths,
        medical,
        employment_status,
        residence,
        comments,
      } = allFetchedDataAboutSpecificSU;
    return (
        <>
            <div className="page-container">
                {/* WELCOME BOX */}
                <div className="flexbox-container-w">
                  <div className="flexbox-item-image">
                    <Image className="SU-pic" src="/William_Brown.png" alt="William Brown" width="100" height="100" />
                  </div>
                  <div className="flexbox-item-serviceusername">
                    Welcome to {profile[0].first_name}'s profile
                  </div>
                </div>

                {/* NEXT BOX */}
                <div className="flexbox-container-info">
                  <div className="flexbox-item-title">Basic Information</div>
                  <SUDataValuePair data={"text"} value={"answer"} />
                  <SUDataValuePair data={"First name"} value={profile[0].first_name} />
                  <SUDataValuePair data={"Last name"} value={profile[0].last_name} />
                  <SUDataValuePair data={"Age"} value={profile[0].age} />
                  <SUDataValuePair data={"Gender"} value={profile[0].gender} />
                  <SUDataValuePair data={"DOB"} value={profile[0].dob} />
                  <SUDataValuePair data={"NI Number"} value={profile[0].ni_number} />
                  <SUDataValuePair data={"Phone Number"} value={profile[0].phone} />
                  <SUDataValuePair data={"Email"} value={"william.b@example.com"} />
                  <SUDataValuePair data={"Emergency Contact Name"} value={"Olivia Brown"} />
                  <SUDataValuePair data={"Emergency Contact Relationship"} value={"Aunt"} />
                  <SUDataValuePair data={"Emergency Contact Phone Number"} value={"07654321098"} />
                </div>
            

                {/* NEXT BOX */}
                <div className="flexbox-container-info">
                  <div className="flexbox-item-title">Strengths</div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Strengths One:</div>
                    <div className="value">
                      {strengths[0].strengths_text_one}
                    </div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Strength Two:</div>
                    <div className="value">
                      {strengths[0].strengths_text_two}
                    </div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Strength Three:</div>
                    <div className="value">
                    {strengths[0].strengths_text_three}
                    </div>
                  </div>
                </div>

                {/* NEXT BOX */}
                <div className="flexbox-container-info">
                  <div className="flexbox-item-title">Medical</div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">NHS Number:</div>
                    <div className="value">{medical[0].nhs_number}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Mental Health Disclosures:</div>
                    <div className="value">{medical[0].mental_health_disclosures}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Physical Health Disclosure:</div>
                    <div className="value">{medical[0].physical_health_disclosures}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Substance Abuse Disclosures:</div>
                    <div className="value">{medical[0].substance_abuse_disclosures}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Registered Medical Practitioner:</div>
                    <div className="value">{medical[0].registered_medical_practice}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Blood Type:</div>
                    <div className="value">{medical[0].blood_type}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Allergies</div>
                    <div className="value">{medical[0].allergies}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Medications</div>
                    <div className="value">{medical[0].medications}</div>
                  </div>
                </div>
                {/* NEXT BOX */}
                <div className="flexbox-container-info">
                  <div className="flexbox-item-title">Employment History</div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Job Description:</div>
                    <div className="value"> {employment_status[0].job_description}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Start Date:</div>
                    <div className="value">{employment_status[0].start_date}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">End Date:</div>
                    <div className="value">{employment_status[0].end_date}</div>
                  </div>
                </div>
                {/* NEXT BOX */}
                <div className="flexbox-container-info">
                  <div className="flexbox-item-title">Comments</div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Comment text:</div>
                    <div className="value">{comments[0].comment_text}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Date issued:</div>
                    <div className="value">{comments[0].comment_date}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Staff member:</div>
                    <div className="value">{comments[0].staff_id}</div>
                  </div>
                </div>
                {/* NEXT BOX */}
                <div className="flexbox-container-info">
                  <div className="flexbox-item-title">Residence</div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Entry Date:</div>
                    <div className="value">{residence[0].date_entry}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Current Status:</div>
                    <div className="value">{residence[0].current_status}</div>
                  </div>
                  <div className="flexbox-item-keyvaluepair">
                    <div className="key">Previous Stays:</div>
                    <div className="value">{residence[0].previous_stays}</div>
                  </div>
                </div>
              </div>
              <Link href="/editsu">
                <button>Edit Service User Button</button>
              </Link>
        </>
    )}
