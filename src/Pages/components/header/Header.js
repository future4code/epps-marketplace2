import React from "react";
import AppBar from "@material-ui/core/AppBar";

import { StyledToolBar, StyledButton, Image } from "./Header-styled";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="sticky">
          <StyledToolBar>
            <Image
              src="https://i.imgur.com/m8SnRQw.png"
              alt="logo"
            >
            </Image>
            <StyledButton>Venda Você também</StyledButton>
          </StyledToolBar>
        </AppBar>
      </div>
    );
  }
}
