import BackButton from "./BackButton";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import babyCompStyles from "./editablepair.css";


const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);


export default function EditablePair({data, value, editMode, userID, dataset}) {
  // input- strengths _____________________ 
  // 1 blank columns 
  const strengthsColumnsBlank = {user_id: userID, strengths_text_one:"", strengths_text_two:"", strengths_text_three:""}; 
  // 2 input state 
  const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
  // 3 destructuring input state 
  const {user_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths 
  // 4 destructuring columns 
  const strengthsColumns = {user_id, strengths_text_one, strengths_text_two, strengths_text_three};
  // EDIT FUNCTIONS_________________________
  async function insertData(columns){
    const {data, error} =  await supabase
      .from("strengths")
      .select("*")
      .eq('user_id', userID)
      console.log(data);
      // if there is data, update
      if(data.length >= 1) {
            await supabase
                .from("strengths") 
                .update(columns)
                .eq('user_id', userID)
                console.log("Data already existed, so data will be updated for user:")
                console.log(userID)
                console.log("with data:")
                console.log(inputStrengths)
      }
      else {
        await supabase
        .from("strengths") 
        .insert(columns)
        .eq('user_id', userID)
        console.log("Data did not exist, so data will be inserted")
        console.log(userID)
        console.log("with data:")
        console.log(inputStrengths)

      }


      // insert, if there is no date
    }
    return (
      <div>
    {/* Is edit mode on? */}
      {editMode ? 
        (<div className="flexbox-item-editpair"> <div className="data">{data}<span>:  </span>
        </div> 
        <div className="valueAndUpdater">
          <input placeholder="strengths_text_one" value={inputStrengths.strengths_text_one} onChange={e => setInputStrengths({...inputStrengths, strengths_text_one: e.target.value})}></input>
          <div className="update-button" onClick={function() {insertData(inputStrengths)}}>✔️</div>
        </div>
        </div>
        ):
        (<div className="flexbox-item-editpair">
            <div className="data">{data}<span>:  </span>
            </div>
            <div className="value">{value || "No value provided."}
            </div>
          </div>)}
    </div>
      )
  }

