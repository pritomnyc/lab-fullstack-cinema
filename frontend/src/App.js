import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/movies" render={(props) => <List {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
