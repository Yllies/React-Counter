import { useState } from "react";
import Reset from "./components/Reset";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import logo from "../src/img/logo.svg";
function App() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo" />
          <p>React Counter</p>
        </nav>
      </header>
      <main>
        <div className="app">
          <Increment setCounter={setCounter} counter={counter} />
          <p>{counter}</p>
          <Decrement setCounter={setCounter} counter={counter} />
        </div>
        <div className="buttonReset">
          <Reset setCounter={setCounter} />
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> By{" "}
          <span>Yllies</span>
        </p>
      </footer>
    </>
  );
}

export default App;
