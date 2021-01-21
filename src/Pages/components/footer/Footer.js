import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import {
  SocialMediaContainer,
  FooterTitle,
  SocialMediaIcon,
  ListItem,
  UnderList,
  StyledToolBar,
} from "./Footer-styled";
import AppBar from "@material-ui/core/AppBar";


export class Footer extends React.Component {
  redirecionarFacebook = () => {    
    window.location.replace("https://www.facebook.com/")
  }

  redirecionarTwitter = () => {    
    window.location.replace("https://twitter.com/")
  }

  redirecionarInstagram = () => {    
    window.location.replace("https://www.instagram.com/")
  }

  


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
              <FooterTitle>Utilidades</FooterTitle>
              <UnderList>
                <ListItem>Cadastre seu produto</ListItem>
                <ListItem>Veja nossa lista de produtos</ListItem>
              </UnderList>
            </div>
            <SocialMediaContainer>
              <FooterTitle>Contato</FooterTitle>
              <SocialMediaIcon>
                <FacebookIcon onClick={this.redirecionarFacebook} />
                <TwitterIcon onClick={this.redirecionarTwitter} />
                <InstagramIcon onClick={this.redirecionarInstagram}/>
              </SocialMediaIcon>
            </SocialMediaContainer>
          </StyledToolBar>
        </AppBar>
      </div>


    );
  }
}
