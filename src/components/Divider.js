import Icon from "../assets/images/icon-arrow.svg";
import "./Divider.css";

const Divider = () => {
  return (
    <section className="divider">
      <hr className="divider__divider" />
      <button className="divider__button">
        <img className="divider__button--icon" src={Icon} alt="icon-arrow" />
      </button>
    </section>
  );
};

export default Divider;
