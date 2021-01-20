import React from "react";
import { HomePage } from "./Pages/HomePage";
import { SellersPage } from "./Pages/SellersPage";


class App extends React.Component {
  state = {
    homePageVisible: true,
  };

  handleHomePage = () => {
    this.setState({
      homePageVisible: !this.state.homePageVisible,
    });
  };

  backToHomePage = () => {
    this.setState({
      handleHomePage: true,
    });
  };

  render() {
    return (
      <div>

        {this.state.homePageVisible ? (
          <HomePage
            goHome={this.backToHomePage}
            handleHomePage={this.handleHomePage}
          />
        ) : (
          <SellersPage 
          goHome={this.backToHomePage}
          handleHomePage={this.handleHomePage} />
        )}

      </div>
    );
  }
}

export default App;
