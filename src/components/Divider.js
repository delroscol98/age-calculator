import Icon from "../assets/images/icon-arrow.svg";
import "./Divider.css";

const Divider = ({ onSetAge }) => {
  return (
    <div className="divider">
      <hr className="divider__divider" />
      <button className="divider__button" onClick={() => onSetAge()}>
        <img className="divider__button--icon" src={Icon} alt="icon-arrow" />
      </button>
    </div>
  );
};

export default Divider;
