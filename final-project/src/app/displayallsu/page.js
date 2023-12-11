"use client";
//must use client for useffect and usestate. this means data is fetched client-side on this page.

import AuthRouter from "../AuthRouter.jsx";

export default function ViewAllSUs() {
  return (
    <>
      <AuthRouter pageName={"displayallsu"} />
    </>
  );
}
