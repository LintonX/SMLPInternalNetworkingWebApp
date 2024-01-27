import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <NavContainer>
        <LeftPane>
            <MainTitle>
                SMLP Internal Connect
            </MainTitle>
        </LeftPane>
        <RightPane>
            <ActionLink>

            </ActionLink>
        </RightPane>

    </NavContainer>
  )
}

const NavContainer = styled.div`
    display: flex;
    background-color: #00334E;
    position: fixed;
    margin-bottom: 10px;
    width: 100vw;
`;

const LeftPane = styled.div`

`;

const MainTitle = styled.div`

`;

const RightPane = styled.div`

`;

const ActionLink = styled.div`

`;


export default NavBar