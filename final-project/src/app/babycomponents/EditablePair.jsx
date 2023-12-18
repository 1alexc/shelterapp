// IMPORTS
import BackButton from "./BackButton";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import babyCompStyles from "./editablepair.css";

// SUPABASE
const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaurl, supakey);


// COMPONENT
export default function EditablePair({data, score, columnName, editMode, userID }) {
  // STATE MANAGEMENT FOR INPUTS, UPDATES AND INSERTION
  const strengthsColumnsBlank = {user_id: userID, strengths_text_one:"", strengths_text_two:"", strengths_text_three:""}; 
  const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
  const {user_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths 
  const strengthsColumns = {user_id, strengths_text_one, strengths_text_two, strengths_text_three};

  // ONCLICK FUNCTION TO UPDATE/INSERT DATA,
  async function updateOrInsertData(allColumnValues, newValue){
      // part 1: checking to see if data exists
        const {data, error} =  await supabase
          .from("strengths")
          .select("*")
          .eq('user_id', userID)
      
      // part 2: if there is data, run an UPDATE query for a specific input value
          if(data.length >= 1) {await supabase
                    .from("strengths") 
                    .update({[columnName]: newValue})
                    .eq('user_id', userID)
                    console.log(`Data already existed, so data will be updated for user no. "${userID}" with data "${newValue}" for column "${columnName}"`)
          }
        // if there is no data, -> INSERT
        else {await supabase
                    .from("strengths") 
                    .insert(allColumnValues)
                    .eq('user_id', userID)
                    console.log(`Data did not exist , so data will be inserted for user no. "${userID}" with data:`)
                    console.log(inputStrengths)
          }

    }
  // RETURN CODE, CONDITIONAL ON WHETHER THE COMPONENT IS IN EDIT MODE
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
                placeholder={columnName} 
                value={inputStrengths[columnName]} 
                onChange={e => setInputStrengths({...inputStrengths, [columnName]: e.target.value})}>
              </input>
              <div className="update-button" onClick={function() {updateOrInsertData(inputStrengths, inputStrengths[columnName])}}>
                Update✔️
              </div>
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
            <div className="value">{score || "No value provided."}
            </div>
          </div>
        </>
        )}
    </div>

          
      )
  }

