import Image from "next/image";
import Link from "next/link";
import Login from "./components/Login";

export default function Home() {
  return (
    <main>
      <h1>Login Page - Login Component will render below</h1>
      <Login pageName={"Dashboard"}/>
    </main>
  );
}
