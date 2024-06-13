import { useState } from "react";

import Form from "./components/Form";
import Results from "./components/Results";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [age, setAge] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const ageOutput = {};
    if (!formData.day.trim() || +formData.day < 1 || +formData.day > 31) {
      validationErrors.day = "Must be a valid day";
    } else {
      ageOutput.day = Math.abs(new Date().getDate() - +formData.day);
    }

    if (!formData.month.trim() || formData.month < 1 || formData.month > 12) {
      validationErrors.month = "Must be a valid month";
    } else {
      ageOutput.month = Math.abs(new Date().getMonth() - +formData.month + 1);
    }

    if (!formData.year.trim() || formData.year > new Date().getFullYear()) {
      validationErrors.year = "Must be in the past";
    } else {
      ageOutput.year = new Date().getFullYear() - +formData.year;
    }

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      setAge({
        day: "--",
        month: "--",
        year: "--",
      });
    } else {
      setErrors({});
      setAge(ageOutput);
    }
  };

  return (
    <section className="app">
      <section className="calculator">
        <Form
          onChange={handleChange}
          onSubmit={submitHandler}
          errors={errors}
        />
        <Results age={age} errors={errors} />
      </section>
    </section>
  );
}

export default App;
