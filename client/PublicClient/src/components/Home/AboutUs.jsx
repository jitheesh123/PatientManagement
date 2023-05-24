import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  background-image: url('https://cutewallpaper.org/22/health-care-wallpapers/2561412435.jpg');
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 15%;

  @media (max-width: 768px) {
    padding: 10%;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  margin: 5%;
  margin-left: 50%;
  color: #070606;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff8300;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="about">
      <ContentContainer>
        <Title>About Us</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          dapibus turpis. Curabitur in mi tincidunt, sollicitudin orci ut,
          tempor mi. Suspendisse potenti. Nulla auctor arcu at mauris aliquet,
          ac elementum urna rutrum.
        </Description>
        <Button>Learn More</Button>
      </ContentContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
