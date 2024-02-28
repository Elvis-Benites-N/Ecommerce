import React from "react";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {

  return (
    <Layout title={"Las mejores ofertas"}>
      <div className="container text-center" style={{ minHeight: "75vh" }}>
        <h1>HomePage</h1>

        <div>
          <h2>Bienvenido!</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur "
          </p>
          <img src="/welcome.svg" alt="Bienvenidos" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
