import "./Results.css";

const Results = ({ day, month }) => {
  return (
    <div className="results">
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">--</span> years
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">{month ? month : "--"}</span> months
        </em>
      </p>
      <p className="heading-lg font-very-bold">
        <em>
          <span className="results__number">{day ? day : "--"}</span> days
        </em>
      </p>
    </div>
  );
};

export default Results;
