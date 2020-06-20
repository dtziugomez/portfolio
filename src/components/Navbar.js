import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { ProductConsumer } from "../context/Context";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { handleSidebar, sidebarOpen, handleClose } = value;
        return (
          <NavWrapper show={sidebarOpen}>
            <div className="header-container">
              <nav>
                <div className="logoBtn" target="_blank">
                  <a href="http://www.linkedin.com/in/deyvi-tziu">
                    {/* <Link
                    to="http://www.linkedin.com/in/deyvi-tziu"
                    onClick={handleClose}
                  > */}
                    <img src="/photos/work.svg" alt="imagen" />
                    {/* </Link> */}
                  </a>
                  <div className="btn" onClick={handleSidebar}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
                <ul className="links" onClick={handleClose}>
                  {value.links.map(links => {
                    return (
                      <li key={links.id}>
                        <Link to="/">{links.link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.div`
  position: sticky !important;
  top: 0 !important;
  z-index: 6;
  background: #666666;
  transition: all 0.5s ease-in-out;
  opacity: 1;

  .logoBtn img {
    display: block;
    padding: 0 0;
    width: 100px;
    height: 60px;
    padding: 2px;
  }

  .header-container {
    width: 100%;
    z-index: 5;
  }

  .bar {
    width: 35px;
    margin: 5px;
    padding: 2px;
    background: #fff;
  }
  .btn {
    border: 1px solid #f6f6f6;
    display: inline-block;
    corsor: pointer;
  }

  .logoBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid gray;
  }

  .links {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 76px;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    width: 400px;
    trasnform: ${props => (props.show ? "translate(0%)" : "translate(-100%)")};
  }

  .links li a {
    color: #fff;
    text-transform: capitalize;
    padding: 10px;
    display: block;
    transition: all 0.5s ease-in-out;
    border: 1px solid transparent;
    border-bottom: 1px solid transparent;
    font-size: 18px;
  }

  .links li a:hover {
    color: #41e1b3;
    padding: 10px 25px;
    border-bottom: 1px solid #049fe1;
    background: rgba(0, 0, 0, 1);
  }

  /*responsive*/
  @media screen and (min-width: 660px) {
    .links {
      transition: all 0s ease-in-out !important;
    }
  }

  @media screen and (min-width: 664px) {
    .header-container {
      margin: 0 auto;
      width: 100%;
    }

    .btn {
      display: none;
    }

    nav {
      display: flex;
      position: relative;
      justify-content: space-between;
      padding: 0;
      max-width: 1180px;
      margin: 0 auto;
    }

    .links {
      position: relative;
      transition: all 0s ease-in-out !important;
      display: flex;
      margin-right: 10px;
      justify-content: space-between;
      top: auto;
      align-items: center;
      width: auto;
      background: transparent;
      transform: ${props => (props.show ? "translate(0%)" : "translate(0%)")};
    }

    .links li a {
      margin: 0 2px;
      display: inline-block;
      height: auto;
      padding: 10px;
    }

    .links li a:hover {
      margin: 0 2px;
      padding: 10px;
      border: 1px solid #049fe1;
      background: transparent;
    }

    .logoBtn {
      border-bottom: 0;
    }
  }

  @media screen and (min-width: 960px) {
    .logoBtn img {
      display: block;
      padding: 0;
    }
  }
`;
