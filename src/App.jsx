import "./App.css";
// import React from "react";

import Header from "./components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import MediaQuery from "react-responsive";

function App() {
  const navigation = useNavigation();
  return (
    <main>
      <Header />
      <MediaQuery query="(min-width: 415px)"></MediaQuery>
      {navigation.state === "loading"}
      <Outlet />
    </main>
  );
}

export default App;
