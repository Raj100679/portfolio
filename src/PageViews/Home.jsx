import React from 'react';
import styled, { keyframes } from 'styled-components';
import "../styles/styles.css";

function Home() {
  return (
    <Container>
      <Content>
        <AnimatedHeading>Raj Kasat</AnimatedHeading>
        <DescriptionList>
          <li>Frontend Developer</li>
          <li>Freelancer</li>
        </DescriptionList>
      </Content>
      <AnimatedBlock />
      <AnimatedBlock/>
    </Container>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width:100wh;
  height:100vh;
  position: relative;
  display: flex;
  flex-direction:center;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('your-image-url.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  overflow:hidden;
`;

const Content = styled.div`
  text-align: center;
`;

const AnimatedHeading = styled.h1`
  animation: ${fadeIn} 1s ease-in-out;
  font-family: 'Roboto', sans-serif; 
  font-size: 48px;
  margin-bottom: 20px;
`;

const DescriptionList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0;
`;

DescriptionList.displayName = 'StyledList';

const moveAround = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(50%, 50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;

const AnimatedBlock = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #FF5733; // Customize the color as needed
  border-radius: 50%;
  animation: ${moveAround} 5s linear infinite;
`;

export default Home;
