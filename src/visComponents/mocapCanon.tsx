import styled, { keyframes } from "styled-components";

import Shrub1 from "../assets/figures/shrub-01.png";
import Shrub2 from "../assets/figures/shrub-02.png";
import Shrub3 from "../assets/figures/shrub-03.png";

import BracketLeft from "../assets/graphics/bracket-left.svg";
import BracketRight from "../assets/graphics/bracket-right.svg";

import MocapStickFigure1 from "../assets/figures/mocap-stick-figure-01.png";
import MocapStickFigure2 from "../assets/figures/mocap-stick-figure-02.png";
import MocapStickFigure3 from "../assets/figures/mocap-stick-figure-03.png";
import MocapStickFigure4 from "../assets/figures/mocap-stick-figure-04.png";

/* Note: In the following filenames, the numeric identifiers are in the 
opposite order that they need to be displayed on the screen; the variable 
names reflect the correct ordering on the screen. */
import MocapStickFigure4b from "../assets/figures/mocap-stick-figure-01b.png";
import MocapStickFigure3b from "../assets/figures/mocap-stick-figure-02b.png";
import MocapStickFigure2b from "../assets/figures/mocap-stick-figure-03b.png";
import MocapStickFigure1b from "../assets/figures/mocap-stick-figure-04b.png";

import MocapContainer from "./mocapContainer";
import PersonFigure from "./personFigure";
import { breakpoint, PersonType } from "../constants";
import { bodyTextFont, Paragraph } from "../components/layoutComponents";

import { useLayoutEffect, useState } from "react";


const appear1 = keyframes`
    0% {
        opacity: 0.3;
    }

    25% { 
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
`;

const appear2 = keyframes`
    25% {
        opacity: 0.3;
    }

    50% { 
        opacity: 1;
    }

        100% {
        opacity: 1;
    }
`;

const appear3 = keyframes`
    50% {
        opacity: 0.3;
    }

    75% { 
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
`;

const appear4 = keyframes`
    75% {
        opacity: 0.3;
    }

    100% { 
        opacity: 1;
    }
`;



const FigureContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 600px;
    position: relative;
    height: 175px;

    & img {
        opacity: 0.3;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }

    & img.stage1 {
        animation-name: ${appear1};
    }
    & img.stage2 {
        animation-name: ${appear2};
    }
    & img.stage3 {
        animation-name: ${appear3};
    }
    & img.stage4 {
        animation-name: ${appear4};
    }



`;

const FigureInnerContainer = styled.div`
    text-align: center;
    flex: 1 0;
    max-width: 150px;
    position: relative;

    & img {
        height: 100%;
        opacity: 0.3;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }


`

const RowContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px;
    position: relative;

    @media ${breakpoint.phone} {
        height: 125px;
    }
`;


const AnnotationRowContainer = styled(RowContainer)`
    ${bodyTextFont}
    margin: 0px;
    align-items: center;


    @media ${breakpoint.tablet} {

        p {
            width: 100%;
            max-width: 500px;
            padding: 0px 10px;
        }
    }

`;

const TopAnnotationRow = styled(AnnotationRowContainer)`
    justify-content: flex-start;
    padding-left: 50px;
    margin-top: 0px;
    margin-bottom: 100px;
    align-items: flex-start;


    @media ${breakpoint.tablet} {

        margin-bottom: 25px;
        padding-left: 25px;

    }
`;

const RowInnerContainer = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    justify-content: center;
`;

const BeforeMocapContainer = styled.div`
    ${bodyTextFont}
    font-size: 1rem;
    flex: 1 0;
    width: 150px;
    position: absolute;
    top: 0px;
    left: -225px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;

`;


const AfterMocapContainer = styled.div`
    ${bodyTextFont}
    font-size: 1rem;
    flex: 1 0;
    width: 150px;
    position: absolute;
    top: 0px;
    right: -200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0px;
    padding: 0px;

`;



const MocapCanonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
    width: 100%;
    margin-bottom: 50px;

    @media ${breakpoint.tablet} {
        margin-bottom: 25px;
    }
`;

const SecondaryRowMiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 600px;
    height: fit-content;
    margin: 50px 0px 0px 0px;
    position: relative;


    @media ${breakpoint.laptop} {
        margin: 25px 0px;
    }

    @media ${breakpoint.tablet} {
        margin: 0px;
    }

`;

const BackgroundImage = styled.img`
    position: absolute;
    height: 50%;

    &.bg-1 {
        top: -0px;
        left: -100px;
        z-index: -200;
    }


    &.bg-2 {
        bottom: 10px;
        right: -100px;
        z-index: 200;
    }

    &.bg-3 {
        left: 0px;
        right: 0px;
        z-index: -200;
    }

    &.bg-4 {
        bottom: 10px;
        left: -20px;
        z-index: 200;
    }


`;

const BeforeMocapInnerContainer = styled.div`
    width: 100%;
    width: 120px;
`;

const AfterMocapInnerContainer = styled.div`
    width: 100%;
    width: 120px;
`;

const BracketContainer = styled.div`
    position: absolute;
    top: 0px;
    height: 100%;

    &.left {
        left: -30px;
    }

    &.right {
        right: -20px;
    }

    & img {
        width: 100%;
        height: 100%;
    }
`;

const minMocapGraphicWidth = 1100;

const MocapCanon = () => {

    let [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


    /* NOTE:
    The graphics used to build the motion capture canon figures are complex 
    constructions with HTML, CSS, and SVG. For mobile responsiveness, 
    the strategy employed here is to use CSS to scale down (with transform: scale()) 
    the container element for the figure when window width falls below a 
    minimum size. The code here manages this scaling where needed.
    */
    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    let scaleStyle;
    if (windowWidth < minMocapGraphicWidth) {

        scaleStyle = {
            transform: `scale(${windowWidth / minMocapGraphicWidth})`
        }

    } else {

        scaleStyle = {
            transform: "none"
        }
    }

    return <MocapCanonContainer>
        <TopAnnotationRow>
            <Paragraph>In typical motion capture, movement is extracted in the studio using cameras and sensors. Then, extracted data are used to reproduce that movement for other purposes, e.g., for computer graphics and animation.</Paragraph>
        </TopAnnotationRow>
        <RowContainer style={scaleStyle}>
            <RowInnerContainer>
                <BeforeMocapContainer>
                    <BeforeMocapInnerContainer>
                        <BackgroundImage className="bg-2" src={Shrub2} />
                        <PersonFigure personType={PersonType.PersonType2} />
                        <BackgroundImage className="bg-3" src={Shrub3} />

                    </BeforeMocapInnerContainer>
                </BeforeMocapContainer>
                <MocapContainer moveable={false}>
                    <FigureContainer>
                        <img className="stage1" src={MocapStickFigure1} />
                        <img className="stage2" src={MocapStickFigure2} />
                        <img className="stage3" src={MocapStickFigure3} />
                        <img className="stage4" src={MocapStickFigure4} />
                    </FigureContainer>
                </MocapContainer>
                <AfterMocapContainer>
                    <AfterMocapInnerContainer>
                        <BackgroundImage className="bg-1" src={Shrub1} />
                        <PersonFigure personType={PersonType.PersonType3} />
                        <BackgroundImage className="bg-4" src={Shrub3} />

                    </AfterMocapInnerContainer>
                </AfterMocapContainer>
            </RowInnerContainer>
        </RowContainer>
        <RowContainer style={scaleStyle}>
            <SecondaryRowMiddleContainer>
                <BracketContainer className="left"><img src={BracketLeft} /></BracketContainer>
                <FigureContainer>
                    <FigureInnerContainer><img className="stage1 arrow" src={MocapStickFigure1b} /></FigureInnerContainer>
                    <FigureInnerContainer><img className="stage2 arrow" src={MocapStickFigure2b} /></FigureInnerContainer>
                    <FigureInnerContainer><img className="stage3 arrow" src={MocapStickFigure3b} /></FigureInnerContainer>
                    <FigureInnerContainer><img className="stage4 arrow" src={MocapStickFigure4b} /></FigureInnerContainer>
                </FigureContainer>
                <BracketContainer className="right"><img src={BracketRight} /></BracketContainer>
            </SecondaryRowMiddleContainer>
        </RowContainer>
    </MocapCanonContainer>;

}

export default MocapCanon