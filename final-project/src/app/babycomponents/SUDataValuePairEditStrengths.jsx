import BackButton from "./BackButton";
import babyCompStyles from "./sudatavaluepair.css";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

// input- strengths _____________________ 
// 1 blank columns 
const strengthsColumnsBlank = {strengths_id:"", user_id:"", strengths_text_one:"", strengths_text_two:"", strengths_text_three:""}; 
// 2 input state 
const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
// 3 destructuring input state 
const {strengths_id, strengths_text_one, strengths_text_two, strengths_text_three} = inputStrengths 
// 4 destructuring columns 
const strengthsColumns = {strengths_id, user_id:{userIDForAdding}, strengths_text_one, strengths_text_two, strengths_text_three};


export default function SUDataValuePair({data, value, editMode, columnName}) {
  // EDIT FUNCTIONS
   async function insertData(tableName, columns, columnsBlank){
    const { data, error } = await supabase
        .from(tableName) 
        .insert(columns)
        .single()
        .select()
        setFetchedDataProfile(columnsBlank)
        fetchDataProfile();
}


  return (
    // PLAIN TEXT VALUES
    if (editMode==false) {
      <div className="flexbox-item-keyvaluepair">
        <div className="data">{data}
          <span>:  </span>
        </div>
        <div className="value">{value}</div>
    </div>
    }
    else {
  {/* STRENGTHS - strengths_id */}
  <input
  placeholder="strengths_id"
  value={strengths_id}
  onChange={e => setInputStrengths({...inputStrengths, strengths_id: e.target.value})}
  />

{/* STRENGTHS - strengths_text_one */}
<input
  placeholder="strengths_text_one"
  value={strengths_text_one}
  onChange={e => setInputStrengths({...inputStrengths, strengths_text_one: e.target.value})}
  />

{/* STRENGTHS - strengths_text_two */}
<input
  placeholder="strengths_text_two"
  value={strengths_text_two}
  onChange={e => setInputStrengths({...inputStrengths, strengths_text_two: e.target.value})}
  />
{/* STRENGTHS - strengths_text_three */}
<input
  placeholder="strengths_text_three"
  value={strengths_text_three}
  onChange={e => setInputStrengths({...inputStrengths, strengths_text_three: e.target.value})}
  />
{/* PROFILE - submit button  */}
<button onClick={function () {submitPost("strengths", [strengthsColumns], [strengthsColumnsBlank], false)}}>Post Strengths</button>



// INPUT BOXES



  );
}
