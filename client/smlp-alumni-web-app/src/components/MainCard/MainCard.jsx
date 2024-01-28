import React from "react";
import styled from "styled-components";
import { useState } from "react";
import PostCard from "../PostCard/PostCard";
import DateCard from "../DateCard/DateCard";

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
          className={selectedTab === 1 ? "active__tab1" : "tab1"}
        >
          Posts
        </Tab>
        <Tab
          onClick={() => handleTabClick(2)}
          className={selectedTab === 2 ? "active__tab2" : "tab2"}
        >
          Major-related Posts
        </Tab>
        <Tab
          onClick={() => handleTabClick(3)}
          className={selectedTab === 3 ? "active__tab3" : "tab3"}
        >
          Calendar
        </Tab>
      </TabsBox>
      <PostContainer className={selectedTab === 1 ? "active__content1" : "nonactive__content"}>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </PostContainer>
      <CalendarContainer className={selectedTab === 3 ? "active__content3" : "nonactive__content"}>
        <DateCard></DateCard>
      </CalendarContainer>
    </MainBox>
  );
}

const MainBox = styled.div`
  grid-area: main__card;
  display: flex;
  flex-direction: column;
  background-color: #bcc7d2;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.40);
  margin-right: 30px;
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

  &.active__tab1 {
    border-top-left-radius: 15px;
  }

  &.active__tab2 {
  }

  &.active__tab3 {
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

const PostContainer = styled.div`
    padding: 10px;
    padding-top: 30px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 100%;
    
    &.active__content1 {
    }

    &.nonactive__content {
        display: none;
    }
`;

const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    padding-top: 30px;
    width: 100%;
    height: 100%;

    &.active__content3 {
    }

    &.nonactive__content {
        display: none;
    }
`;


export default MainCard;
