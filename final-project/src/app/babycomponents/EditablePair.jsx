import BackButton from "./BackButton";
import babyCompStyles from "./editablepair.css";
import serviceUserContext from "./serviceUserContext";
import { useState } from "react";
import { useContext } from "react";


export default function EditablePair({dataLabel, table, column, editMode, updateContext}) {
    const allData = useContext(serviceUserContext)
    const {
        service_users,
        strengths,
        medical,
        employment_status,
        residence,
        comments,
      } = allData;
    
    // ------- STATE MANAGEMENT FOR INPUTS, UPDATES AND INSERTION ----------------------
    // 
    const strengthsColumnsBlank = {strengths_text_one:"", strengths_text_two:"", strengths_text_three:""}; 
    const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
    const {user_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths 
    const strengthsColumns = {user_id, strengths_text_one, strengths_text_two, strengths_text_three};
    // input- medical _____________________
  // 1 blank columns
  const medicalColumnsBlank = {medical_id: "",
    nhs_number: "",
    mental_health_disclosures: "",
    physical_health_disclosures: "",
    substance_abuse_disclosures: "",
    registered_medical_practice: "",
    blood_type: "",
    allergies: "",
    medications: "",
  };
  // 2 input state
  const [inputMedical, setInputMedical] = useState(medicalColumnsBlank);
  // 3 destructuring input state
  const {
    medical_id,
    nhs_number,
    mental_health_disclosures,
    physical_health_disclosures,
    substance_abuse_disclosures,
    registered_medical_practice,
    blood_type,
    allergies,
    medications,
  } = inputMedical;
  // 4 destructuring columns
  const medicalColumns = {
    medical_id,
    nhs_number,
    mental_health_disclosures,
    physical_health_disclosures,
    substance_abuse_disclosures,
    registered_medical_practice,
    blood_type,
    allergies,
    medications,
  };

  // input-employment history _____________________
  // 1 blank columns
  const employmentStatusColumnsBlank = {
    employment_id: "",
    job_description: "",
    start_date: "",
    end_date: "",
  };
  // 2 input state
  const [inputEmploymentStatus, setInputEmploymentStatus] = useState(
    employmentStatusColumnsBlank
  );
  // 3 destructuring input state
  const { employment_id, job_description, start_date, end_date } =
    inputEmploymentStatus;
  // 4 destructuring columns
  const employmentStatusColumns = {
    employment_id,
    job_description,
    start_date,
    end_date,
  };
// input-comments history _____________________
  // 1 blank columns
  const commentsColumnsBlank = {
    comment_id: "",
    comment_text: "",
    comment_date: "",
    staff_id: "",
    staff_name: "",
  };
  // 2 input state
  const [inputComments, setInputComments] = useState(commentsColumnsBlank);
  // 3 destructuring input state
  const { comment_id, comment_text, comment_date } = inputComments;
  // 4 destructuring columns
  const commentsColumns = {
    comment_id,
    comment_text,
  };
  // input-residence history _____________________
  // 1 blank columns
  const residenceColumnsBlank = {
    date_entry: "",
    current_status: "",
    previous_stays: "",
  };
  // 2 input state
  const [inputResidence, setInputResidence] = useState(residenceColumnsBlank);
  // 3 destructuring input state
  const { date_entry, current_status, previous_stays } = inputResidence;
  // 4 destructuring columns
  const residenceColumns = {
    date_entry,
    current_status,
    previous_stays,
  };
  // input- profile ____________________ 
  // blank columns 
  const profileColumnsBlank= {first_name:"", last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:"", su_image:""}; 
  // 2 input state 
  const [inputProfile, setInputProfile] = useState(profileColumnsBlank) 
  // 3 destructuring input state 
  const {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image} = inputProfile 
  // 4 destructuring columns 
  const profileColumns = {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image};






    // HANDLE CHANGE ON INPUT: (1) UPDATE TEXT (2) UPDATE CONTEXT
    const handleChange= (event) => {
        updateContext(table, column, event.target.value)
        switch (table) {
          case "strengths":
            setInputStrengths(strengthsColumns[column]=event.target.value);
            break;
          case "service_users": //profile
            setInputProfile(profileColumns[column]=event.target.value);
            break;
          case "residence":
            setInputResidence(residenceColumns[column]=event.target.value);
            break;
          case "medical":
            setInputMedical(medicalColumns[column]=event.target.value);
            break;
          case "employment_status":
            setInputEmploymentStatus(employmentStatusColumns[column]=event.target.value);
            break;
          case "comments":
            setInputComments(commentsColumns[column]=event.target.value);
            break;
          default:
            break;
        }
    };

    let inputValue=""; // blank initial input value to ensure global scope

    // SWITCH STATEMENT TO AID GENERALISABILITY OF INPUT BOX 
    switch (table) {
      case "strengths":
        inputValue=inputStrengths[column]
        break;
      case "service_users": //profile
        inputValue=inputProfile[column]
        break;
      case "residence":
        inputValue=inputResidence[column]
        break;
      case "medical":
        inputValue=inputMedical[column]
        break;
      case "employment_status":
        inputValue=inputEmployment_Status[column] 
        break;
      case "comments":
        inputValue=inputComments[column]
        break;
      case "staff_profile":
        inputValue=inputStaff_Profile[column]
        break;
      default:
        break;
    }


  return (
    <div>
    {/* part 1: checking if edit mode is on */}
    {editMode ? 
      (<>
      {/* part 2: the return if edit mode is true - before the " : " */}
        <div className="onesu-flexbox-item-editpair"> <div className="onesu-data">{dataLabel}<span>:  </span>
        </div> 
        <div className="onesu-valueAndUpdater">
            <input 
              placeholder={allData[table][0][column] || "No value provided."}
              value={inputValue} 
              onChange={e => handleChange(e)}
            >
            </input>
        </div>
        </div>
      </>
        
      )
      :
      (<>
      {/* part 3: the return if edit mode is false - after the " : " */}
        <div className="onesu-flexbox-item-editpair">
          <div className="onesu-data">{dataLabel}<span>:  </span>
          </div>
          <div className="onesu-value">{allData[table][0][column] || "No value provided."}
          </div>
        </div>
      </>
      )}
  </div>

  );
}
