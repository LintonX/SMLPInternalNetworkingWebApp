import React from "react";
import styled from "styled-components";

import profilePic from "../../images/profilepic.jpeg";

function ProfilePicCard() {
  return (
    <ProfileCardContainer>
      <ProfilePic>
        <img src={profilePic} alt="Profile Pic" />
      </ProfilePic>
      <WhiteCircle />
      <div style={{textAlign:"center", fontSize:".8rem", paddingTop:"25px"}}>
        <span>Xavier Linton, Student '24</span>
        <br />
        <span>Computer Science</span>
        <br />
        <span><em>Looking for fulltime</em></span>
      </div>
      <ReplaceContainer>
        <a href="google.com">Edit Profile</a>
      </ReplaceContainer>
    </ProfileCardContainer>
  );
}

const ProfileCardContainer = styled.div`
  grid-area: profile__pic__card;
  background-color: #bcc7d2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.4);
`;

const ProfilePic = styled.div`
  width: 105px;
  height: 105px;
  clip-path: circle();
  position: relative;
  z-index: 2;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & a {
  }
`;

const WhiteCircle = styled.div`
  width: 113px;
  height: 113px;
  clip-path: circle();
  background-color: white;
  position: absolute;
  transform: translateY(-4px);
  z-index: 1;
`;

const ReplaceContainer = styled.div`
  padding-top: 10px;
  font-size: 0.8rem;
`;

export default ProfilePicCard;
