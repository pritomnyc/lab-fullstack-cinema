import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Details from "./components/Details";
import NewMovies from "./components/NewMovies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/movies" render={(props) => <Movies />} />
        <Route
          exact
          path="/movie/:dynamicId"
          render={(props) => <Details {...props} />}
        />
        <Route exact path="/newmovie" render={(props) => <NewMovies />} />
      </Switch>
    </div>
  );
}

export default App;
