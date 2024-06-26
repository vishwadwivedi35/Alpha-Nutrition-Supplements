import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import GoogleAuth from "./pages/GoogleAuth";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/google-auth" component={GoogleAuth} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
