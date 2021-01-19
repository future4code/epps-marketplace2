import React from "react";
import { HomePage } from "./Pages/HomePage";
import { SellersPage } from "./Pages/SellersPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <SellersPage />
      </div>
    );
  }
}

export default App;
