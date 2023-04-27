import moins from "../img/minus.svg";

const Increment = ({ setCounter, counter }) => {
  return (
    <button>
      <img
        src={moins}
        className={counter === 0 ? "none" : "flex"}
        onClick={() => {
          setCounter(counter - 1);
        }}
      />
    </button>
  );
};

export default Increment;
