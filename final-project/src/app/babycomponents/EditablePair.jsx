import BackButton from "./BackButton";
import babyCompStyles from "./editablepair.css";
import serviceUserContext from "./serviceUserContext";
import { useState } from "react";
import { useContext } from "react";


export default function EditablePair({data, table, column, editMode, updater}) {
    const allData = useContext(serviceUserContext)
    const {
        profile,
        strengths,
        medical,
        employment_status,
        residence,
        comments,
      } = allData;
    
    // STATE MANAGEMENT FOR INPUTS, UPDATES AND INSERTION
    const strengthsColumnsBlank = {strengths_text_one:"", strengths_text_two:"", strengths_text_three:""}; 
    const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
    const {user_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths 
    const strengthsColumns = {user_id, strengths_text_one, strengths_text_two, strengths_text_three};

    const handleChange= (event) => {
        updater(table, column, event.target.value)
        setInputStrengths(strengthsColumns.strengths_text_one=event.target.value);
    };

    let inputValue="";




    // SWITCH STATEMENT TO AID GENERALISABILITY OF INPUT BOX 
    switch (table) {
      case "strengths":
        inputValue=inputStrengths[column]
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
        <div className="onesu-flexbox-item-editpair"> <div className="onesu-data">{data}<span>:  </span>
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
          <div className="onesu-data">{data}<span>:  </span>
          </div>
          <div className="onesu-value">{allData[table][0][column] || "No value provided."}
          </div>
        </div>
      </>
      )}
  </div>

  );
}
