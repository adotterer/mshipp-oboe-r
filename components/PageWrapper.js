import NavBar from "./NavBar";
export default function PageWrapper({ children }) {
  return (
    <div>
      <div id="div__header">
        <h1>Matthew Shipp</h1>
        <div className="oboe__img"></div>
      </div>
      <NavBar />
      {children}
    </div>
  );
}
