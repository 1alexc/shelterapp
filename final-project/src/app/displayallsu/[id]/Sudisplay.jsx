//because generatestaticparams was used in the parent component, you will probably need to restart the server for the display to update any changes made here. 

export default function SuDisplay({ first_name, last_name, age, gender, dob, ni_number, phone, email, emergency_contact_name, emergency_contact_relationship, emergency_contact_phone, strengths_text_one }) {
    return (
      <>
        <h2>
          {first_name} {last_name}
        </h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>DOB: {dob}</p>
        <p>NI number: {ni_number}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Emergency Contact Name: {emergency_contact_name}</p>
        <p>Emergency Contact Relationship: {emergency_contact_relationship} </p>
        <p>Emergency Contact Phone: {emergency_contact_phone} </p>
        <p>Strenghts one:{strengths_text_one}</p>
      </>
    );
  }
  