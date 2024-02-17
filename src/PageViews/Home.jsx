import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { loadSlim } from "tsparticles-slim";
import "../styles/styles.css";
import Particles from "react-tsparticles";
import particlesConfig from "./particles.json";
import Socials from "../Components/Socials";

function Home() {
  const [id, setId] = useState(0);
  const [isTypewriterDone, setIsTypewriterDone] = useState(false);

  const [currentWord] = useTypewriter({
    words: ["Frontend Developer", "Freelancer", "Open-Source Contributor"],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 50,
    onLoopDone: () => setIsTypewriterDone(true),
  });

  useEffect(() => {
    if (isTypewriterDone) {
      setId(1);
    }
  }, [isTypewriterDone]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <Container>
        <div className="tspar">
          <Particles
            id="tsparticles"
            options={particlesConfig}
            init={particlesInit}
            loaded={particlesLoaded}
          />
        </div>
        <Content>
          <AnimatedHeading>Raj Kasat</AnimatedHeading>
          <h1 style={{ margin: "50px", transition: "opacity 0.5s" }}>
            {id ? (
              <span style={{ opacity: 1 }}>
                Frontend Developer <span style={{ color: "#34495e" }}>|</span>{" "}
                Freelancer
              </span>
            ) : (
              <>
                <span style={{ opacity: 1, color: "white" }}>I am a</span>{" "}
                <span style={{ opacity: isTypewriterDone ? 0 : 1 }}>
                  {currentWord}
                </span>
                {isTypewriterDone && <Cursor cursorColor="#BD53ED" />}
              </>
            )}
          </h1>
          <Socials />
        </Content>
      </Container>
    </>
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
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1e23;
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
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  margin-bottom: 20px;
`;

export default Home;
