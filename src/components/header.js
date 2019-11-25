import React, { useState } from "react";
//styled components
import styled from "styled-components";
//import constant
import { device } from "../constant/device";
// reach router
import { Link, Match } from "@reach/router";
//Images for compoments
import logo from "../img/big-plant-logo.png";
import menu from "../img/menu-icon.png";
import backIcon from "../img/back-arrow.png";

//styles
const Wrapper = styled.header`
  background-color: ${props => props.theme.backgroundColor};
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
`;

const HeaderContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px, 8px;

  @media ${device.tablet} {
    padding: 20px 64px;
  }
`;

const Image = styled.img`
  width: 40px;
  @media ${device.tablet} {
    width: 100px;
  }
`;
const NavCenter = styled.div`
  order: 5;
  flex-basis: 50%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.textColor};

  @media ${device.tablet} {
    order: 2;
    flex-basis: 50%;
  }
`;
const NavLeft = styled(NavCenter)`
  order: ${props => (props.activeMenu ? "2" : "1")};
  flex-basis: 50%;
  text-align: left;

  @media ${device.tablet} {
    flex-basis: 25%;
  }
`;
const NavRight = styled(NavCenter)`
  order: ${props => (props.activeMenu ? "1" : "2")};
  height: ${props => (props.activeMenu ? "100vh" : "")};
  flex-basis: ${props => (props.activeMenu ? "100%" : "50%")};
  justify-content: flex-end;
  text-align: right;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${device.tablet} {
    order: 3;
    display: flex;
    padding: 0;
    align-items: flex-start;
    flex-direction: row;
    flex-basis: 25%;
  }
`;
const NavBottom = styled.div`
  order: 4;
  flex-basis: 25%;
  img {
    width: 35px;
  }
  @media ${device.tablet} {
    flex-basis: 100%;
    margin-top: 30px;
  }
`;
const MobileNavContainer = styled.div`
  display: inline-block
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
  `;
//width: ${props => (props.activeMenu ? "100%" : "150px")};
const DeskNav = styled.nav`
  display: ${props => (props.activeMenu ? "block" : "none")};
  flex-shrink: 2;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1;
  text-align: center;
  margin: 0 6px;
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
  @media ${device.tablet} {
    display: flex;
    position: relative;
  }
`;

const DeskDiv = styled.div`
  flex-grow: 1;
  font-weight: 600;
  text-align: left;
  line-height: 1;

  padding: 8px 6px;
  font-size: 20px;

  &:hover {
    background-color: ${props => props.theme.buttonHover};
    color: ${props => props.theme.textHover};
  }
  @media ${device.tablet} {
    border: 1px solid #000;
    font-size: 1.2rem;
    text-align: center;
  }
`;
const NavLinkContainer = styled.div`
  @media ${device.tablet} {
    background-color: ${props => props.theme.backgroundColor};
    position: absolute;
    top: 36px;
    right: 0px;
    border: 1px solid #000;
  }
`;

const NavLink = styled.a`
  display: none;
  flex-grow: 1;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  line-height: 1;
  text-align: left;
  padding: 8px 32px;

  &:hover {
    background-color: ${props => props.theme.buttonHover};
    color: ${props => props.theme.textHover};
  }
  @media ${device.tablet} {
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding: 8px 2px;
    font-size: 16px;
    width: 127px;
    text-align: center;
    &:last-child {
      border: none;
    }
  }
`;

function MobileNav(props) {
  return (
    <MobileNavContainer
      onClick={() => {
        props.setActiveMenu(!props.activeMenu);
      }}
    >
      <Image src={menu} alt="logo" />
    </MobileNavContainer>
  );
}

function DesktopNav(props) {
  return (
    <>
      <DeskNav activeMenu={props.activeMenu}>
        <DeskDiv>About</DeskDiv>
        <NavLinkContainer>
          <NavLink>Our team</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Water us</NavLink>
        </NavLinkContainer>
      </DeskNav>

      <DeskNav activeMenu={props.activeMenu}>
        <DeskDiv>Buy us plants</DeskDiv>
        <NavLinkContainer>
          <NavLink>Thanks</NavLink>
        </NavLinkContainer>
      </DeskNav>
    </>
  );
}

function Header(props) {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <Wrapper>
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

          <Match path="/detail/:plantId">
            {props =>
              props.match ? (
                <NavBottom>
                  <Link to="/">
                    <img src={backIcon} alt={"backIcon"} />
                  </Link>
                </NavBottom>
              ) : (
                <NavBottom></NavBottom>
              )
            }
          </Match>
        </HeaderContainer>
      </Wrapper>
    </Wrapper>
  );
}

export { Header };
