import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  background-color: #f5f5f5;
  padding: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333333;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgba(217, 153, 2, 0.1);
  }
`;

const Icon = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333333;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
`;

const Service = () => {
  return (
    <ServiceContainer id="services">
      <Title>Our Services</Title>
      <ServiceGrid>
        <ServiceCard>
          <Icon
            src="https://thumbs.dreamstime.com/b/red-heart-cardiology-medical-design-over-white-background-vector-illustration-152934836.jpg"
            alt="Cardiology Icon"
          />
          <ServiceTitle>Cardiology</ServiceTitle>
          <ServiceDescription>
            We provide advanced cardiology services, including diagnosis,
            treatment, and rehabilitation for heart-related conditions.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <Icon
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZo66sGkhajIj4xiso_x1euRJ2014mbGUjMoMdOyf8_n1YVShtGLFSuorEpbSrBBfjcglw9VyO-w&usqp=CAU&ec=48665699"
            alt="Psychology Icon"
          />
          <ServiceTitle>Psychology</ServiceTitle>
          <ServiceDescription>
            Our psychology department offers comprehensive care for mental
            health and well-being, including counseling and therapy services.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <Icon
            src="https://st2.depositphotos.com/2454953/11604/i/950/depositphotos_116045930-stock-photo-dermatology-word-cloud-concept-5.jpg"
            alt="Dermatology Icon"
          />
          <ServiceTitle>Dermatology</ServiceTitle>
          <ServiceDescription>
            Our dermatology experts provide comprehensive care for skin-related
            conditions, including diagnosis, treatment, and cosmetic procedures.
          </ServiceDescription>
        </ServiceCard>
      </ServiceGrid>
    </ServiceContainer>
  );
};

export default Service;
