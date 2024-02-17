import Routing from "./routes";
import Header from "./components/header";
import "./scss/main.scss";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="main-wrapper">
          <Routing />
        </div>
      </main>
    </>
  );
}

export default App;
