import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import List from "./component/List/List";
import NewUser from "./component/NewUser/NewUser";
import s from "./App.module.scss";
function App() {
  return (
    <Router>
      <div className={s.App}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route exact path="/create_new_user">
              <NewUser />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
