import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Card from "./components/Card/index";
import FormAddTask from "./components/FormAddTask";
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
