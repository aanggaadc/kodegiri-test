import { Provider } from "react-redux";
import Routing from "./routes";
import store from "./redux/store";
import Header from "./components/header";
import Footer from "./components/footer";
import "./scss/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <main>
        <Routing />
      </main>

      <Footer />
    </Provider>
  );
}

export default App;
