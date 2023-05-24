import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  background-color: #f5f5f5;
  margin-top: 50px;
  text-align: center;
  padding: 10%;

  @media (max-width: 768px) {
    padding: 5%;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const TestimonialList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TestimonialItem = styled.li`
  font-size: 18px;
  margin-bottom: 30px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const QuoteIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 20px;
    top: -15px;
  }
`;

const Testimonials = () => {
  return (
    <Section id="Testimonials">
      <Title>Testimonials</Title>
      <Subtitle>
        Here are some testimonials from our satisfied clients:
      </Subtitle>
      <TestimonialList>
        <TestimonialItem>
          <QuoteIcon icon={faQuoteLeft} />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          mauris vitae lacus ullamcorper ultricies."
        </TestimonialItem>
        <TestimonialItem>
          <QuoteIcon icon={faQuoteLeft} />
          "Duis eleifend magna nec orci sodales commodo. Fusce venenatis ligula
          non velit pretium, eu tempus odio imperdiet."
        </TestimonialItem>
        <TestimonialItem>
          <QuoteIcon icon={faQuoteLeft} />
          "Vestibulum tempus finibus enim vel mattis. Sed eget ipsum vitae urna
          semper tincidunt."
        </TestimonialItem>
      </TestimonialList>
    </Section>
  );
};

export default Testimonials;
