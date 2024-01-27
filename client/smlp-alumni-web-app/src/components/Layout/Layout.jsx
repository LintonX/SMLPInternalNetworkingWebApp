import styled from 'styled-components'

function Layout() {
  return (
    <OuterBox>
      <TabBar>
        TabBar
      </TabBar>
      <MainCard>
        MainCard
      </MainCard>
      <ProfilePicCard>
        ProfilePicCard
      </ProfilePicCard>
      <RightSidePanel>
        RightSidePanel
      </RightSidePanel>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 40px 250px 600px;
  grid-template-areas: 
    'tab__bar .'
    'main__card profile__pic__card'
    'main__card right__side__panel';
  grid-gap: 10px;
`;

const TabBar = styled.div`
  grid-area: tab__bar;
  background-color: green;
`;

const MainCard = styled.div`
  grid-area: main__card;
  background-color: blue;
`;

const ProfilePicCard = styled.div`
  grid-area: profile__pic__card;
  background-color: purple;
`;

const RightSidePanel = styled.div`
  grid-area: right__side__panel;
  background-color: red;
`;

export default Layout;
