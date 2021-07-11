import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import iconimg from '../../Images/bulb2.png';
import profile from '../../Images/p.png';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="f" >
          <Navbar  class="container-fluid nav-fill w-100" className="menu md-2" collapseOnSelect expand="lg md-2" variant="dark" >
            <Navbar.Brand ><h2><div className="titleofapp"><img src={iconimg} width="86" height="70" border-radius="100%"></img>&nbsp;&nbsp;Electicity Billing Application</div></h2></Navbar.Brand>
            <Nav>
              <Nav.Link href="/"><h4 style={{ color: "darkcyan" }}>Home</h4></Nav.Link>
              <Nav.Link   href="/contactUs"><h4 style={{ color: "darkcyan" ,right: 0}}>Contact</h4></Nav.Link>

            </Nav>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Nav>
                <Nav.Link href="/addUser"><h4 style={{color:"darkcyan"}}>Sign Up</h4></Nav.Link>
    </Nav>*/}



            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <h4> <NavDropdown title="Sign In" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/AdminLogin" >Admin</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/SupervisorLogin">Supervisor</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/CustomerLogin">Consumer</NavDropdown.Item>
                </NavDropdown></h4>
              </Nav>
              <Nav className="mr-auto">
                <h4> <NavDropdown title="Sign Up" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/add" >Consumer</NavDropdown.Item>
                  <NavDropdown />
                 

                </NavDropdown></h4>
              </Nav>



              <Nav  className = "topnav-right">
                <Nav.Link   href="/"><h4 style={{ color: "darkcyan" ,right: 0}}><img src={profile} width="66" height="50" border-radius="50%"></img></h4></Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default HeaderComponent;