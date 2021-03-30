import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* list of pages */
import Login from './pages/Login';

/* list of components*/
import Header from "./components/Header";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>    
      </div>
    </Router>
  );
}
