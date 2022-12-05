import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Card from "./components/Card/index"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Card />
      </BrowserRouter>
    </div>
  );
}

export default App;
