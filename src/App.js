import { useState } from "react";

import Divider from "./components/Divider";
import Form from "./components/Form";
import Results from "./components/Results";

import "./App.css";

function App() {
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const setDayHandler = (e) => {
    setDay(+e.target.value);
  };

  const setMonthHandler = (e) => {
    setMonth(+e.target.value);
  };

  const setYearHandler = (e) => {
    setYear(+e.target.value);
  };

  return (
    <div className="app">
      <div className="calculator">
        <Form
          day={day}
          onSetDay={setDayHandler}
          month={month}
          onSetMonth={setMonthHandler}
          year={year}
          onSetYear={setYearHandler}
        />
        <Divider />
        <Results day={day} month={month} year={year} />
      </div>
    </div>
  );
}

export default App;
