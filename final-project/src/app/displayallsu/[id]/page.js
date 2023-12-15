/* File explanation
      1) GENERATE STATIC PARAMS pre-renders the file routes (displaysu.../1, /2, /3 etc)
      - It also returns the id of the route selected as {params.id}.
      - You need to restart the server if you make changes to this function.
      2) FETCH SPECIFIC SU DATA FROM SUPABASE queries the database to return info from all tables about a specific service user.
      3) AUTH ROUTER WITH PROPS passes a request for the displayOneSu component AND all the fetched data about a specific service user.
      - {params} relates to the dynamic routing.
______________________________________________________________________________________________________________________________*/

// IMPORTS ------------------------------------------------------------------
import AuthRouter from "../../AuthRouter.jsx";
import { fetchSpecificSUDataFromSupabase } from "../helper.js";
import { generateStaticParams } from "../helper.js";

generateStaticParams();

// AUTHROUTER WITH PROPS -----------------------------------------------------
export default async function DisplayOneSU({ params }) {
  const id = params.id;
  const allFetchedDataAboutSpecificSU = await fetchSpecificSUDataFromSupabase(
    id
  );

  return (
    <>
      <AuthRouter
        pageName={"displayonesu"}
        allFetchedDataAboutSpecificSU={allFetchedDataAboutSpecificSU}
      />
    </>
  );
}
