import React, {useState} from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai' 
import * as FaIcons from 'react-icons/fa' 
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import {FetchData} from './FetchData'
const url = 'http://127.0.0.1:8000/api/ticket-list/'

const Nav = styled.div`
    background: #15171c; 
    height: 80px; 
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
`; 

const NavIcon = styled(Link)`
    margin-left: 2rem; 
    font-size 2rem; 
    height: 80px; 
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
    `;

const SidebarNav = styled.nav`
    background: #15171c; 
    width: 250px; 
    height: 100vh; 
    display: flex; 
    justify-content: center; 
    position: fixed; 
    top: 0; 
    left: ${({ sidebar}) => (sidebar? '0' : '-100%')}; 
    transition: 350ms; 
    z-index: 10; 
`;

const SidebarWrap = styled.div`
    width: 100%; 
`;



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false) 

    const showSideBar = () => setSidebar(!sidebar) 
    const {loading, products } = FetchData(url)

    return (
        <>
        <IconContext.Provider value = {{ color: '#fff'}}>
            <Nav>Nav
                <NavIcon to="#"> 
                    <FaIcons.FaBars onClick={showSideBar} /> 
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap> 
                    <NavIcon to="#"> 
                        <AiIcons.AiOutlineClose onClick={showSideBar} /> 
                    </NavIcon>
                    {SidebarData.map((item,index) => {
                        return <SubMenu item={item} key={index} projects={products}/>;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
        </> 

    );
};

export default Sidebar
