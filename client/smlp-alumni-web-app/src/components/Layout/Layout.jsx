import styled from "styled-components";
import MainCard from "../MainCard/MainCard";

function Layout() {
  return (
    <OuterBox>
      {/* <TabBar>TabBar</TabBar> */}
      <MainCard>MainCard</MainCard>
      <ProfilePicCard>ProfilePicCard</ProfilePicCard>
      <RightSidePanel>RightSidePanel</RightSidePanel>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 250px 600px;
  grid-template-areas:
    "main__card profile__pic__card"
    "main__card right__side__panel";
  grid-gap: 15px;
  padding-top: 80px;
  padding-left: 140px;
  padding-right: 140px;
`;

const ProfilePicCard = styled.div`
  grid-area: profile__pic__card;
  background-color: purple;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.40);
`;

const RightSidePanel = styled.div`
  grid-area: right__side__panel;
  background-color: red;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.40);
`;

export default Layout;
