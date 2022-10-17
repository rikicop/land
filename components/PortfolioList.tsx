
import styled from "styled-components";
import { IndexPageProps } from "typings";
import ProjectItem from "./ProjectItem";
//import styles from "../styles/Card.module.css";



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 30rem));
    padding: 1rem;
  }
`;

export const FeatureTextWrapper = styled.div`
  margin-top: 8.5rem;
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;

	&:before {
		width: 40px;
		height: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: #fbaa18;
		transform: translateX(-50%);
	}
`;


const Title = styled.h1`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
  color: black;
`;

const PortfolioList = ({ data, title }: IndexPageProps) => {
  return (
    <section id="cursos">
      <FeatureTextWrapper>
        <Title>{title}</Title>
      </FeatureTextWrapper>
      <Wrapper>
        {data.map((article, index) => (
          <ProjectItem data={article} key={index} />
        ))}
      </Wrapper>
    </section>
  );
};

export default PortfolioList;
