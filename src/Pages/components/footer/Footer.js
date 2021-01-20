import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  SocialMediaContainer,
  footerTitle,
  SocialMediaIcon,
  ListItem,
  UnderList,
  StyledToolBar,
} from "./Footer-styled";
import AppBar from "@material-ui/core/AppBar";

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="sticky">
          <StyledToolBar>
              <div>
                  <p>4Used</p>
                  <p>Todos os direitos reservados</p>
              </div>
            <div>
              <footerTitle>Utilidades</footerTitle>
              <UnderList>
                <ListItem>Cadastre seu produto</ListItem>
                <ListItem>Veja nossa lista de produtos</ListItem>
              </UnderList>
            </div>
            <SocialMediaContainer>
            <footerTitle>Contato</footerTitle>
              <SocialMediaIcon>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </SocialMediaIcon>
            </SocialMediaContainer>
          </StyledToolBar>
        </AppBar>
      </div>


    );
  }
}
