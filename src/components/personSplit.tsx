import styled, { keyframes } from "styled-components";

import PersonWhole from "../assets/figures/person-split-01.png";
import PersonBody from "../assets/figures/person-split-02.png";
import PersonMovement from "../assets/figures/person-split-03.png";


const slideLeft = keyframes`

    0% {
        translate: 0px;
    }

    25% {
        translate: -200px;
    }

    100% {
        translate: -200px;
    }

`;


const slideRight = keyframes`

    0% {
        translate: 0px;
    }

    25% {
        translate: 200px;
    }

    100% {
        translate: 200px;
    }

`;

const fade = keyframes`

    0% {
        opacity: 100%;
    }

    25% {
        opacity: 30%;
    }

    100% {
        opacity: 30%;
    }

`;

const PersonSplitContainer = styled.div`

    position: relative;
    aspect-ratio: 200 / 350;
    width: 200px;

`;

const PersonLayer = styled.div`
    position: absolute;
    top: 0px;

    & img {
        width: 100%;
    }

`;



const WholePersonLayer = styled(PersonLayer)`

    z-index: 100;
    animation: ${fade} 3s ease-in-out infinite;
    animation-fill-mode: forwards;
`;

const BodyLayer = styled(PersonLayer)`
    z-index: -100;
    animation: ${slideLeft} 3s ease-in-out infinite;
    animation-fill-mode: forwards;
`;

const MovementLayer = styled(PersonLayer)`
    z-index: -100;
    animation: ${slideRight} 3s ease-in-out infinite;
    animation-fill-mode: forwards;

`;



const PersonSplit = () => {


    return <PersonSplitContainer>
        <WholePersonLayer><img src={PersonWhole} /></WholePersonLayer>
        <BodyLayer><img src={PersonBody} /></BodyLayer>
        <MovementLayer><img src={PersonMovement} /></MovementLayer>
    </PersonSplitContainer>;


}


export default PersonSplit;