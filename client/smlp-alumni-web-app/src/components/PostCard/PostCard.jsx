import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

function PostCard() {
  const [toggleLike, setToggleLike] = useState(false);

  function handleToggleLike() {
    setToggleLike(!toggleLike);
  }

  return (
    <PostBox>
      <Circle></Circle>
      <Post>
        <MetricsBar>
          <LikeUnlike onClick={handleToggleLike}>
            {toggleLike === false ? (
              <ThumbUpOffAltIcon style={{ color: "#404040", fontSize: 25 }} />
            ) : (
              <ThumbUpAltIcon style={{ color: "#404040", fontSize: 25 }} />
            )}
          </LikeUnlike>
          <div style={{display: "flex", marginRight: "25px"}}>
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
  margin-left: 17px;
`;

const Likes = styled.div`
  cursor: pointer;
  color: #404040;
`;

const Comments = styled.div`
  cursor: pointer;
  color: #404040;
`;

export default PostCard;
