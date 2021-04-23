import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navbar";
import StudentView from "./components/studentView";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <main>
        <Switch>
          <Route path="/studentview" component={StudentView}></Route>
          <Route path="/" component={LoginForm}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
