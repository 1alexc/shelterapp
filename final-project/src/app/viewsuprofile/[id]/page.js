import Link from "next/link";

import { createClient } from "@supabase/supabase-js";
import SuDisplay from "@/app/components/Sudisplay.js";

const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//uses the supabase client to connect to supabase
const supabase = createClient(supaurl, supakey);

export async function generateStaticParams() {
  const res = await supabase.from("service_users").select("*");
  const data = res;

  return data.data.map((suProfile) => ({
    user_id: suProfile.user_id.toString(),
  }));
}

async function getSuProfile() {
  const res = await supabase.from("service_users").select("*");
  const data = res;

  return data.data;
}

export default async function ViewSUProfile(user_id) {
  const suProfiles = await getSuProfile();
  console.log("su profile", suProfiles);
  const id = user_id;
  return (
    <main>
      <BackButton />
      <h1>View SU Profile</h1>
      {suProfiles &&
        suProfiles.map(({ user_id, first_name, last_name }) => (
          <SuDisplay
            key={user_id}
            first_name={first_name}
            last_name={last_name}
            id={id}
          />
        ))}
      <Link href="/editsu">
        <button>Edit Service User Button</button>
      </Link>
    </main>
  );
}
