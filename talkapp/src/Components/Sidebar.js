import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from "./ConversationItem";

const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "TEst1",

      lastmsg: "lastmsg1",
      timeStamp: "today",
    },
    {
      name: "TEst1",
     
      lastmsg: "lastmsg1",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddAltIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input placeholder="Search" className="search-box" />
      </div>
      <div className="sb-conversations">
      {conversations.map((conversation, index) => (
  <ConversationItem key={index} {...conversation} />
))}

   
      </div>
    </div>
  );
};

export default Sidebar;
