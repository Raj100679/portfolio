import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 140px;
  
  background-color: #1d1e23;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 20px;
`;


const Content = styled.div`
  p {
    margin-bottom: 15px;
    line-height: 1.6;
    font-size: 20px;
  }
`;

const About = () => {
  return (
    
      <AboutContainer>
        <Title>About Me</Title>
        <Content>
          <p>
            Hey, I am Raj Kasat, a passionate Frontend Developer. I love
            creating beautiful and responsive websites using ReactJS and
            TailwindCSS.
          </p>
          <p>
            I am currently pursuing a BTech in Computer Engineering from
            Vishwakarma Institute Of Information Technology, Pune. I actively
            contribute to open-source projects and have significant experience
            in Competitive Programming, which has greatly enhanced my
            problem-solving skills.
          </p>
          <p>
            Outside of my professional life, I enjoy watching Anime and TV
            Shows, going on treks, listening to music, and spending time with my
            family and friends.
          </p>
          <p>
            Thank you for visiting my portfolio project. Feel free to explore
            and reach out if you have any questions or inquiries.
          </p>
        </Content>
      </AboutContainer>
  );
};

export default About;
