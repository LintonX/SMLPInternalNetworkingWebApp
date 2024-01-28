import React from "react";
import styled from "styled-components";
import ActionLink from "./ActionLink";

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
          <span>SMLP Connect</span>
        </MainTitle>
      </LeftPane>
      <RightPane>
        <ActionLink actionLinkType={"home"} />
        <ActionLink actionLinkType={"messaging"} />
        <ActionLink actionLinkType={"notifications"} />
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

const LeftPane = styled.div``;

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
  padding: 16px;

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

export default NavBar;
