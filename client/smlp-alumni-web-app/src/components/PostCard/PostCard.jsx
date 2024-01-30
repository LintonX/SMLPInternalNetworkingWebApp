import React from "react";
import styled from "styled-components";
import { useState } from "react";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

function PostCard() {
  const [toggleLike, setToggleLike] = useState(false);

  function handleToggleLike() {
    setToggleLike(!toggleLike);
  }

  return (
    <PostBox>
      <Circle></Circle>
      <Post>
        <div style={{paddingLeft: "70px", paddingRight: "40px", paddingTop: "14px", fontSize: ".8rem"}}>
            <h3 style={{fontSize:".7rem"}}>Xavier Linton, Student '24, Computer Science</h3>
            <h3 style={{paddingTop:"10px"}}>Moving forward...</h3>
            <p>
                These posts containers will be dynamic in nature. The white post box will have a min
                height and will have a max height. They will fit their content within this range so boxes 
                should have some variation.
            </p>
        </div>
        <MetricsBar>
          <div style={{ display: "flex", marginLeft: "17px", gap: "8px"}}>
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
      </Post>
    </PostBox>
  );
}

const PostBox = styled.div`
  display: flex;
  height: 150px;
  width: 96%;
  align-items: center;
`;

const Circle = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 47px;
  width: 47px;
  background-color: #3e3e3e;
  transform: translateX(30px);
  margin-right: -55px;
  margin-bottom: 82px;
  z-index: 1;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  margin-right: 30px;
  margin-left: 30px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
`;

const MetricsBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 3px;
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
