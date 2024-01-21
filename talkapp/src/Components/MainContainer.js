import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import Workarea from './Workarea'
import ChatArea from './ChatArea'
const MainContainer = () => {
  return (
    <div className='main-container'>
      <Sidebar/>
      {/* <Workarea/> */}
<ChatArea/>
    </div>
  )
}

export default MainContainer
