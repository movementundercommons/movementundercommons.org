import styled from "styled-components";
import Shrub1 from "../assets/figures/shrub-01.png";
import Shrub2 from "../assets/figures/shrub-02.png";
import Shrub3 from "../assets/figures/shrub-03.png";
import { breakpoint, PersonType } from "../constants";
import PersonFigure from "./personFigure";
import MocapContainer from "./mocapContainer";
import { useState, useLayoutEffect } from "react";

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


    @media ${breakpoint.tablet} {
        &.bg-1 {
            bottom: 0px;
            left: -100px;
            z-index: 200;
        }


        &.bg-2 {
            bottom: 0px;
            right: -100px;
            z-index: 200;
        }

        &.bg-3 {
            bottom: 50px;
            left: 0px;
            z-index: -200;
        }
    }
`;

const InSituContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 50px;

    & #mocap-container-moveable {
        width: 60vw;
        max-width: 800px;
    }

    @media ${breakpoint.tablet} {
        margin-top: 100px;
        margin-bottom: 50px;

        #mocap-container-moveable {
            width: 100%;
            max-width: unset;
        }
    }

    @media ${breakpoint.phone} {
        margin-top: 50px;
        margin-bottom: 0px;

        #mocap-container-moveable {
            width: 100%;
            max-width: unset;
        }
    }
`;


const InnerContainer = styled.div`
    min-width: 600px;
`;


const minMocapGraphicWidth = 900;

const InSituCapture = () => {

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

    return <InSituContainer>
        <InnerContainer style={scaleStyle}>
            <MocapContainer moveable={true}>
                <BackgroundImage className="bg-1" src={Shrub1} />
                <BackgroundImage className="bg-2" src={Shrub2} />
                <BackgroundImage className="bg-3" src={Shrub3} />
                <PersonFigure personType={PersonType.PersonType1} />
                <PersonFigure personType={PersonType.PersonType2} />
                <PersonFigure personType={PersonType.PersonType3} />
            </MocapContainer>
        </InnerContainer>
    </InSituContainer>

}

export default InSituCapture;