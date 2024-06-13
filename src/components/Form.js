import Divider from "./Divider";
import "./Form.css";

const Form = ({ onChange, onSubmit, errors }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <section className="form__inputs">
        <article className={`form__box ${errors.day ? "invalid" : ""}`}>
          <label className="form__label font-bold heading-sm" htmlFor="day">
            DAY
          </label>
          <input
            className="form__input heading-md"
            type="number"
            id="day"
            name="day"
            placeholder="DD"
            onChange={onChange}
          />

          {errors.day && (
            <p className="form__error-msg ff-body">
              <em>Must be a valid day</em>
            </p>
          )}
        </article>
        <article className={`form__box ${errors.month ? "invalid" : ""}`}>
          <label className="form__label font-bold heading-sm" htmlFor="month">
            MONTH
          </label>
          <input
            className="form__input heading-md"
            type="number"
            id="month"
            name="month"
            placeholder="MM"
            onChange={onChange}
          />

          {errors.month && (
            <p className="form__error-msg ff-body">
              <em>Must be a valid month</em>
            </p>
          )}
        </article>
        <article className={`form__box ${errors.year ? "invalid" : ""}`}>
          <label className="form__label font-bold heading-sm" htmlFor="year">
            YEAR
          </label>
          <input
            className="form__input heading-md"
            type="number"
            id="year"
            name="year"
            placeholder="YYYY"
            onChange={onChange}
          />

          {errors.year && (
            <p className="form__error-msg ff-body">
              <em>Must be in the past</em>
            </p>
          )}
        </article>
      </section>
      <Divider />
    </form>
  );
};

export default Form;
