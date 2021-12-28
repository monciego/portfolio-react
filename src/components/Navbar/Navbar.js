import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavLogo,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
import logo from "../../assets/logo.svg";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 500) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""}>
      <div>
        <NavLogo to="/" onClick={toTop} src={logo} alt="logo" />
      </div>
      <NavMenuList>
        <NavList>
          <StyledNavLinks
            to="home"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            Home
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            Projects
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            About
          </StyledNavLinks>
        </NavList>
      </NavMenuList>
      <StyledCTA
        href="mailto:jerichobantiquete@gmail.com "
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
            get in touch
          </span>
        </span>
      </StyledCTA>

      <Menu>
        <Line width="1.5rem" />
        <Line />
        <Line width="1.5rem" ml="0.5rem" />
      </Menu>
    </StyledNavbar>
  );
};

export default Navbar;
