import AuthRouter from "./AuthRouter";

export default function Home() {
  return (
    <main>
      <h1>Login Page - Login Component will render below</h1>
      <AuthRouter pageName={"dashboard"}/>
    </main>
  );
}
