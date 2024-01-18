import React from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from "./ConversationItem";
const Sidebar = () => {
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
      <SearchIcon/>
      </IconButton>
      
      <input placeholder="Search"  className="search-box"/>
       </div>
      <div className="sb-conversations"> 
      <ConversationItem/> </div>
    </div>
  );
};

export default Sidebar;
