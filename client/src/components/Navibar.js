import React from 'react';
import {Component} from 'react';
import Nav from '@bit/react-bootstrap.react-bootstrap.nav';
import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar';
import { NavLink } from 'react-router-dom';

class Navibar extends Component {

    render() {
    return (

        <Navbar variant="dark" style={{ backgroundColor: "#447ED9", paddingLeft: "40px" }}>
            <Nav className="mr-auto"  defaultActiveKey="/dashboard">
                <NavLink id="link" to="/dashboard" style={{ color: "#F7F7F7" }} activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }}>Dashboard</NavLink>
                <NavLink id="link" to="/log" style={{ color: "#F7F7F7" , paddingLeft: "30px"}} activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }}>Log</NavLink>
                <NavLink id="link" to="/ebs_management" style={{ color: "#F7F7F7", paddingLeft: "30px" }} activeStyle={{
                    fontWeight: "bold",
                    color: "white"
                }}>EBS Management</NavLink>
           
            </Nav>
        </Navbar> 
        )
    }
}

export default Navibar;