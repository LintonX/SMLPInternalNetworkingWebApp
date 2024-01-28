import React from "react";
import styled from "styled-components";

function TabBar() {
  return (
    <Tab>
        test
    </Tab>
  );
}

const Tab = styled.div`
  grid-area: tab__bar;
  background-color: #007ac3;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export default TabBar;
