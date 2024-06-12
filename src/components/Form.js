import "./Form.css";

const Form = ({ day, onSetDay, month, onSetMonth, year, onSetYear }) => {
  return (
    <form className="form">
      <div className={`form__box ${day > 31 || day < 1 ? "invalid" : ""}`}>
        <label className="form__label font-bold heading-sm" htmlFor="day">
          DAY
        </label>
        <input
          className="form__input heading-md"
          type="text"
          id="day"
          placeholder="DD"
          value={day}
          onChange={onSetDay}
        />
        {day > 31 ||
          (day < 1 && (
            <p className="form__error-msg ff-body">
              <em>Must be a valid day</em>
            </p>
          ))}
      </div>
      <div className={`form__box ${month > 12 || month < 1 ? "invalid" : ""}`}>
        <label className="form__label font-bold heading-sm" htmlFor="month">
          MONTH
        </label>
        <input
          className="form__input heading-md"
          type="text"
          id="month"
          placeholder="MM"
          value={month}
          onChange={onSetMonth}
        />
        {(month > 12 || month < 1) && (
          <p className="form__error-msg ff-body">
            <em>Must be a valid month</em>
          </p>
        )}
      </div>
      <div
        className={`form__box ${
          year > new Date().getFullYear() ? "invalid" : ""
        }`}
      >
        <label className="form__label font-bold heading-sm" htmlFor="year">
          YEAR
        </label>
        <input
          className="form__input heading-md"
          type="text"
          id="year"
          placeholder="YYYY"
          value={year}
          onChange={onSetYear}
        />
        {year > new Date().getFullYear() && (
          <p className="form__error-msg ff-body">
            <em>Must be a in the past</em>
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
