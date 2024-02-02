import React from 'react';
import { PartialPage, SpContainer, Frame5, AnimatedSpan } from './HomeStyles'; // Adjust the import path as necessary

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
                    {/*picture of a dragon*/}
                    <img src="https://www.w3schools.com/w3images/map.jpg" alt="Map" width="100%" />
                </SpContainer>
            </PartialPage>
            <PartialPage>
                <SpContainer>
                    <img src="https://www.w3schools.com/w3images/paris.jpg" alt="Paris" width="100%" />
                </SpContainer>
            </PartialPage>
        </>
    );
}

export default Home;
