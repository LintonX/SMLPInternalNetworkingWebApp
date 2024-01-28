import React from "react";
import styled from "styled-components";
import { useState } from "react";

function MainCard() {
  const [selectedTab, setSelectedTab] = useState(1);

  function handleTabClick(tabNum) {
    setSelectedTab(tabNum);
  }

  return (
    <MainBox>
      <TabsBox>
        <Tab
          onClick={() => handleTabClick(1)}
          className={selectedTab === 1 ? "active-tab1" : "tab1"}
        >
          Posts
        </Tab>
        <Tab
          onClick={() => handleTabClick(2)}
          className={selectedTab === 2 ? "active-tab2" : "tab2"}
        >
          Major-related Posts
        </Tab>
        <Tab
          onClick={() => handleTabClick(3)}
          className={selectedTab === 3 ? "active-tab3" : "tab3"}
        >
          Calendar
        </Tab>
      </TabsBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  grid-area: main__card;
  background-color: #bcc7d2;
  border-radius: 15px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;

const TabsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 37px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active-tab1 {
    border-top-left-radius: 15px;
  }

  &.active-tab2 {
  }

  &.active-tab3 {
    border-top-left-radius: 15px;
  }

  &.tab1 {
    color: white;
    background-color: #00334e;
    border-top-left-radius: 15px;
  }

  &.tab2 {
    color: white;
    background-color: #00334e;
  }

  &.tab3 {
    color: white;
    background-color: #00334e;
    border-top-right-radius: 15px;
  }
`;

export default MainCard;
