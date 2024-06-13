import "./Results.css";

const Results = ({ age, errors }) => {
  return (
    <section className="results">
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!errors.year ? age.year : "--"}
          </span>
          years
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!errors.month ? age.month : "--"}
          </span>
          months
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!errors.day ? age.day : "--"}
          </span>
          days
        </em>
      </p>
    </section>
  );
};

export default Results;
