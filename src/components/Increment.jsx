const Increment = ({ setCounter, counter }) => {
  return (
    <button
      className={counter === 0 ? "none" : "flex"}
      onClick={() => {
        setCounter(counter - 1);
      }}
    >
      -
    </button>
  );
};

export default Increment;
