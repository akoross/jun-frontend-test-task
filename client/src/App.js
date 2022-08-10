import logo from "./logo.svg";
import "./App.css";
import RiteHorses from "./components/RiteHorses";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
      </header>
      <div className="container pt-5 pb-5">
        <div className="row">
          <RiteHorses />
        </div>
      </div>
    </div>
  );
}

export default App;
