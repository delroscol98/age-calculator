import { useState } from "react";

import Divider from "./components/Divider";
import Form from "./components/Form";
import Results from "./components/Results";

import "./App.css";

function App() {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
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

  const calculateHandler = () => {
    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year > new Date().getFullYear()
    ) {
      return;
    } else {
      setAge({
        day: Math.abs(new Date().getDate() - day),
        month: Math.abs(new Date().getMonth() - month),
        year: new Date().getFullYear() - 1 - year,
      });
    }
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
        <Divider onSetAge={calculateHandler} />
        <Results age={age} />
      </div>
    </div>
  );
}

export default App;
