export default function SuDisplay({ user_id, first_name, last_name }) {
  return (
    <>
      <h2>
        {first_name} {last_name}
      </h2>
      <p>{user_id}</p>
      <p>hello</p>
    </>
  );
}
