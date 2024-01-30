import React from 'react';
import styled, {keyframes} from 'styled-components';



function Home() {
    return (
        <>
        <PartialPage>
            <SpContainer>
                <Frame5>
                    <AnimatedSpan>DEBATERS'</AnimatedSpan>
                    <AnimatedSpan>COUNCIL</AnimatedSpan>
                    <AnimatedSpan>SRI LANKA</AnimatedSpan>
                </Frame5>
            </SpContainer>
        </PartialPage>
        <PartialPage>
            <SpContainer>
                <Frame5>
                    <AnimatedSpan>DEBATERS'</AnimatedSpan>
                    <AnimatedSpan>COUNCIL</AnimatedSpan>
                    <AnimatedSpan>SRI LANKA</AnimatedSpan>
                </Frame5>
            </SpContainer>
        </PartialPage>
        <PartialPage>
            <SpContainer>
                <Frame5>
                    <AnimatedSpan>DEBATERS'</AnimatedSpan>
                    <AnimatedSpan>COUNCIL</AnimatedSpan>
                    <AnimatedSpan>SRI LANKA</AnimatedSpan>
                </Frame5>
            </SpContainer>
        </PartialPage>
        </>
    );
}

const blurFadeIn = keyframes`
  0% {
    opacity: 0;
    text-shadow: 0px 0px 40px #fff;
    transform: scale(1.3);
  }
  50% {
    opacity: 0.5;
    text-shadow: 0px 0px 10px #fff;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0px 0px 1px #fff;
    transform: scale(1);
  }`;

const PartialPage = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;`;

const SpContainer = styled.div` `;

const Frame5 = styled.h2`
  font-size: 5em;
  animation: none;
  color: transparent;
  text-shadow: 0px 0px 1px #fff;`;

const AnimatedSpan = styled.span`
  animation: ${blurFadeIn} 1.5s ease-in 1s backwards;
  color: transparent;
  margin-right: 0.5em;
  text-shadow: 0px 0px 1px #fff;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }`;
export default Home;
