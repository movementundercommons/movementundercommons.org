import styled, { keyframes } from "styled-components";
import PersonWhole from "../assets/figures/person-split-01.png";
import PersonBody from "../assets/figures/person-split-03.png";
import PersonFigure from "./personFigure";
import { breakpoint, PersonType } from "../constants";

const slideLeft = keyframes`

    0% {
        translate: 0%;
        opacity: 0;
    }

    25% {
        translate: -100%;
        opacity: 1;
    }

    100% {
        translate: -100%;
        opacity: 1;
    }

`;

const slideRight = keyframes`

    0% {
        translate: 0%;
        opacity: 0;
    }

    25% {
        translate: 0%;
        opacity: 0;
    }

    50% {
        translate: 100%;
        opacity: 1;
    }

    100% {
        translate: 100%;
        opacity: 1;
    }

`;

const PersonSplitContainer = styled.div`

    position: relative;
    margin: auto;
    margin-left: 150px;
    margin-top: 50px;
    aspect-ratio: 200 / 350;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media ${breakpoint.laptop} {
        margin-left: auto;
        margin-right: auto;
    }

    @media ${breakpoint.tablet} {
        width: 100px;
        margin-top: 10px;
        margin-bottom: 50px;
    }

`;

const PersonLayer = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & * {
        width: 100%;
        max-width: 150px !important;
    }

`;



const WholePersonLayer = styled(PersonLayer)`

`;

const BodyLayer = styled(PersonLayer)`
    z-index: -100;
    animation: ${slideRight} 5s ease-in-out infinite;
    animation-fill-mode: forwards;
    opacity: 0;


    &:before {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-size: 3rem;
        color: #cccccc;
        content: "→";
        position: absolute;
        top: 50%;
        left: -50%;
        width: 100%;
        text-align: center;
        display: block;
    }

    &:after {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-size: 1rem;
        font-style: italic;
        content: "Body";
        position: absolute;
        bottom: -30px;
        left: 0px;
        width: 100%;
        text-align: center;
        display: block;
    }


`;

const MovementLayer = styled(PersonLayer)`
    z-index: -100;
    animation: ${slideLeft} 5s ease-in-out infinite;
    animation-fill-mode: forwards;
    opacity: 0;

    &:before {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-size: 3rem;
        color: #cccccc;
        content: "←";
        position: absolute;
        top: 50%;
        right: -60%;
        width: 100%;
        text-align: center;
        display: block;
    }

    &:after {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-size: 1rem;
        font-style: italic;
        content: "Movement";
        position: absolute;
        bottom: -30px;
        right: 0px;
        width: 100%;
        text-align: center;
        display: block;
    }
`;



const PersonSplit = () => {

    return <PersonSplitContainer>
        <WholePersonLayer><img src={PersonWhole} /></WholePersonLayer>
        <MovementLayer><PersonFigure personType={PersonType.PersonOutline} /></MovementLayer>
        <BodyLayer><img src={PersonBody} /></BodyLayer>
    </PersonSplitContainer>;


}


export default PersonSplit;