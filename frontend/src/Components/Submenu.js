import React, { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
import {FetchData} from './FetchData'
import * as AiIcons from 'react-icons/ai' 
const url = 'http://127.0.0.1:8000/api/ticket-list/'


const SidebarLink = styled(Link)`
    display: flex; 
    color: #e1e9fc; 
    justify-content: space-between; 
    align-items: center; 
    padding: 20px; 
    list-style: none; 
    height: 40px; 
    text-decoration: none; 
    font-size 22px; 

    &: hover{
        background: #252831; 
        border-left: 4px solid #632ce4; 
        cursor: pointer; 
    }

`; 


const SidebarLabel = styled.span`
    margin-left 16px; 
`; 

const DropdownIcon = styled.span`
    margin-right: 2px; 
`; 

const DropdownLink = styled(Link)`
    display: flex; 
    color: #f5f5f5; 
    padding-left: 1rem;
    padding: 5px;
    align-items: center; 
    list-style: none; 
    height: 40px; 
    text-decoration: none; 
    font-size 18px; 

    &: hover{
        background: #252831; 
        border-left: 4px solid #632ce4; 
        cursor: pointer; 
    }
`; 


const SubMenu = ({item, projects}) => {
    const [subnav, setSubnav] = useState(false) 
    const showSubnav = () => setSubnav(!subnav) 

    return (
        <>
            <SidebarLink to={item.path} onClick ={item.subNav && showSubnav}>
                <div>
                    {item.icon} 
                    <SidebarLabel>{item.title}</SidebarLabel>    
                </div> 
                <div> 
                    {item.subNav && subnav 
                        ? item.iconOpened 
                        : item.subNav 
                        ? item.iconClosed 
                        : null}
                </div> 
            </SidebarLink>

            {item.title == "Projects" && subnav && projects.map((project, index) =>{
                return(              
                    <DropdownLink to={''} to={`/project/${project.id}`} key={index}>
                    <SidebarLabel>
                        <DropdownIcon><AiIcons.AiFillProject/> </DropdownIcon>
                        {project.title}
                    </SidebarLabel>
                    </DropdownLink> 
                )
            })}   
               
           



            {/* {subnav && item.subNav.map((item, index) =>{
                return(
                <DropdownLink to={item.path} key={index}> 
                    {item.icon}
                    <SidebarLabel>{item.title} </SidebarLabel>
                </DropdownLink>
                );
            }) } */}


        </> 

    )
}

export default SubMenu
