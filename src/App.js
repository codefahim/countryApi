import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Home/Details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/country/:name">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
