import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



function Header() {
    return (
        
        <div>
            <nav className="navbar navbar-light" 
            style = {{
                height: "50px"
            }}>
            
            <b className="text-align-left" href="/" style={{
                color: "#447ED9",
                paddingLeft: "15px"
            }}>Error and Log Management</b>
            <div><FontAwesomeIcon icon={faUserCircle} size="lg" style={{
                alignSelf: "right",
                paddingRight: "5px",
                color: "#555555"
            }}/>
            <i className = "administrator" style={{
                fontSize: "15px",
                paddingRight: "15px",
                color: "#555555"
                }}> Administrator</i>
            <a className = "login" href="/Login" style={{
                fontSize: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderLeft: "1px solid grey"
            }}>Login</a></div>
    
    

        </nav>
            
        </div>
    )
}
export default Header;
