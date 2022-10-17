import styled from 'styled-components';

export const FeatureSection = styled.div`
	padding: 140px;
	position: relative;
	margin: 0 auto;
    background-color: #000;

	@media screen and (max-width: 768px) {
		padding: 70px 0;
		margin-top: 10rem;
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
    color: white;
`;

export const FeatureTextWrapper = styled.div`
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
		background-color: #d6ef4b;
		transform: translateX(-50%);
	}
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/* flex-wrap: wrap; */
	margin-top: 4rem;
	grid-gap: 4rem;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.4rem;
		grid-row-gap: 3rem;
		/* grid-gap: 3rem; */
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled.div`
	/* max-width: 33%; */
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 960px) {
		/* max-width: 50%; */
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	&.one {
		background: linear-gradient(130deg, #00b1ec 0%, #0d84ab 100%);
	}
	&.two {
		background: linear-gradient(220deg, #14da4c 0%, #147605 100%);
	}
	&.three {
		background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
	}
	&.four {
		background: linear-gradient(130deg, #e91e63 0%, #860101 100%);
	}
	&.five {
		background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
	}
	&.six {
		background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
	}

	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #ffffff;

	@media screen and (max-width: 768px) {
		/* display: none; */
	}
`;