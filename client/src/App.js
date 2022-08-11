import logo from "./logo.svg";
import "./App.css";
import RiteHorses from "./components/RiteHorses";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <RiteHorses />
                        </div>
                    </div>
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
            </Provider>
        </div>
    );
}

export default App;
