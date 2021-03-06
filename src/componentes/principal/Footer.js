import React from 'react';
import Styled from '@emotion/styled';

const Footer = () => {
    
    const Footer = Styled.footer`
        background-color: #006e9c;
        margin-top: 1cm;
    `;
    let year = new Date().getFullYear();

    return ( 
        <Footer>
            <ul className="navbar justify-content-center" >
                <li className="nav-item">
                    <a href="#!" style={{color: 'white'}}><b>Software Odontológico {year}</b></a>
                </li>
            </ul>  
        </Footer> 
    );
}
 
export default Footer;