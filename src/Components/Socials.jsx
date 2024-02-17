import React from "react";
import styled from "styled-components";
import LeetCode from "../icons/LeetCode";
import "../styles/styles.css";

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const LeetCodeLink = styled.a`
  
  &:hover svg{
    fill: #ff8400;
  }
`;

function Socials() {
  return (
    <SocialsContainer>
      <LeetCodeLink
        href="https://leetcode.com/Maxx_1007/"
      >
        <LeetCode />
      </LeetCodeLink>
      <SocialLink
        href="https://github.com/Raj100679"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/raj-kasat-a25a78213/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </SocialLink>
      <SocialLink href="mailto:raj.kasat10@gmail.com">
        <i className="fas fa-envelope"></i>
      </SocialLink>
    </SocialsContainer>
  );
}

export default Socials;
