import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  background-color: white;
  &:hover {
    transform: scale(1.03);
  }
 
  .card-head {
    .image-wrapper {
      padding: 1rem 1rem 0rem 1rem;
      img {
        /* filter: brightness(95%); */
        border-radius: 1rem;
      }
    }
    .card-title {
      color: var(--secondary-color);
      margin: 0 1rem;
    }
    .card-excerpt {
      color: var(--tertiary-color);
      padding: 0 1rem;
    }
  }
 
  .footer-wrapper {
    padding: 0.6rem 1rem;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    hr{
      margin-top: 5px;
      position: absolute;
      width: 90%;
      align-self: center;
    } 
    .more-info{
      color: #000000;
      text-align: left;
    }
    .btn-wrapper{
      padding-top: 10px;
      position: relative;
      .btn-read {    
        padding: 1rem;
        font-family: inherit;
        font-weight: bold;
        font-size: 1rem;
        margin: 1rem;
        border: 2px solid  var(--tertiary-color);
        background: transparent;
        color: var(--secondary-color);
        cursor: pointer;
        border-radius: 1rem;
        transition: background 200ms ease-in, color 200ms ease-in;
        &:hover {
          background: var(--secondary-color);
          border: 0.5px solid var(--primary-color);
          color: black;
        }

    }
  }
    
  }
`;


