import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Layout from './Layout'
import styled from 'styled-components';
import logo from '../assets/APlogo3.png'

const Styles = styled.div`

    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }

`;


export default function NavigationBar(props) {
    return (
        <Styles>
        <Navbar sticky="top" bg="dark" variant="dark" expand="md">
        <Layout>
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="60"
                    height="60"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav classNames="ml-auto">
                    <Nav.Item><Nav.Link href ="/"><i class="fa-solid fa-house"></i>
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/about"><i class="fa-solid fa-user"></i></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/contact"><i class="fa-solid fa-phone fa-rotate-270"></i></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Layout>
        </Navbar>
        </Styles>
    )

}


