const Reset = ({ setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(0);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
