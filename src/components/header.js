import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/icon.png";
import { Link } from "@reach/router";

function MobileNav(props) {
  return (
    <>
      <MobileNavContainer
        onClick={() => {
          props.setActiveMenu(!props.activeMenu);
        }}
      >
        =
      </MobileNavContainer>
    </>
  );
}

function DesktopNav(props) {
  return (
    <>
      <DeskNav activeMenu={props.activeMenu}>
        <DeskDiv>About</DeskDiv>
        <NavLink>Our team</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Water us</NavLink>
        <NavLink>Thanks</NavLink>
      </DeskNav>
      <DeskNav activeMenu={props.activeMenu}>
        <StyledDeskDiv>Buy us plants</StyledDeskDiv>
        <NavLink>Thanks!</NavLink>
      </DeskNav>
    </>
  );
}

function Header(props) {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <Wrapper>
      <HeaderContainer>
        <NavLeft activeMenu={activeMenu}>
          <Link to="/">
            <Image src={logo} alt="logo" />
          </Link>
        </NavLeft>
        <NavCenter>Big plant</NavCenter>
        <NavRight activeMenu={activeMenu}>
          <MobileNav setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
          <DesktopNav activeMenu={activeMenu} />
        </NavRight>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;

//styles
const Wrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: wrap;
  padding-left: 8px;
  padding-right: 8px;

  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const Image = styled.img`
  width: 40px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;
const NavCenter = styled.div`
  flex-grow: 1;
  order: 3;
  flex-basis: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;

  @media (min-width: 768px) {
    order: 2;
    flex-grow: 2;
    flex-basis: auto;
    width: 3rem;
    margin: 6px;
  }
`;
const NavLeft = styled(NavCenter)`
  order: ${props => (props.activeMenu ? "2" : "1")};
  flex-basis: 25%;
  text-align: left;

  @media (min-width: 768px) {
    flex-grow: 2;

    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;
const NavRight = styled(NavCenter)`
  order: ${props => (props.activeMenu ? "1" : "2")};
  height: ${props => (props.activeMenu ? "100vh" : "")};
  flex-basis: ${props => (props.activeMenu ? "100%" : "25%")};
  text-align: right;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    order: 3;
    flex-grow: 2;
    display: flex;
    padding: 0;
    align-items: flex-start;
    flex-direction: row;
  }
`;
const MobileNavContainer = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;
const DeskNav = styled.nav`
  display: ${props => (props.activeMenu ? "flex" : "none")};
  width: ${props => (props.activeMenu ? "100%" : "150px")};
  flex-shrink: 2;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1;
  text-align: center;
  margin: 6px;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  a {
    display: ${props => (props.activeMenu ? "block" : "none")};
  }
  &:hover {
    a {
      display: block;
    }
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const DeskDiv = styled.div`
  flex-grow: 1;
  font-weight: 600;
  text-align: left;
  line-height: 1;
  width: 50%;
  padding: 8px 2px;
  font-size: 20px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (min-width: 768px) {
    border: 1px solid #000;
    font-size: 1.2rem;
    text-align: center;
  }
`;

const StyledDeskDiv = styled(DeskDiv)`
  width: 100%;
`;

const NavLink = styled.a`
  display: none;
  flex-grow: 1;
  font-size: 20px;
  font-weight: 700;

  line-height: 1;
  text-align: center;
  width: 100%;
  padding: 8px 2px;
  border-bottom: 1px solid #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    border: 1px solid #000;
  }
`;