import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";

function CreatePost() {
  const [wasClicked, toggleClicked] = useState(false);

  function handleToggleClicked(wasClicked) {
    toggleClicked(!wasClicked);
  }

  return (
    <div>
      {wasClicked ? (
        <CreatePostDropDown>
          <div style={{ width:"100%", marginTop: "auto", display:"flex", gap:"5px", justifyContent:"center"}}>
            <StyledSubmitButton>Post</StyledSubmitButton>
            <StyledSubmitButton onClick={() => handleToggleClicked(wasClicked)}>
              Cancel
            </StyledSubmitButton>
          </div>
        </CreatePostDropDown>
      ) : (
        <CreatePostDropButton>
          <StyledPostButton
            onClick={() => handleToggleClicked(wasClicked)}
            startIcon={
              <AddCircleOutlineIcon
                style={{ fontSize: "16px", color: "green" }}
              />
            }
            variant="text"
          >
            Create Post
          </StyledPostButton>
        </CreatePostDropButton>
      )}
    </div>
  );
}

const CreatePostDropDown = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: auto;
  margin-left: 40px;
  margin-right: 40px;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
`;

const CreatePostDropButton = styled(CreatePostDropDown)`
  padding: 0px;
  height: 30px;
`;

const StyledPostButton = styled(Button)`
  display: flex;
  height: 30px;
  width: auto;
  margin-left: 40px;
  margin-right: 40px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);

  && {
    text-transform: none;
    font-weight: bold;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

const StyledSubmitButton = styled(Button)`
  && {
    margin-top: 6px;
    padding: 0;
    font-size: 0.7rem;
    height: 30px;
    width: 80px;
    background-color: #007ac3;
    color: white;
    &:hover {
      color: black;
    }
  }
`;

export default CreatePost;
