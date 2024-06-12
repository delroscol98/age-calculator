import { useState } from "react";

import Divider from "./components/Divider";
import Form from "./components/Form";
import Results from "./components/Results";

import "./App.css";

function App() {
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [age, setAge] = useState({ day, month, year });

  const setDayHandler = (e) => {
    setDay(+e.target.value);
  };

  const setMonthHandler = (e) => {
    setMonth(+e.target.value);
  };

  const setYearHandler = (e) => {
    setYear(+e.target.value);
  };

  const setAgeHandler = () => {
    setAge({
      day: Math.abs(new Date().getDate() - day),
      month: Math.abs(new Date().getMonth() - month),
      year: new Date().getFullYear() - 1 - year,
    });
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
        <Divider onSetAge={setAgeHandler} />
        <Results age={age} />
      </div>
    </div>
  );
}

export default App;
