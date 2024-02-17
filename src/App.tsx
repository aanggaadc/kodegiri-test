import Routing from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";
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

      <Footer />
    </>
  );
}

export default App;
