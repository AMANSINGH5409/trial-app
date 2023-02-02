import React from 'react'
import { MyOrders , MyProfile , SetUpStore , Nothing } from './index';

export const MainContent = (props) => {

  const componentList =  {
    'myorders': <MyOrders /> ,
    'myprofile' : <MyProfile /> ,
    'setupstore' : <SetUpStore /> ,
    'nothing' : <Nothing />
  }

  return (
    <div id='mainContent' className="p-2 border-2 w-full  rounded-[8px] bg-slate-100 drop-shadow">
      {componentList[props.load]}
    </div>
  )
}

export default MainContent;