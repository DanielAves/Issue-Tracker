import React from 'react'
import * as AiIcons from 'react-icons/ai' 
import * as FaIcons from 'react-icons/fa' 
import * as IoIcons from 'react-icons/io' 
import * as RiIcons from 'react-icons/ri' 






    export const SidebarData = [
        {
            title: 'Dashboard', 
            path: '/dashboard', 
            icon: <AiIcons.AiFillDashboard/>, 
        },
        {
            title: 'Projects', 
            path: '/projects', 
            icon: <AiIcons.AiFillHome/>, 
            iconClosed: <RiIcons.RiArrowDownSFill/>, 
            iconOpened: <RiIcons.RiArrowUpSFill/>, 
    
     
            subNav: [

                 
                // {
                //     title: 'Project1', 
                //     path: '/project1', 
                //     icon: <AiIcons.AiFillHome/>, 
                // },
                // {
                //     title: 'Project2', 
                //     path: '/project2', 
                //     icon: <AiIcons.AiFillHome/>, 
                // },
            ]
        },
        {
            title: 'Tickets', 
            path: '/tickets', 
            icon: <AiIcons.AiFillDashboard/>, 
        },
        {
            title: 'Users', 
            path: '/users', 
            icon: <AiIcons.AiFillDashboard/>, 
        },
    ]
    


export default SidebarData











