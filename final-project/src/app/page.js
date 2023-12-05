import Image from "next/image";
import Link from "next/link";
import Login from "./components/Login";

export default function Home() {
  return (
    <main>
      <h1>Login Page</h1>
      <Login />
      <Link href="/dashboard">
        <button>Login Button</button>
      </Link>
    </main>
  );
}
