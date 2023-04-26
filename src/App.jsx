import { useState } from "react";
import Reset from "./components/Reset";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import logo from "../src/img/logo.svg";
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo" />
          <h1>React Counter</h1>
        </nav>
      </header>
      <div className="app">
        <Increment setCounter={setCounter} counter={counter} />
        <p>{counter}</p>
        <Decrement setCounter={setCounter} counter={counter} />
        <Reset setCounter={setCounter} />
      </div>
    </>
  );
}

export default App;
