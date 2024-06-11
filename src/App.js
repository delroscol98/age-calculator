import "./App.css";
import Divider from "./components/Divider";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <Form />
        <Divider />
        <div className="results">RESULTS</div>
      </div>
    </div>
  );
}

export default App;
