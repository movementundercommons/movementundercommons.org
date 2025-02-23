import styled, { keyframes } from "styled-components";
import { PersonType } from "../constants";
import PersonFigure from "./personFigure";

import Shrub1 from "../assets/figures/shrub-01.png";
import Shrub2 from "../assets/figures/shrub-02.png";
import Shrub3 from "../assets/figures/shrub-03.png";


const MocapContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 600px;
    height: fit-contents;
    margin: 100px;
    margin-top: 300px;
    position: relative;

    & svg {
        flex: 1 0 33%;
        width: auto;
        max-width: 100px;
    }

`;

const slideDown = keyframes`

    0% {
        translate: 0px -100px;
        opacity: 0%;
    }

    100% {
        translate: 0px 0px;
        opacity: 100%;
    }

`;

const appear = keyframes`

    0% {
        opacity: 0%;
    }

    100% {
        opacity: 100%;
    }

`;

const frameAnimationSpeed = "1.5s";
const easingFunction = "ease-in-out";

const MocapFrame = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 175px;
    border: 1px solid #c0c0c0;
    border-radius: 2px;
    z-index: 100;

    animation: ${slideDown} ${frameAnimationSpeed} ${easingFunction} 1;
    animation-fill-mode: forwards;
`;


const skewAngle: number = 45;

const MocapFloor = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 75px;
    border: 1px solid #c0c0c0;
    border-radius: 2px;
    background-color: #f0f0f0;
    transform: skewX(${skewAngle}deg);
    transform-origin: bottom right;
    z-index: -100;
    opacity: 0%;

    animation: ${appear} ${frameAnimationSpeed} ${easingFunction} 1;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;

`;

const MocapBacking = styled.div`
    position: absolute;
    bottom: 74px;
    width: 100%;
    height: 175px;
    border: 1px solid #c0c0c0;
    border-radius: 2px;
    z-index: -200;
    transform: translateX(calc(tan(${skewAngle}deg) * 75px * -1));

    animation: ${slideDown} ${frameAnimationSpeed} ${easingFunction} 1;
    animation-fill-mode: forwards;

`;

const MocapTop = styled.div`

    position: absolute;
    top: -75px;
    width: 100%;
    height: 75px;
    border: 1px solid #c0c0c0;
    border-radius: 2px;
    border-top: none;
    border-bottom: none;
    transform: skewX(${skewAngle}deg);
    transform-origin: bottom right;
    z-index: 100;

    animation: ${slideDown} ${frameAnimationSpeed} ${easingFunction} 1;
    animation-fill-mode: forwards;

`;

const BackgroundImage = styled.img`
    position: absolute;
    height: 50%;

    &.bg-1 {
        bottom: 0px;
        left: -150px;
        z-index: 200;
    }


    &.bg-2 {
        bottom: 0px;
        right: -150px;
        z-index: 200;
    }

    &.bg-3 {
        bottom: 75px;
        left: 0px;
        z-index: -200;
    }

`;

const MocapContainer = () => {

    return <MocapContainerDiv>
        <BackgroundImage className="bg-1" src={Shrub1} />
        <BackgroundImage className="bg-2" src={Shrub2} />
        <BackgroundImage className="bg-3" src={Shrub3} />
        <MocapFrame />
        <MocapFloor />
        <MocapBacking />
        <MocapTop />
        <PersonFigure personType={PersonType.PersonType1} />
        <PersonFigure personType={PersonType.PersonType2} />
        <PersonFigure personType={PersonType.PersonType3} />
    </MocapContainerDiv>;

}

export default MocapContainer;