import styled, { keyframes } from "styled-components";
import { PersonType } from "../constants";

const SVGContainer = styled.svg`

    aspect-ratio: 200 / 350;
    width: 200px;

    &.person1 g {
        animation-delay: 1s;
    }

    &.person2 g {
        animation-delay: 1.5s;
    }

    &.person3 g {
        animation-delay: 2s;
    }

`;



const swing = keyframes`

    0% {
        transform: translateX(3px) translateY(0px);
    }


    50% {
    
        transform: translateX(-3px) translateY(3px);
    
    }

    100% {
        transform: translateX(3px) translateY(0px);
    }


`;

const oscillateUpDown = keyframes`

    0% {
        transform: translateY(5px);
    }


    50% {
    
        transform: translateY(-5px);
    
    }

    100% {
        transform: translateY(5px);
    }

`;

const pivot = keyframes`
    0% {
        transform: rotate(2deg);
    }

    50% {
        transform: rotate(-2deg);
    }

    100% {
        transform: rotate(2deg);
    }

`;

const inflate = keyframes`

    0% {
        transform: scale(1.02);
    }

    50% {
        transform: scale(0.98);    
    }

    100% {
        transform: scale(1.02);
    }

`;

const AnimationContainer = styled.g`

    #head {
        animation-name: ${swing};
        animation-duration: 3s;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;
    }


    #arm-rs {
        animation-name: ${oscillateUpDown};
        animation-duration: 3s;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;
    }


    #arm-ls {
        animation-name: ${pivot};
        animation-duration: 3s;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;    
    }

    #body {
        animation-name: ${inflate};
        animation-duration: 3s;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;    
    }
`;

