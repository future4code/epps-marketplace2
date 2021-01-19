import React from "react";
import AppBar from "@material-ui/core/AppBar";


import { StyledToolBar, StyledButton, Image } from "./Header-styled";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar>
          <StyledToolBar>
            <Image src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e415fe9-43f0-4dc4-b950-e2818853cef1%2F2.png?table=block&id=5a602cd6-89ee-4c60-8e60-16652ace2b8e&width=770&userId=5e420160-d66c-4a07-9865-8c3606ea16dc&cache=v2" alt="logo"></Image>
            <StyledButton>Venda Você também</StyledButton>
          </StyledToolBar>
        </AppBar>
      </div>
    );
  }
}
