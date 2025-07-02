import styled, { keyframes } from "styled-components";

const MocapContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 600px;
    height: fit-content;
    margin: 0px;
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

    50% {
        translate: 0px 0px;
        opacity: 100%;
    }


    100% {
        translate: 0px 0px;
        opacity: 100%;
    }

`;

const appear = keyframes`

    0% {
        opacity: 0%;
        margin-bottom: -50px;
    }



    50% {
        opacity: 100%;
        margin-bottom: 0px;
    }

    100% {
        opacity: 100%;
        margin-bottom: 0px;
    }

`;

const frameAnimationSpeed = "2.5s";
const easingFunction = "ease-in-out";

const MocapFrame = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 175px;
    border: 1px solid #c0c0c0;
    border-radius: 2px;
    z-index: 100;

    &.move {
        animation: ${slideDown} ${frameAnimationSpeed} ${easingFunction} infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
    }

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


    &.move {
        opacity: 0%;
        animation: ${appear} ${frameAnimationSpeed} ${easingFunction} infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;

    }

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

    &.move {
        animation: ${slideDown} ${frameAnimationSpeed} ${easingFunction} infinite;
        animation-fill-mode: forwards;    
        animation-direction: alternate;

    }

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

    &.move {
        animation: ${slideDown} ${frameAnimationSpeed} ${easingFunction} infinite;
        animation-fill-mode: forwards;    
        animation-direction: alternate;
    }

`;

const MocapLabel = styled.span`
    position: relative;
    display: block;
    width: fit-content;
    margin: 0px auto;
    margin-top: -10pt;
    text-align: center;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14pt;
    color: #AAAAAA;
    transform: skewX(-${skewAngle}deg);
    padding: 3px 10px;
    background: #FFFFFF;
`;

const MocapContainer = ({ children, moveable }: { children: any, moveable: boolean }) => {


    let useClassName = moveable ? "move" : undefined;
    return <MocapContainerDiv id={moveable ? "mocap-container-moveable" : "mocap-container"}>
        <MocapFrame className={useClassName} />
        <MocapFloor className={useClassName} />
        <MocapBacking className={useClassName} />
        <MocapTop className={useClassName} ><MocapLabel>Motion Capture</MocapLabel></MocapTop>
        {children}
    </MocapContainerDiv>;

}

export default MocapContainer;