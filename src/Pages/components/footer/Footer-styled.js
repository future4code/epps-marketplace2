import styled from 'styled-components'
import Toolbar from "@material-ui/core/Toolbar";



export const StyledToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: top;
    background-color: #4281a4;
    padding: 2vh;    
    height: 60px;
`
export const FooterContainer = styled.div`
    background-color: #4281a4;
    display: flex;
    justify-content: space-around;
    align-items: top;
    

`
export const SocialMediaContainer = styled.div`
    display: block;

`
export const footerTitle = styled.h5`
    font-weight: bold;
    margin: 1px;
`
export const SocialMediaIcon = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding:0px;
    cursor: pointer;   

`
export const ListItem = styled.li`
    list-style: none;
    padding: 5px 0px;
`
export const UnderList = styled.ul`
    padding: 0px;
    margin: 0px

`