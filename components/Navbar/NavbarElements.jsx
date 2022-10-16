import styled from "styled-components";

export const Nav = styled.nav`

  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 35px;
  box-shadow: 5px 5px 10px rgba(0,0,0, 0.1); 

  .brandLogo {
    padding-top: 5px;
    border-radius: 10px;
  } 
  
  .brand {
    display: flex;
    align-items: center;
  
    .toggle {
      display: none;
    }
  }
  /* .links es un DIV */
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;

    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      a:first-child {
        background-color: var(--primary-color);
        color: #000000;
        border-radius: 0.3rem;
      }
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        font-weight: bold;
        &:hover {
          background-color: var(--primary-color);
          color: #000000;
          border-radius: 0.3rem;
        }
      }
    }

    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: #666;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 321px) and (max-width: 1080px) {
    align-items: center;
    justify-content: center;
    height: 20px;
    position: relative;
    margin: 0;
    z-index: 1;
    flex-direction: column;
    padding: 35px;


    .brand {
      padding: 0px;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    /* El Div de Links  */
    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      position: absolute;
      background-color: #fff;
      flex-direction: column;
      margin-top: 4rem;
      width: 100%;
      padding: 1rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
  
  @media screen and (min-width: 2px) and (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    li {
      display: none;
      font-size: 5px;

    }
    .links {
      display: none;
    }
  }
  
`;


export const LinksContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TextLogoNav = styled.div`
  font-size: 25px;
  font-weight: bold;
  @media screen and (min-width: 2px) and (max-width: 320px) {
    font-size: 20px;
  }
  
`;

export const LogoImg = styled.div`
  padding: 7px 3px 0 0;
`;
