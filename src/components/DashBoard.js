import React from 'react'
import SideBar from './SideBar'
import Title from './Title'


const DashBoard = ({section, children}) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
           <SideBar/>
           <div className="content absolute h-full left-60 " style={{width: 'calc(100% - 240px)'}}>
               <Title>{section}</Title>
                {children}
           </div>
        </div>
    )
}

export default DashBoard
