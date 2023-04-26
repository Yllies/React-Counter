const Decrement = ({ setCounter, counter }) => {
  return (
    <button
      className={counter === 10 ? "none" : "flex"}
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Decrement;
