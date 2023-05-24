import React from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 10%;
  text-align: center;
  transition: box-shadow 0.3s ease;
`;
const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 2% 4%;
  font-size: 15px;
  color: #fff;
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ff8300;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIcon = styled.i`
  font-size: 24px;
  color: #888;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfilePicture src="https://i.imgur.com/KykRUCV.jpeg" />
      <ProfileName>James Carson</ProfileName>
      <ProfileDescription>
        UI/UX Designer <br /> Front End Developer
      </ProfileDescription>
      <Button>Message</Button>
      <Button className="ms-2">Following</Button>
      <SocialIconsContainer>
        <SocialIcon className="fa-brands fa-linkedin" />
        <SocialIcon className="fa-brands fa-github" />
        <SocialIcon className="fa-brands fa-youtube" />
        <SocialIcon className="fa-brands fa-twitter" />
      </SocialIconsContainer>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
