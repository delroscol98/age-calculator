import "./Results.css";

const Results = ({ age }) => {
  return (
    <div className="results">
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {age.year === new Date().getFullYear() ? "--" : age.year}
          </span>
          years
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {age.month === Math.abs(new Date().getMonth()) ? "--" : age.month}
          </span>
          months
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {age.day === Math.abs(new Date().getDate()) ? "--" : age.day}
          </span>
          days
        </em>
      </p>
    </div>
  );
};

export default Results;
