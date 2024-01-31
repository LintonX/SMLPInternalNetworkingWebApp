import React from "react";
import styled from "styled-components";
import { useState } from "react";

import profileAvatar from "../../images/profilepic.jpeg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

function PostCard() {
  const [toggleLike, setToggleLike] = useState(false);

  function handleToggleLike() {
    setToggleLike(!toggleLike);
  }

  return (
    <PostBox>
      <Post>
        <Circle>
          <img src={profileAvatar} alt="Post Avatar" />
        </Circle>
        <div style={{ fontSize: ".8rem", marginTop: "10px" }}>
          <h3 style={{ fontSize: ".7rem" }}>
            Xavier Linton, Student '24, Computer Science
          </h3>
          <h3 style={{ paddingTop: "10px" }}>Moving forward...</h3>
          <p>
            These posts containers will be dynamic in nature. The white post box
            will have a min height and will have a max height. They will fit
            their content within this range so boxes should have some variation.
          </p>
        </div>
      </Post>
      <MetricsBar>
        <div style={{ display: "flex", marginLeft: "17px", gap: "8px" }}>
          <LikeUnlike onClick={handleToggleLike}>
            {toggleLike === false ? (
              <StyledThumbUpIconOff />
            ) : (
              <StyledThumbUpIconOn />
            )}
          </LikeUnlike>
          <StyledCommentIcon />
        </div>
        <div style={{ display: "flex", marginRight: "25px" }}>
          <Likes>4 Likes</Likes>
          &nbsp;|&nbsp;
          <Comments>3 Comments</Comments>
        </div>
      </MetricsBar>
    </PostBox>
  );
}

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: auto;
  margin-left: 40px;
  margin-right: 40px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
`;

const Circle = styled.div`
  clip-path: circle();
  height: 47px;
  width: 47px;
  background-color: #3e3e3e;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 20px;
  z-index: 1;
  flex-shrink: 0;

  & img {
    width: 47px;
    height: 47px;
  }
`;

const Post = styled.div`
  display: flex;
  margin-right: 20px;
  min-height: 110px;
  margin-bottom: 15px;
`;

const MetricsBar = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6rem;
  margin-top: auto;
  margin-bottom: 5px;
`;

const LikeUnlike = styled.div`
  cursor: pointer;
`;

const Likes = styled.div`
  cursor: pointer;
  color: #404040;
`;

const Comments = styled.div`
  cursor: pointer;
  color: #404040;
`;

const StyledThumbUpIconOff = styled(ThumbUpOffAltIcon)`
  color: "#404040";
  font-size: 23px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledThumbUpIconOn = styled(ThumbUpAltIcon)`
  color: "#404040";
  font-size: 23px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledCommentIcon = styled(CommentOutlinedIcon)`
  color: "#404040";
  font-size: 21px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default PostCard;
