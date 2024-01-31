import React from "react";
import styled from "styled-components";
import ActionLink from "./ActionLink";
import Button from '@material-ui/core/Button';

//images
import LogoImage from "../../images/smlp_logo.png";

function NavBar() {
  return (
    <NavContainer>
      <LeftPane>
        <MainTitle>
          <Logo>
            <img src={LogoImage} alt={"SMLP Logo"} />
          </Logo>
          <span style={{marginLeft:"16px"}}>SMLP Connect</span>
        </MainTitle>
      </LeftPane>
      <RightPane>
        <ActionLink actionLinkType={"home"} />
        <ActionLink actionLinkType={"messaging"} />
        <ActionLink actionLinkType={"notifications"} />
        <StyledButton variant="contained">log out</StyledButton>
      </RightPane>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  background-color: #00334e;
  position: fixed;
  align-items: center;
  margin-bottom: 10px;
  width: 100vw;
  height: 60px;
  justify-content: space-between;
  z-index: 100;
`;

const LeftPane = styled.div`
  padding-left: 50px;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: white;
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const RightPane = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 17px;
  padding-right: 50px;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 6px;
    padding: 0;
    font-size: .7rem;
    height: 30px;
    width: 80px;
    background-color: #007ac3;
    color: white;
  }
`;

export default NavBar;
