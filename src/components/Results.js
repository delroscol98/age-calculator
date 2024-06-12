import "./Results.css";

const Results = ({ age }) => {
  return (
    <div className="results">
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">{!age.year ? "--" : age.year}</span>
          years
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">
            {!age.month ? "--" : age.month}
          </span>
          months
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">{!age.day ? "--" : age.day}</span>
          days
        </em>
      </p>
    </div>
  );
};

export default Results;
