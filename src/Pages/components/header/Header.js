import React from "react";
import AppBar from "@material-ui/core/AppBar";

import { StyledToolBar, StyledButton, Image } from "./Header-styled";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="sticky">
          <StyledToolBar>
            <Image onClick={this.props.goHome}
              src="https://i.imgur.com/qlhep1q.png"
              alt="logo"
            >
            </Image>
            <StyledButton onClick={this.props.handleHomePage}>Venda Você também</StyledButton>
          </StyledToolBar>
        </AppBar>
      </div>
    );
  }
}
