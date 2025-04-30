export default function TodoContainer({ children }) {
  return (
    <>
      <h1>This is your Todo Apps!</h1>
      {children}
      <footer>
        <p>&#169; Made by people</p>
      </footer>
    </>
  );
}
