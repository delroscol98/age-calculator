import "./Results.css";

const Results = ({ age, errors }) => {
  console.log(errors);
  return (
    <div className="results">
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!errors.year || !errors.month || !errors.day ? age.year : "--"}
          </span>
          years
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!errors.year || !errors.month || !errors.day ? age.month : "--"}
          </span>
          months
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!errors.year || !errors.month || !errors.day ? age.day : "--"}
          </span>
          days
        </em>
      </p>
    </div>
  );
};

export default Results;
