import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
