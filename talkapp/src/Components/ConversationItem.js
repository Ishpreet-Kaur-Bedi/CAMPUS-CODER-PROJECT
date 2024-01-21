import React from 'react';

const ConversationItem = ({ name, lastmsg, timeStamp }) => {
  return (
    <div className='conversation-container'>
      <p className='con-icon'>{name[0]}</p>
      <p className='con-title'>{name}</p>
      <p className='con-lastmsg'>{lastmsg}</p>
      <p className='con-timeStamp'>{timeStamp}</p>
    </div>
  );
};

export default ConversationItem;
