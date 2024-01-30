import styled from "styled-components";
import MainCard from "../MainCard/MainCard";
import ProfilePicCard from "../ProfilePicCard/ProfilePicCard";

function Layout() {
  return (
    <OuterBox>
      {/* <TabBar>TabBar</TabBar> */}
      <MainCard>MainCard</MainCard>
      <ProfilePicCard>ProfilePicCard</ProfilePicCard>
      <RightSidePanel>Resources&Announcements</RightSidePanel>
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
  padding-top: 100px;
  padding-left: 140px;
  padding-right: 140px;
`;

const RightSidePanel = styled.div`
  grid-area: right__side__panel;
  background-color: #bcc7d2;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.40);
`;

export default Layout;
