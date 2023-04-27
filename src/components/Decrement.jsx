import plus from "../img/plus.svg";

const Decrement = ({ setCounter, counter }) => {
  return (
    <button>
      <img
        src={plus}
        className={counter === 10 ? "none" : "flex"}
        onClick={() => {
          setCounter(counter + 1);
        }}
      />
    </button>
  );
};

export default Decrement;
