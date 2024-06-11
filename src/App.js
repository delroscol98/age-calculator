import "./App.css";
import Form from "./form/Form";

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <Form />
      </div>
      <div className="divider">DIVIDER</div>
      <div className="results">RESULTS</div>
    </div>
  );
}

export default App;
