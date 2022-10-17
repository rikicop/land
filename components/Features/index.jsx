import React from 'react';
import {
    Container,
    FeatureText,
    FeatureSection,
    FeatureTitle,
    FeatureWrapper,
    FeatureColumn,
    FeatureImageWrapper,
    FeatureName,
    FeatureTextWrapper,
} from './FeaturesElements';

import { featuresData } from '../../data/FeaturesData';

const Features = () => {
    return (
        <FeatureSection id="skills">
            <Container>
                <FeatureTextWrapper>
                    <FeatureTitle>Skills</FeatureTitle>
                </FeatureTextWrapper>
                <FeatureWrapper>
                    {featuresData.map((el, index) => (
                        <FeatureColumn key={index}>
                            <FeatureImageWrapper className={el.imgClass}>
                                {el.icon}
                            </FeatureImageWrapper>
                            <FeatureName>{el.name}</FeatureName>
                            <FeatureText>{el.description}</FeatureText>
                        </FeatureColumn>
                    ))}
                </FeatureWrapper>
            </Container>
        </FeatureSection>
    );
};

export default Features;