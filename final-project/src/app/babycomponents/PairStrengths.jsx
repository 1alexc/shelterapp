import BackButton from "./BackButton";
import babyCompStyles from "./sudatavaluepair.css";
import serviceUserContext from "./serviceUserContext";
import { useState } from "react";
import { useContext } from "react";


export default function PairStrengths({data, value, editMode, updater}) {
    const allData = useContext(serviceUserContext)
    const {
        profile,
        strengths,
        medical,
        employment_status,
        residence,
        comments,
      } = allData;
      console.log(allData.strengths[0].strengths_text_one);
    
    // STATE MANAGEMENT FOR INPUTS, UPDATES AND INSERTION
    const strengthsColumnsBlank = {strengths_text_one:"", strengths_text_two:"", strengths_text_three:""}; 
    const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
    const {user_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths 
    const strengthsColumns = {user_id, strengths_text_one, strengths_text_two, strengths_text_three};

    const handleChange= (event) => {
        setInputStrengths(inputStrengths.strengths_text_one= event.target.value);
        // updater("strengths", "strengths_text_one", event.target.value)
    }


  return (
    <div>
    {/* part 1: checking if edit mode is on */}
    {editMode ? 

      (<>
      {/* part 2: the return if edit mode is true - before the " : " */}
        <div className="flexbox-item-editpair"> <div className="data">{data}<span>:  </span>
        </div> 
        <div className="valueAndUpdater">
            <input 
              placeholder={value} 
              value={inputStrengths.strengths_text_one} 
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
        <div className="flexbox-item-editpair">
          <div className="data">{data}<span>:  </span>
          </div>
          <div className="value">{value || "No value provided."}
          </div>
        </div>
      </>
      )}
  </div>

  );
}