const PersonFigure1 = () => {

    return (
        <>
            <defs><linearGradient id="linear-gradient" x1="35.1" y1="199.1" x2="121.8" y2="285.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999" /><stop offset="0" stop-color="#b1b1b1" /><stop offset=".2" stop-color="#cdcdcd" /><stop offset=".4" stop-color="#e3e3e3" /><stop offset=".5" stop-color="#f2f2f2" /><stop offset=".7" stop-color="#fcfcfc" /><stop offset="1" stop-color="#fff" /></linearGradient><linearGradient id="linear-gradient-2" x1="52.8" y1="245" x2="102.9" y2="245" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".1" stop-color="rgba(200,179,155,1)" stop-opacity="1" /><stop offset=".3" stop-color="rgba(203,184,161,.9)" stop-opacity=".9" /><stop offset=".4" stop-color="rgba(210,193,173,.8)" stop-opacity=".8" /><stop offset=".6" stop-color="rgba(218,204,188,.7)" stop-opacity=".7" /><stop offset=".7" stop-color="rgba(229,220,208,.5)" stop-opacity=".5" /><stop offset=".9" stop-color="rgba(242,238,232,.2)" stop-opacity=".2" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient><linearGradient id="linear-gradient-3" x1="28.6" y1="111.2" x2="82.8" y2="165.4" xlinkHref="#linear-gradient" /><linearGradient id="linear-gradient-4" x1="59.4" y1="204.4" x2="59.4" y2="77" xlinkHref="#linear-gradient-2" /><linearGradient id="linear-gradient-5" x1="64.4" y1="126.3" x2="140" y2="126.3" xlinkHref="#linear-gradient-2" /><linearGradient id="linear-gradient-6" x1="73.8" y1="198.4" x2="159.1" y2="283.7" xlinkHref="#linear-gradient" /><linearGradient id="linear-gradient-7" x1="156.4" y1="304.5" x2="85.4" y2="181.5" xlinkHref="#linear-gradient-2" /><linearGradient id="linear-gradient-8" x1="97.3" y1="96.4" x2="180.3" y2="179.3" xlinkHref="#linear-gradient" /><linearGradient id="linear-gradient-9" x1="126.4" y1="140" x2="161.3" y2="140" xlinkHref="#linear-gradient-2" /><linearGradient id="linear-gradient-10" x1="85.8" y1="26.9" x2="114.5" y2="55.6" xlinkHref="#linear-gradient" /><linearGradient id="linear-gradient-11" x1="82.8" y1="43.2" x2="123.4" y2="43.2" xlinkHref="#linear-gradient-2" /></defs>
            <AnimationContainer>
                <g id="leg-ls"><path d="M79.8,326.9c-6.2.1-11.8,1.6-14-7.7-5.7-23.8-19.5-35.7-15.2-64.5,4.3-28.8,15-53.9,18.8-85.7,1.4-11.5,11.1-11.9,19.1-7.6,8,4.4,13.6,14.2,10.5,21.3-8.3,18.9-17,53.2-21.1,72.2-4.1,19,1.4,37.5,7.1,52.3,2.6,6.6,3.1,14.1-3.8,18.9-.5.4-.8.8-1.4.8Z" fill="url(#linear-gradient)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M82.8,328.9c-6.2.1-11.8,1.6-14-7.7-5.7-23.8-19.5-35.7-15.2-64.5,4.3-28.8,15-53.9,18.8-85.7,1.4-11.5,11.1-11.9,19.1-7.6,8,4.4,13.6,14.2,10.5,21.3-8.3,18.9-17,53.2-21.1,72.2-4.1,19,1.4,37.5,7.1,52.3,2.6,6.6,3.1,14.1-3.8,18.9-.5.4-.8.8-1.4.8Z" fill="#424242" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M82.8,328.9c-6.2.1-11.8,1.6-14-7.7-5.7-23.8-19.5-35.7-15.2-64.5,4.3-28.8,15-53.9,18.8-85.7,1.4-11.5,11.1-11.9,19.1-7.6,8,4.4,13.6,14.2,10.5,21.3-8.3,18.9-17,53.2-21.1,72.2-4.1,19,1.4,37.5,7.1,52.3,2.6,6.6,3.1,14.1-3.8,18.9-.5.4-.8.8-1.4.8Z" fill="url(#linear-gradient-2)" stroke-width="0" /></g><g id="arm-ls"><path d="M40.7,202.4c-.9.1-1.9,0-2.7-.4-5.8-2.4-9.5-6.4-7.9-13.3,3.9-17.3,9.8-34.4,14.1-51.9,4.3-17.5,5.1-38.6,14-54.5,3.6-6.3,11.5-8.9,17.4-6.2,5.9,2.7,9.7,8.7,5.9,14.6-9.9,15.3-11.4,34.2-15.5,51.6-4.2,17.4-9.9,34.7-14.2,51.9-1.4,5.8-6,7.5-11.1,8.2Z" fill="url(#linear-gradient-3)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M43.7,204.4c-.9.1-1.9,0-2.7-.4-5.8-2.4-9.5-6.4-7.9-13.3,3.9-17.3,9.8-34.4,14.1-51.9,4.3-17.5,5.1-38.6,14-54.5,3.6-6.3,11.5-8.9,17.4-6.2,5.9,2.7,9.7,8.7,5.9,14.6-9.9,15.3-11.4,34.2-15.5,51.6-4.2,17.4-9.9,34.7-14.2,51.9-1.4,5.8-6,7.5-11.1,8.2Z" fill="#424242" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M43.7,204.4c-.9.1-1.9,0-2.7-.4-5.8-2.4-9.5-6.4-7.9-13.3,3.9-17.3,9.8-34.4,14.1-51.9,4.3-17.5,5.1-38.6,14-54.5,3.6-6.3,11.5-8.9,17.4-6.2,5.9,2.7,9.7,8.7,5.9,14.6-9.9,15.3-11.4,34.2-15.5,51.6-4.2,17.4-9.9,34.7-14.2,51.9-1.4,5.8-6,7.5-11.1,8.2Z" fill="url(#linear-gradient-4)" stroke-width="0" /></g><path id="body" d="M84.8,179c-.8-.5-1.2-1.3-1.5-1.9-8.5-16-10.7-25.9-15.6-45.2-4.1-16.2-5.2-20.5,1.5-38,8.1-20.9,11.9-21.2,38.3-26.6,26.4-5.4,37.5.3,30.3,27.7-6,22.8-2.3,47.3-10.8,68.2-9.8,24.2-20.9,31-42.3,15.8Z" fill="url(#linear-gradient-5)" stroke-width="0" /><g id="leg-rs"><path d="M116.8,322.2c-.4,0-.6-.2-1.1-.3-6.4-2.6-7.5-11.3-7.3-16.4.6-13.5-13.1-32.1-9.3-59.1,3.8-27,5.5-45.3,4.8-72.9-.3-11.7,8.8-9.4,15.8-9.8,0,0,0,0,0,0,10.7,6,12.2,11.7,13.8,25.9,3.9,34.2-7.6,41.7-8,56.6-.4,14.9,1.1-7.2-.4,5-1.5,12.1-.9,45.2.7,60.3.6,5.3-3.8,11.1-9.2,10.7Z" fill="url(#linear-gradient-6)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M119.8,324.2c-.4,0-.6-.2-1.1-.3-6.4-2.6-7.5-11.3-7.3-16.4.6-13.5-13.1-32.1-9.3-59.1,3.8-27,5.5-45.3,4.8-72.9-.3-11.7,8.8-9.4,15.8-9.8,0,0,0,0,0,0,10.7,6,12.2,11.7,13.8,25.9,3.9,34.2-7.6,41.7-8,56.6-.4,14.9,1.1-7.2-.4,5-1.5,12.1-.9,45.2.7,60.3.6,5.3-3.8,11.1-9.2,10.7Z" fill="#424242" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M119.8,324.2c-.4,0-.6-.2-1.1-.3-6.4-2.6-7.5-11.3-7.3-16.4.6-13.5-13.1-32.1-9.3-59.1,3.8-27,5.5-45.3,4.8-72.9-.3-11.7,8.8-9.4,15.8-9.8,0,0,0,0,0,0,10.7,6,12.2,11.7,13.8,25.9,3.9,34.2-7.6,41.7-8,56.6-.4,14.9,1.1-7.2-.4,5-1.5,12.1-.9,45.2.7,60.3.6,5.3-3.8,11.1-9.2,10.7Z" fill="url(#linear-gradient-7)" stroke-width="0" /></g><g id="arm-rs"><path d="M143.7,211.8c-.1,0-.3.2-.4.2-5.1-.9-6.4.5-6.7-6.9-.7-19.1-.8-38.3-3.3-59.3-2.5-21.1-11-48.4-9.8-70.5.4-7.4,4.3-10.8,11-11.1,6.7-.3,11.6,6.9,12.1,13.8,1.5,21.3,6.9,46.2,9.4,66,2.5,19.9,3.7,41.5-.4,58.3-1.4,6-7.9,6.7-11.9,9.5Z" fill="url(#linear-gradient-8)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M146.7,213.8c-.1,0-.3.2-.4.2-5.1-.9-6.4.5-6.7-6.9-.7-19.1-.8-38.3-3.3-59.3-2.5-21.1-11-48.4-9.8-70.5.4-7.4,4.3-10.8,11-11.1,6.7-.3,11.6,6.9,12.1,13.8,1.5,21.3,6.9,46.2,9.4,66,2.5,19.9,3.7,41.5-.4,58.3-1.4,6-7.9,6.7-11.9,9.5Z" fill="#424242" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M146.7,213.8c-.1,0-.3.2-.4.2-5.1-.9-6.4.5-6.7-6.9-.7-19.1-.8-38.3-3.3-59.3-2.5-21.1-11-48.4-9.8-70.5.4-7.4,4.3-10.8,11-11.1,6.7-.3,11.6,6.9,12.1,13.8,1.5,21.3,6.9,46.2,9.4,66,2.5,19.9,3.7,41.5-.4,58.3-1.4,6-7.9,6.7-11.9,9.5Z" fill="url(#linear-gradient-9)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /></g><g id="head"><circle cx="100.1" cy="41.2" r="20.3" fill="url(#linear-gradient-10)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><circle cx="103.1" cy="43.2" r="20.3" fill="#424242" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><circle cx="103.1" cy="43.2" r="20.3" fill="url(#linear-gradient-11)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /></g>
            </AnimationContainer>
        </>
    )

}

const PersonFigure3 = () => {

    return (
        <>
            <defs><linearGradient id="p3-linear-gradient" x1="158.2" y1="281.5" x2="86.1" y2="156.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".2" stop-color="rgba(165,148,129,.8)" stop-opacity=".8" /><stop offset=".6" stop-color="rgba(104,96,87,.4)" stop-opacity=".4" /><stop offset=".9" stop-color="rgba(65,63,61,0)" stop-opacity="0" /><stop offset="1" stop-color="#333" stop-opacity="0" /></linearGradient><linearGradient id="p3-linear-gradient-2" x1="155.2" y1="281.5" x2="83.1" y2="156.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".1" stop-color="rgba(195,175,150,1)" stop-opacity="1" /><stop offset=".3" stop-color="rgba(186,166,144,.9)" stop-opacity=".9" /><stop offset=".4" stop-color="rgba(169,152,132,.8)" stop-opacity=".8" /><stop offset=".6" stop-color="rgba(147,133,117,.7)" stop-opacity=".7" /><stop offset=".7" stop-color="rgba(118,108,97,.5)" stop-opacity=".5" /><stop offset=".9" stop-color="rgba(83,78,73,.2)" stop-opacity=".2" /><stop offset="1" stop-color="#333" stop-opacity="0" /></linearGradient><linearGradient id="p3-linear-gradient-3" x1="175.4" y1="212.3" x2="111.3" y2="101.3" gradientTransform="translate(-29.2 29.5) rotate(-11.9)" xlinkHref="#p3-linear-gradient" /><linearGradient id="p3-linear-gradient-4" x1="134.2" y1="233.2" x2="134.2" y2="82.2" gradientTransform="translate(-29.2 29.5) rotate(-11.9)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".4" stop-color="rgba(225,214,201,.9)" stop-opacity=".9" /><stop offset=".9" stop-color="#fff" stop-opacity=".8" /></linearGradient><linearGradient id="p3-linear-gradient-5" x1="164.5" y1="74.8" x2="141.1" y2="34.3" xlinkHref="#p3-linear-gradient" /><linearGradient id="p3-linear-gradient-6" x1="162.6" y1="74.8" x2="139.2" y2="34.3" xlinkHref="#p3-linear-gradient-2" /><linearGradient id="p3-linear-gradient-7" x1="102.3" y1="295" x2="26.1" y2="163" xlinkHref="#p3-linear-gradient" /><linearGradient id="p3-linear-gradient-8" x1="99.3" y1="295" x2="23.1" y2="163" xlinkHref="#p3-linear-gradient-2" /><linearGradient id="p3-linear-gradient-9" x1="125.6" y1="154.7" x2="79.8" y2="75.5" xlinkHref="#p3-linear-gradient" /><linearGradient id="p3-linear-gradient-10" x1="120.6" y1="154.7" x2="74.8" y2="75.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".1" stop-color="rgba(203,184,160,.9)" stop-opacity=".9" /><stop offset=".3" stop-color="rgba(214,199,181,.7)" stop-opacity=".7" /><stop offset=".7" stop-color="rgba(233,225,215,.4)" stop-opacity=".4" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient><linearGradient id="p3-linear-gradient-11" x1="107.7" y1="184.1" x2="46.9" y2="78.8" xlinkHref="#p3-linear-gradient" /><linearGradient id="p3-linear-gradient-12" x1="58.3" y1="201.1" x2="58.3" y2="56.9" gradientTransform="matrix(1,0,0,1,0,0)" xlinkHref="#p3-linear-gradient-4" /></defs>
            <AnimationContainer>
                <g id="leg-rs"><path d="M131.9,294.6c-5.8-2.6-6.7-10-8.2-19.4-2.9-19.8-8.1-21.2-8.8-46.4-.7-25.2-14.9-37.1-19.7-63.2-1.5-8.4,1.5-17.9,10.4-19.2,8.9-1.3,13.6,3,15.8,11.5,6.7,25.9,17.8,27,16.8,53-1,26.1-5.2,39.4,1.3,58.3,4.2,12.3,3,16.9-2.7,24.3-1.3,1.7-3.2,1.9-4.9,1.1Z" fill="url(#p3-linear-gradient)" stroke-width="0" /><path d="M129,294.6c-5.8-2.6-6.7-10-8.2-19.4-2.9-19.8-8.1-21.2-8.8-46.4-.7-25.2-14.9-37.1-19.7-63.2-1.5-8.4,1.5-17.9,10.4-19.2,8.9-1.3,13.6,3,15.8,11.5,6.7,25.9,17.8,27,16.8,53-1,26.1-5.2,39.4,1.3,58.3,4.2,12.3,3,16.9-2.7,24.3-1.3,1.7-3.2,1.9-4.9,1.1Z" fill="#4c4c4c" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M129,294.6c-5.8-2.6-6.7-10-8.2-19.4-2.9-19.8-8.1-21.2-8.8-46.4-.7-25.2-14.9-37.1-19.7-63.2-1.5-8.4,1.5-17.9,10.4-19.2,8.9-1.3,13.6,3,15.8,11.5,6.7,25.9,17.8,27,16.8,53-1,26.1-5.2,39.4,1.3,58.3,4.2,12.3,3,16.9-2.7,24.3-1.3,1.7-3.2,1.9-4.9,1.1Z" fill="url(#p3-linear-gradient-2)" stroke-width="0" /></g><g id="arm-rs"><path d="M155.8,228.2c-4.5.5-10,4.8-12.3-2.3-7.3-22.7-29.6-36-29.4-65.5.2-29.5,11.1-45.6,12.4-74.1.4-8.8,7.3-7.3,14.1-6.7,6.8.6,9.8,12.8,10.4,17.4,1.9,14.5-11.3,45.1-13.5,60.1-2.2,15,8.5,40.7,19.6,54,4,4.8,3.2,10.5,0,16-.3.5-.8,1-1.2,1.1Z" fill="url(#p3-linear-gradient-3)" stroke-width="0" /><path d="M152.9,229.3c-4.5.5-10,4.8-12.3-2.3-7.3-22.7-29.6-36-29.4-65.5.2-29.5,11.1-45.6,12.4-74.1.4-8.8,7.3-7.3,14.1-6.7,6.8.6,9.8,12.8,10.4,17.4,1.9,14.5-11.3,45.1-13.5,60.1-2.2,15,8.5,40.7,19.6,54,4,4.8,3.2,10.5,0,16-.3.5-.8,1-1.2,1.1Z" fill="url(#p3-linear-gradient-4)" stroke="#fff" stroke-miterlimit="10" stroke-width=".5" /></g><g id="head"><path d="M174.7,46.2c2.5,12.9-3.4,29-18.5,31.9-15.1,2.9-27.3-8.6-28.1-22.6-.8-13.9,11.3-22.1,22.9-25.3,11.6-3.2,21.2,3.1,23.7,16Z" fill="url(#p3-linear-gradient-5)" stroke-width="0" /><path d="M172.8,46.2c2.5,12.9-3.4,29-18.5,31.9-15.1,2.9-27.3-8.6-28.1-22.6-.8-13.9,11.3-22.1,22.9-25.3,11.6-3.2,21.2,3.1,23.7,16Z" fill="#4c4c4c" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M172.7,46.2c2.5,12.9-3.4,29-18.5,31.9-15.1,2.9-27.3-8.6-28.1-22.6-.8-13.9,11.3-22.1,22.9-25.3,11.6-3.2,21.2,3.1,23.7,16Z" fill="url(#p3-linear-gradient-6)" stroke-width="0" /></g><g id="leg-ls"><path d="M54.4,322.6c-.6.3-1.2.2-1.8,0-7.1-3.2-6.9-12.7-6.1-22,2.2-26.6,6.9-33.7,16.3-59.2,9.5-25.6,6-59.2-2.9-86-2.4-7.1,1.3-14.3,8.6-16.3,7.3-2,12.8-.5,15.7,7.8,11.1,31.3,20.7,72,4.2,101-16.4,29-21.7,21.5-24.6,49.8-1,9.2-2,21-9.4,25Z" fill="url(#p3-linear-gradient-7)" stroke-width="0" /><path d="M51.5,322.6c-.6.3-1.2.2-1.8,0-7.1-3.2-6.9-12.7-6.1-22,2.2-26.6,6.9-33.7,16.3-59.2,9.5-25.6,6-59.2-2.9-86-2.4-7.1,1.3-14.3,8.6-16.3,7.3-2,12.8-.5,15.7,7.8,11.1,31.3,20.7,72,4.2,101-16.4,29-21.7,21.5-24.6,49.8-1,9.2-2,21-9.4,25Z" fill="#4c4c4c" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M51.4,322.6c-.6.3-1.2.2-1.8,0-7.1-3.2-6.9-12.7-6.1-22,2.2-26.6,6.9-33.7,16.3-59.2,9.5-25.6,6-59.2-2.9-86-2.4-7.1,1.3-14.3,8.6-16.3,7.3-2,12.8-.5,15.7,7.8,11.1,31.3,20.7,72,4.2,101-16.4,29-21.7,21.5-24.6,49.8-1,9.2-2,21-9.4,25Z" fill="url(#p3-linear-gradient-8)" stroke-width="0" /></g><g id="body"><path d="M89.7,173.2c-3.8,1.1-8.1,0-11.2-2.6-13.8-11.9-11.2-31.5-7.6-47.9,2.4-11.1,10.4-17.3,8.7-30.3-2.6-19.1,21.8-35.9,41.8-26.4,20,9.6,28.7,22.3,22.3,44.6-4.3,15.1-13.8,30.5-22.4,40.8-9.8,11.9-18.5,18-31.7,21.8Z" fill="url(#p3-linear-gradient-9)" stroke-width="0" /><path d="M84.8,173.2c-3.8,1.1-8.1,0-11.2-2.6-13.8-11.9-11.2-31.5-7.6-47.9,2.4-11.1,10.4-17.3,8.7-30.3-2.6-19.1,21.8-35.9,41.8-26.4,20,9.6,28.7,22.3,22.3,44.6-4.3,15.1-13.8,30.5-22.4,40.8-9.8,11.9-18.5,18-31.7,21.8Z" fill="#4c4c4c" stroke-width="0" /><path d="M84.7,173.2c-3.8,1.1-8.1,0-11.2-2.6-13.8-11.9-11.2-31.5-7.6-47.9,2.4-11.1,10.4-17.3,8.7-30.3-2.6-19.1,21.8-35.9,41.8-26.4,20,9.6,28.7,22.3,22.3,44.6-4.3,15.1-13.8,30.5-22.4,40.8-9.8,11.9-18.5,18-31.7,21.8Z" fill="url(#p3-linear-gradient-10)" stroke-width="0" /></g><g id="arm-ls"><path d="M79.2,200.1c-3.8.8-4.3,2-9.4-1-32-19-32.4-42.3-46.4-72.2-1.6-3.4-1-7.5,1.4-10.4,18.3-22.1,30.7-45.3,58.1-58.1,8.1-3.8,11.3,0,14.1,6.9,2.9,6.9-.3,12.9-7.8,18.9-20.3,16.2-27.4,15.1-39.2,38.3-1.2,2.4-1.4,5.1-.6,7.6,6.3,18.6,11.5,38.5,25.6,52.5,4.7,4.7,7.4,7.5,7.1,13.6-.1,2.4-.5,3.4-3,3.9Z" fill="url(#p3-linear-gradient-11)" stroke-width="0" /><path d="M77.3,200.1c-3.8.8-4.3,2-9.4-1-32-19-32.4-42.3-46.4-72.2-1.6-3.4-1-7.5,1.4-10.4,18.3-22.1,30.7-45.3,58.1-58.1,8.1-3.8,11.3,0,14.1,6.9,2.9,6.9-.3,12.9-7.8,18.9-20.3,16.2-27.4,15.1-39.2,38.3-1.2,2.4-1.4,5.1-.6,7.6,6.3,18.6,11.5,38.5,25.6,52.5,4.7,4.7,7.4,7.5,7.1,13.6-.1,2.4-.5,3.4-3,3.9Z" fill="#4c4c4c" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M77.2,200.1c-3.8.8-4.3,2-9.4-1-32-19-32.4-42.3-46.4-72.2-1.6-3.4-1-7.5,1.4-10.4,18.3-22.1,30.7-45.3,58.1-58.1,8.1-3.8,11.3,0,14.1,6.9,2.9,6.9-.3,12.9-7.8,18.9-20.3,16.2-27.4,15.1-39.2,38.3-1.2,2.4-1.4,5.1-.6,7.6,6.3,18.6,11.5,38.5,25.6,52.5,4.7,4.7,7.4,7.5,7.1,13.6-.1,2.4-.5,3.4-3,3.9Z" fill="url(#p3-linear-gradient-12)" stroke="#fff" stroke-miterlimit="10" stroke-width=".5" /></g>
            </AnimationContainer>

        </>

    );
}

const PersonFigure2 = () => {

    return (
        <>
            <defs><linearGradient id="p2-linear-gradient" x1="154.2" y1="176.4" x2="94" y2="72.3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".2" stop-color="rgba(165,148,129,.8)" stop-opacity=".8" /><stop offset=".6" stop-color="rgba(104,96,87,.4)" stop-opacity=".4" /><stop offset=".9" stop-color="rgba(65,63,61,0)" stop-opacity="0" /><stop offset="1" stop-color="#333" stop-opacity="0" /></linearGradient><linearGradient id="p2-linear-gradient-2" x1="156.6" y1="176.4" x2="96.4" y2="72.3" gradientUnits="userSpaceOnUse"><stop offset=".2" stop-color="#c7b299" /><stop offset=".3" stop-color="rgba(195,175,150,1)" stop-opacity="1" /><stop offset=".4" stop-color="rgba(186,166,144,.9)" stop-opacity=".9" /><stop offset=".6" stop-color="rgba(169,152,132,.8)" stop-opacity=".8" /><stop offset=".7" stop-color="rgba(147,133,117,.7)" stop-opacity=".7" /><stop offset=".8" stop-color="rgba(118,108,97,.5)" stop-opacity=".5" /><stop offset=".9" stop-color="rgba(83,78,73,.2)" stop-opacity=".2" /><stop offset="1" stop-color="#333" stop-opacity="0" /></linearGradient><linearGradient id="p2-linear-gradient-3" x1="153.3" y1="294.7" x2="89.9" y2="184.9" xlinkHref="#p2-linear-gradient" /><linearGradient id="p2-linear-gradient-4" x1="155.7" y1="294.7" x2="92.3" y2="184.9" xlinkHref="#p2-linear-gradient-2" /><linearGradient id="p2-linear-gradient-5" x1="123.7" y1="183.2" x2="63.4" y2="78.7" xlinkHref="#p2-linear-gradient" /><linearGradient id="p2-linear-gradient-6" x1="126.1" y1="183.2" x2="65.8" y2="78.7" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#c7b299" /><stop offset=".8" stop-color="rgba(228,219,207,.8)" stop-opacity=".8" /><stop offset="1" stop-color="#fff" stop-opacity=".7" /></linearGradient><linearGradient id="p2-linear-gradient-7" x1="114.5" y1="317.2" x2="45.6" y2="197.9" xlinkHref="#p2-linear-gradient" /><linearGradient id="p2-linear-gradient-8" x1="116.9" y1="317.2" x2="48" y2="197.9" xlinkHref="#p2-linear-gradient-2" /><linearGradient id="p2-linear-gradient-9" x1="75.3" y1="61.6" x2="51.4" y2="20.3" xlinkHref="#p2-linear-gradient" /><linearGradient id="p2-linear-gradient-10" x1="77.7" y1="61.6" x2="53.8" y2="20.3" xlinkHref="#p2-linear-gradient-2" /><linearGradient id="p2-linear-gradient-11" x1="117.4" y1="164.3" x2="65.8" y2="74.8" xlinkHref="#p2-linear-gradient" /><linearGradient id="p2-linear-gradient-12" x1="95.9" y1="157.1" x2="95.9" y2="83.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c7b299" /><stop offset=".4" stop-color="rgba(225,214,201,.9)" stop-opacity=".9" /><stop offset=".9" stop-color="#fff" stop-opacity=".8" /></linearGradient></defs>
            <AnimationContainer>
                <g id="arm-rs"><path d="M150.9,178.2c-3,1.3-5.3,3-8.7-.1-13.9-12.8-24.4-28.9-36.4-43.9-3.7-21.8-10.1-33.1-9-55.9.4-8.8,3.3-11,10.3-11.5,7-.4,9.5,1.6,14.1,11.2,10.9,22.9-.3,23.5,2.2,44.7,10.2,15.8,9.2,24.2,25.9,36.2,7.5,5.4,7.9,7.8,6.2,14.7-.7,2.7-2.6,3.7-4.6,4.6Z" fill="url(#p2-linear-gradient)" stroke-width="0" /><path d="M153.4,178.2c-3,1.3-5.3,3-8.7-.1-13.9-12.8-24.4-28.9-36.4-43.9-3.7-21.8-10.1-33.1-9-55.9.4-8.8,3.3-11,10.3-11.5,7-.4,9.5,1.6,14.1,11.2,10.9,22.9-.3,23.5,2.2,44.7,10.2,15.8,9.2,24.2,25.9,36.2,7.5,5.4,7.9,7.8,6.2,14.7-.7,2.7-2.6,3.7-4.6,4.6Z" fill="#5b5b5b" stroke-width="0" /><path d="M153.3,178.2c-3,1.3-5.3,3-8.7-.1-13.9-12.8-24.4-28.9-36.4-43.9-3.7-21.8-10.1-33.1-9-55.9.4-8.8,3.3-11,10.3-11.5,7-.4,9.5,1.6,14.1,11.2,10.9,22.9-.3,23.5,2.2,44.7,10.2,15.8,9.2,24.2,25.9,36.2,7.5,5.4,7.9,7.8,6.2,14.7-.7,2.7-2.6,3.7-4.6,4.6Z" fill="url(#p2-linear-gradient-2)" stroke-width="0" /></g><g id="leg-rs"><path d="M131,307.4c-.5.4-.4.5-1.5,1-13.6,5.8-12-4.3-8.6-17.6,5.7-21.9,0-33.4,2.9-51.2.3-1.8.2-3.6-.3-5.3-5.4-19.3-20.1-24.3-23.8-37.7-2-7.3.5-15.7,5.5-20.1,5-4.4,11.5-5.5,17.9-1.2,13.2,8.8,19.4,38.2,26,55.5.8,2.1,1,4.4.6,6.6-3,18.5-4.2,36.8-8.1,54.6-1.9,8.8-4.9,10.3-10.7,15.4Z" fill="url(#p2-linear-gradient-3)" stroke-width="0" /><path d="M133.5,307.4c-.5.4-.4.5-1.5,1-13.6,5.8-12-4.3-8.6-17.6,5.7-21.9,0-33.4,2.9-51.2.3-1.8.2-3.6-.3-5.3-5.4-19.3-20.1-24.3-23.8-37.7-2-7.3.5-15.7,5.5-20.1,5-4.4,11.5-5.5,17.9-1.2,13.2,8.8,19.4,38.2,26,55.5.8,2.1,1,4.4.6,6.6-3,18.5-4.2,36.8-8.1,54.6-1.9,8.8-4.9,10.3-10.7,15.4Z" fill="#5b5b5b" stroke-width="0" /><path d="M133.4,307.4c-.5.4-.4.5-1.5,1-13.6,5.8-12-4.3-8.6-17.6,5.7-21.9,0-33.4,2.9-51.2.3-1.8.2-3.6-.3-5.3-5.4-19.3-20.1-24.3-23.8-37.7-2-7.3.5-15.7,5.5-20.1,5-4.4,11.5-5.5,17.9-1.2,13.2,8.8,19.4,38.2,26,55.5.8,2.1,1,4.4.6,6.6-3,18.5-4.2,36.8-8.1,54.6-1.9,8.8-4.9,10.3-10.7,15.4Z" fill="url(#p2-linear-gradient-4)" stroke-width="0" /></g><g id="body"><path d="M95,198c-15.1-.8-23.2-15.4-25.8-29.3-3.5-19.2-12-35.8-20.3-54.7-6.9-15.7,5.1-31.3,21.7-39.3,16.6-8,41.8-7.4,46.2,12.7,5.3,24,1.8,41.5,3.2,63.9,1.2,18.7-5,32.2-18.5,44.6-1.7,1.6-4.2,2.2-6.5,2.1Z" fill="url(#p2-linear-gradient-5)" stroke-width="0" /><path d="M97.5,198c-15.1-.8-23.2-15.4-25.8-29.3-3.5-19.2-12-35.8-20.3-54.7-6.9-15.7,5.1-31.3,21.7-39.3,16.6-8,41.8-7.4,46.2,12.7,5.3,24,1.8,41.5,3.2,63.9,1.2,18.7-5,32.2-18.5,44.6-1.7,1.6-4.2,2.2-6.5,2.1Z" fill="#5b5b5b" stroke-width="0" /><path d="M97.4,198c-15.1-.8-23.2-15.4-25.8-29.3-3.5-19.2-12-35.8-20.3-54.7-6.9-15.7,5.1-31.3,21.7-39.3,16.6-8,41.8-7.4,46.2,12.7,5.3,24,1.8,41.5,3.2,63.9,1.2,18.7-5,32.2-18.5,44.6-1.7,1.6-4.2,2.2-6.5,2.1Z" fill="url(#p2-linear-gradient-6)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /></g><g id="leg-ls"><path d="M73.4,335.3c-.5,0-.8-.4-1.3-.8-6.6-5.6-5.3-9.4-3.8-17.2,3.6-18.2,12.7-36.2,9.6-58.2-3-22-12-39.6-10.8-64.3.4-9.1,3.1-12.5,10.3-14.5,7.2-1.9,14.5,4.4,17.3,10,7.7,15.9,5.8,47.5,8,70.8,2.2,23.2-8.9,48.1-16,69.1-2.7,8-7.9,5.7-13.3,5.1Z" fill="url(#p2-linear-gradient-7)" stroke-width="0" /><path d="M75.9,335.3c-.5,0-.8-.4-1.3-.8-6.6-5.6-5.3-9.4-3.8-17.2,3.6-18.2,12.7-36.2,9.6-58.2-3-22-12-39.6-10.8-64.3.4-9.1,3.1-12.5,10.3-14.5,7.2-1.9,14.5,4.4,17.3,10,7.7,15.9,5.8,47.5,8,70.8,2.2,23.2-8.9,48.1-16,69.1-2.7,8-7.9,5.7-13.3,5.1Z" fill="#5b5b5b" stroke-width="0" /><path d="M75.8,335.3c-.5,0-.8-.4-1.3-.8-6.6-5.6-5.3-9.4-3.8-17.2,3.6-18.2,12.7-36.2,9.6-58.2-3-22-12-39.6-10.8-64.3.4-9.1,3.1-12.5,10.3-14.5,7.2-1.9,14.5,4.4,17.3,10,7.7,15.9,5.8,47.5,8,70.8,2.2,23.2-8.9,48.1-16,69.1-2.7,8-7.9,5.7-13.3,5.1Z" fill="url(#p2-linear-gradient-8)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /></g><g id="head"><path d="M83.4,48c-1.3,12.4-16.7,22.4-29.6,15-12.9-7.3-13.4-21.9-8.5-33.3,4.9-11.4,16.6-18,27.1-12.5,10.4,5.5,12.2,18.3,11,30.7Z" fill="url(#p2-linear-gradient-9)" stroke-width="0" /><path d="M85.9,48c-1.3,12.4-16.7,22.4-29.6,15-12.9-7.3-13.4-21.9-8.5-33.3,4.9-11.4,16.6-18,27.1-12.5,10.4,5.5,12.2,18.3,11,30.7Z" fill="#5b5b5b" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /><path d="M85.8,48c-1.3,12.4-16.7,22.4-29.6,15-12.9-7.3-13.4-21.9-8.5-33.3,4.9-11.4,16.6-18,27.1-12.5,10.4,5.5,12.2,18.3,11,30.7Z" fill="url(#p2-linear-gradient-10)" stroke="#fff" stroke-miterlimit="10" stroke-width=".3" /></g><g id="arm-ls"><path d="M141.4,150.2c-1.1,1.1-2.1,1.5-4.1,2.1-21.4,6.8-40.5,6.7-61-2.4-1.8-.8-3.2-2.1-4.1-3.8-11.8-20.9-23-18.7-29.3-43.7-2-8-1-13.1,4.2-16.8,5.3-3.8,10.3-2.5,14.3,2.5,10.8,13.5,17.3,25.6,24.5,40.9s3.3,4.1,5.8,4.7c16.6,4.1,22.4,4.3,40.5-1.7,6.9-2.3,10.3,2.2,12.3,7.4,1.5,3.7-.3,7.8-3.2,10.6Z" fill="url(#p2-linear-gradient-11)" stroke-width="0" /><path d="M143.9,150.2c-1.1,1.1-2.1,1.5-4.1,2.1-21.4,6.8-40.5,6.7-61-2.4-1.8-.8-3.2-2.1-4.1-3.8-11.8-20.9-23-18.7-29.3-43.7-2-8-1-13.1,4.2-16.8,5.3-3.8,10.3-2.5,14.3,2.5,10.8,13.5,17.3,25.6,24.5,40.9,1.1,2.4,3.3,4.1,5.8,4.7,16.6,4.1,22.4,4.3,40.5-1.7,6.9-2.3,10.3,2.2,12.3,7.4,1.5,3.7-.3,7.8-3.2,10.6Z" fill="#5b5b5b" stroke-width="0" /><path d="M143.8,150.2c-1.1,1.1-2.1,1.5-4.1,2.1-21.4,6.8-40.5,6.7-61-2.4-1.8-.8-3.2-2.1-4.1-3.8-11.8-20.9-23-18.7-29.3-43.7-2-8-1-13.1,4.2-16.8,5.3-3.8,10.3-2.5,14.3,2.5,10.8,13.5,17.3,25.6,24.5,40.9s3.3,4.1,5.8,4.7c16.6,4.1,22.4,4.3,40.5-1.7,6.9-2.3,10.3,2.2,12.3,7.4,1.5,3.7-.3,7.8-3.2,10.6Z" fill="url(#p2-linear-gradient-12)" stroke="#fff" stroke-miterlimit="10" stroke-width=".5" /></g>
            </AnimationContainer>

        </>

    );
}

const PersonFigurePrototype = ({ personType }: { personType: PersonType }) => {

    let drawingComponent = null;
    let useClassName = "";
    if (personType === PersonType.PersonType1) {

        drawingComponent = <PersonFigure1 />;
        useClassName = "person1";

    } else if (personType === PersonType.PersonType2) {

        drawingComponent = <PersonFigure2 />;
        useClassName = "person2";

    } else if (personType === PersonType.PersonType3) {

        drawingComponent = <PersonFigure3 />;
        useClassName = "person3";

    }
    return <SVGContainer className={useClassName} viewBox="0 0 200 350">
        {drawingComponent}
    </SVGContainer>;

}

export default PersonFigurePrototype;