import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components';

const iconMap = {
    messaging: {icon: MessageIcon, 
              text: "Messaging"},
    home: {icon: HomeIcon, 
           text: "Home"},
    notifications: {icon: NotificationsIcon, 
                    text: "Notifications"}
};

function ActionLink(props) {
    const { actionLinkType } = props;
    
    if (!iconMap[actionLinkType]) {
      return null;
    }
  
    const SelectedIcon = iconMap[actionLinkType].icon;
    const text = iconMap[actionLinkType].text;
  
    return (
      <ActionContainer>
        {SelectedIcon && <SelectedIcon style={{ color: 'white', fontSize: 30 }} />}
        <IconText>{text}</IconText>
      </ActionContainer>
    );
  }

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60px;
    width: 60px;
`;

const IconText = styled.div`
    color: white;
    font-size: .7rem;
`;

export default ActionLink