import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="form__box">
        <label className="form__label font-bold heading-sm error" htmlFor="day">
          DAY
        </label>
        <input
          className="form__input heading-md"
          type="number"
          id="day"
          placeholder="DD"
        />
        <p className="form__error-msg ff-body error">
          <em>Must be a valid day</em>
        </p>
      </div>
      <div className="form__box">
        <label className="form__label font-bold heading-sm" htmlFor="month">
          MONTH
        </label>
        <input
          className="form__input heading-md"
          type="number"
          id="month"
          placeholder="MM"
        />
      </div>
      <div className="form__box">
        <label className="form__label font-bold heading-sm" htmlFor="year">
          YEAR
        </label>
        <input
          className="form__input heading-md"
          type="number"
          id="year"
          placeholder="YYYY"
        />
      </div>
    </form>
  );
};

export default Form;
