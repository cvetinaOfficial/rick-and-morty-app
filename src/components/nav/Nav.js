import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

const links = [
    {
        to: '/',
        tag: Link,
        text: 'Home',
        icon: ''
    },
    {
        to: '/actors',
        tag: Link,
        icon: faUsers,
        text: 'Actors'
    },
    {
        to: '/episodes',
        tag: Link,
        icon: faTv,
        text: 'Episodes'
    },
]

const getLinks = () => {
    return links.map((link, index) => {
       return <NavItem key={index} className="btn btn-dark padding-nav-item">
                <NavLink key={index} className="text-white border-context" tag={link.tag} to={link.to}>
                    {link.icon !='' &&
                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                    }
                    { link.text}
                </NavLink>
        </NavItem>
    });
}

function Navbar(props) {
  return (
    <div className="row justify-content-end mb-2 bg-dark">
            <div className="col-md-7">
            <div className="d-flex justify-content-end">
                <Nav className="mr-3 w-auto">
                    {getLinks()}
                </Nav>
            </div>
        </div>
    </div>
  );
}

export default Navbar;