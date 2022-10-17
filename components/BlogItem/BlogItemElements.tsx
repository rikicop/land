import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  background-color: white;
  &:hover {
    transform: scale(1.03);
  }
  &:hover  .footer-wrapper .btn-wrapper .btn-read {
    background: #fbaa18;
    border: 2px solid #f7e30f;
    color: black;
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
      color: #fbaa18;
      margin: 0 1rem;
    }
    .card-excerpt {
      color: #6c757d;
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
        border: 2px solid #000000;
        background: transparent;
        color: #fbaa18;
        border-radius: 1rem;
        transition: background 200ms ease-in, color 200ms ease-in;
    }
  }
    
  }
`;


