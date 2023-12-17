import React, { useState } from 'react'
import "./Navbar.css"
import { Container , Nav , NavDropdown , NavLink, Navbar } from 'react-bootstrap'
import Logo from "../Assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,  faCartShopping,  faEarth, faHeart, faRemove, faSearch } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {



  return (
    <div className='MYNAv'>
      
     <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto me-auto'>
            <NavLink href="#home" className='active'>HOME</NavLink>
            <NavLink href="#link">MOVIES</NavLink>
            <NavLink href="#link">TV SHOW</NavLink>
            <NavLink href="#link">PRICING</NavLink>
            <NavLink href="#link">BLOG</NavLink>
            <NavLink href="#link">CONTACTS</NavLink>
          </Nav>


          <div className="actionDiv">
            <FontAwesomeIcon icon={faSearch}/>
            <FontAwesomeIcon icon={faEarth}/>
            <select>
              <option value="EN">EN</option>
              <option value="AR">AR</option>
            </select> 
            <button type='submit'>sign in</button>
       
          </div>        


        </Navbar.Collapse>
        

      </Container>
    </Navbar> 





    </div>
  )
}

export default Navigation
