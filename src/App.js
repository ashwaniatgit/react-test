import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Details from "./pages/details";
import UserProvider from "./components/Context";

const routes = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Main></Main>
      </Route>
      <Route path="/:id" children={<Details></Details>}>
        <Details></Details>
      </Route>
    </Switch>
  </Router>
}

export default function App() {
  return (
    <UserProvider>
      { routes() }
    </UserProvider>
  );
}
