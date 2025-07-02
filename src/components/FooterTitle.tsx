import { useEffect, useState } from "react";
import styled from "styled-components";
import { darkGrayscaleTriplet, primaryOrangeDesaturatedTriplet, titleTextPathDefinitions } from "./layoutComponents";


const FallingFooterTitleContainer = styled.svg`

    width: 100%;
    overflow: visible;
    position: absolute;
    padding: 0px 20px;
    top: 20px;
    left: 0px;
    z-index: 0;
    mix-blend-mode: screen;

    & path {
        stroke-width: 0.5;
        stroke: rgb(${darkGrayscaleTriplet});
        fill:rgb(238, 238, 238);
        fill: rgb(${primaryOrangeDesaturatedTriplet.join(", ")});
    }
`;


const Letter = ({ pathD }: { pathD: string, letterIndex: number }) => {

    return <path d={pathD} />;
}

const FallingFooterTitle = () => {

    let [bottomDistance, setBottomDistance] = useState<number>();
    const maxDistanceFromBottom = 300;


    useEffect(() => {
        const handleScroll = () => {

            let distanceFromBottom = document.body.offsetHeight - (window.innerHeight + window.pageYOffset);
            if (maxDistanceFromBottom && distanceFromBottom > maxDistanceFromBottom) {
                setBottomDistance(maxDistanceFromBottom);
            } else if (distanceFromBottom < 0) {
                setBottomDistance(distanceFromBottom);
            } else {
                setBottomDistance(distanceFromBottom);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let transformString = bottomDistance && bottomDistance >= 0 ? `translateY(${bottomDistance * -0.5}px)` : "translateY(0px)";
    let opacityValue = bottomDistance && bottomDistance <= 300 ? 1 - (bottomDistance / 300) : 1;

    /* 
    Darker Grotesque:
    To make the text fill the fully width of the screen, the 
    manually computed viewBox is (0, 0, 778.9, 33.2)
    */
    return <FallingFooterTitleContainer viewBox={"0 0 778.9 33.2"} >
        <g style={{ opacity: opacityValue, transform: transformString }}>
            {titleTextPathDefinitions.map((p: string, index: number) => {
                return <Letter pathD={p} letterIndex={index} key={`falling_footer_letter_${index}`} />
            })}
        </g>
    </FallingFooterTitleContainer>
}

export default FallingFooterTitle;