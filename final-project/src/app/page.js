import AuthRouter from "./AuthRouter";

export default function Home() {
  return (
    <main>
      <AuthRouter pageName={"dashboard"} />
    </main>
  );
}
