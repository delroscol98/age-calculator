import "./App.css";
import Divider from "./components/Divider";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <Form />
        <Divider />
        <Results />
      </div>
    </div>
  );
}

export default App;
