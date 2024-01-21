import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const ChatArea = () => {
  // Dummy data for a single person
  const dummyData = {
    name: "TEst1",
    lastmsg: "lastmsg1",
    timeStamp: "today",
  };

  const { name, lastmsg, timeStamp } = dummyData;

  return (
    <div className="chatArea-container">
      <div className="chatArea-Header">
        <p className="con-icon">{name[0]}</p>
        <div className="header-text">
          <p className="con-title">{name}</p>
          <p className="con-timeStamp">{timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">{lastmsg}</div>
      <div className="text-input-area">
        <input placeholder="Type a message" className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
