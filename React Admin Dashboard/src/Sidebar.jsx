import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BsPeopleFill,
  BsFillGrid3X3GapFill,
  BsListCheck,
  BsMenuButtonWideFill,
} from 'react-icons/bs';
import { GiTeacher } from "react-icons/gi";
import { NavDropdown } from 'react-bootstrap'; // Import NavDropdown from react-bootstrap

function Sidebar({ openSidebarToggle, OpenSidebar }) {

  return (

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title' style={{display:"flex", justifyContent:"center"}} >
       <Link style={{textDecoration:"none"}} to="/" ><h2 style={{color:"#ADD8E6"}} id='title'>Student Management System</h2></Link>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <hr style={{color:"#888"}}/>
      <ul className='sidebar-list'>
        <li  className='sidebar-list-item'>
          <NavDropdown title={<span style={{fontSize:"22px", color:"white"}}>STUDENT</span>} id="class-dropdown" style={{color:"white", display:"flex", justifyContent:"left", marginLeft:"45px"}}>
          <Link style={{textDecoration:"none"}} to="/stureg"><h6 id="navItemBg">STUDENT REGISTRATION</h6></Link><hr />
          <Link style={{textDecoration:"none"}} to="/studentslist"><h6 id="navItemBg">MANAGE STUDENT</h6></Link>
          </NavDropdown>
        </li>
        <li className='sidebar-list-item'>

        <NavDropdown title={<span style={{fontSize:"22px"}}>STANDARDS</span>} id="class-dropdown" style={{ color:"white", display:"flex", justifyContent:"left", marginLeft:"45px" }}>
        <Link style={{textDecoration:"none"}} to="/standards"><h6 id="navItemBg">Standards & Divisions </h6></Link>
          </NavDropdown>
        </li>
        <li className='sidebar-list-item'>
        <NavDropdown title={<span style={{fontSize:"22px"}}>TEACHER</span>} id="class-dropdown" style={{color:"white", display:"flex", justifyContent:"left", marginLeft:"45px" }}>
        <Link style={{textDecoration:"none"}} to="/addteacher"><h6 id="navItemBg">ADD TEACHER</h6></Link><hr />
        <Link style={{textDecoration:"none"}} to="/manageteacher"><h6 id="navItemBg">MANAGE TEACHER</h6></Link>
          </NavDropdown>
        </li>
        <li className='sidebar-list-item'>
        <NavDropdown title={<span style={{fontSize:"22px"}}>EVENT</span>} id="class-dropdown" style={{color:"white", display:"flex", justifyContent:"left", marginLeft:"45px" }}>
        <Link style={{textDecoration:"none"}} to="/addevent"><h6 id="navItemBg">ADD EVENT</h6></Link><hr />
        <Link style={{textDecoration:"none"}} to="/viewevent"><h6 id="navItemBg">MANAGE EVENT</h6></Link>
          </NavDropdown>
        </li>
        <li className='sidebar-list-item'>
        <NavDropdown title={<span style={{fontSize:"22px"}}>RESULT</span>} id="class-dropdown" style={{color:"white", display:"flex", justifyContent:"left", marginLeft:"45px" }}>
        <Link style={{textDecoration:"none"}} to="/addresult"><h6 id="navItemBg">ADD RESULT</h6></Link><hr />
        <Link style={{textDecoration:"none"}} to="/viewresult"><h6 id="navItemBg">MANAGE RESULT</h6></Link>
          </NavDropdown>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
