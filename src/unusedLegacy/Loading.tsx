import styled, { keyframes } from "styled-components";
import { motion } from "motion/react";
import { primaryOrangeTriplet } from "../components/layoutComponents";

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #333333;
    background-color: #ffffff;

    opacity: transition 1s;

`;


const sizeAnimation = keyframes`
    0% {
        width: 10px;
        height: 10px;
    }

    50% {
        width: 30px;
        height: 30px;
    }

    100% {
        width: 10px;
        height: 10px;
    }
`;

const Circle = styled.div`
    width: 25px;
    height: 25px;
    background-color: rgb(${primaryOrangeTriplet.join(",")});
    border-radius: 50%;
    display: inline-block;
    margin: 0px 5px;
    animation: ${sizeAnimation} 2s infinite;

    &.c1 {
        animation-delay: 0s;
    }

    &.c2 {
        animation-delay: 0.5s;
    }

    &.c3 {
        animation-delay: 1s;
    }

`;

const CirclesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading = () => {

    const variants = {
        "visible": { opacity: 1, transition: { when: "beforeChildren" } },
        "hidden": { opacity: 0, transitionDelay: "1s", transition: { when: "afterChildren" } }
    }

    return <motion.div key="loading" initial="hidden" animate="visible" exit="hidden" variants={variants}>

        <LoadingContainer>
            <CirclesContainer>
                <Circle className="c1" />
                <Circle className="c2" />
                <Circle className="c3" />
            </CirclesContainer>
        </LoadingContainer>

    </motion.div>


}

export default Loading;