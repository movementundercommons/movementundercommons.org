import styled, { keyframes } from "styled-components";
import Background from "./Background";


const fadeInOut = keyframes`

    0% {
        opacity: 1;
    }


    75% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }

`

const TransitionElement = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 1000;
    background-color: #ffffff;

    opacity: 0;
    pointer-events: none;
        transition: opacity 1s;

    &.visible {
        // animation: ${fadeInOut} 1s 1;
        // animation-fill-mode: forwards;
        opacity: 1;
        pointer-events: all;
    }



`;


const PageTransitionContainer = () => {

    // const { isLoading, setIsLoading } = useContext(LoadingContext);

    // let className = isLoading ? "visible" : "";
    // document.getElementById("page-transition-container")?.classList.add("visible");
    // const transitionTimeout = setTimeout(() => {
    //   document.getElementById("page-transition-container")?.classList.remove("visible");

    // }, 1000);

    // return () => clearTimeout(transitionTimeout);


    return <TransitionElement id="page-transition-container" className={"visible"}>
        <Background />
    </TransitionElement>

}

export default PageTransitionContainer;