import React from "react";
import productsCard from "./Pages/components/ProductsCard/productsCard";
import { HomePage } from "./Pages/HomePage";
import { SellersPage } from "./Pages/SellersPage";


class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <SellersPage />
        <productsCard />
      </div>
    );
  }
}

export default App;
