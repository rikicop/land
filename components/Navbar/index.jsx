import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import { Link as LinkScroll } from "react-scroll";


// Styled Components
import { Nav, LinksContainerNav, TextLogoNav, LogoImg } from "../Navbar/NavbarElements.jsx"

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <Nav>
      <div className="brand">
        <LogoImg className="logo">
          <Image
            src={logo}
            alt="logo"
            className="brandLogo"
            height={40}
            width={40}
          />
        </LogoImg>

        <TextLogoNav>
          Ricardo Otálora
        </TextLogoNav>

        <div className="toggle">
          {navState ? (
            <CgClose
              onClick={() => setNavState(false)}
              color="var(--primary-color)"
            />
          ) : (
            <FaBars
              onClick={() => setNavState(true)}
              color=" var(--primary-color)"
            />
          )}
        </div>
      </div>
      <LinksContainerNav className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <LinkScroll
            to="hero"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Principal</li>
          </LinkScroll>
          <LinkScroll
            to="cursos"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Portfolio</li>
          </LinkScroll>

          <LinkScroll
            to="skills"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Skills</li>
          </LinkScroll>

          <LinkScroll
            to="footer"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Contact</li>
          </LinkScroll>
        </ul>
      </LinksContainerNav>
    </Nav>
  );
};

export default Navbar;
