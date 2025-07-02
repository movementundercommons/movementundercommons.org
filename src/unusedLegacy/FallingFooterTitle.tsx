import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { darkGrayscaleTriplet, primaryOrangeDesaturatedTriplet, titleTextPathDefinitions } from "../components/layoutComponents";


const FallingFooterTitleContainer = styled.svg`

    width: 100%;
    max-width: 1200px;
    overflow: visible;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -100;
    mix-blend-mode: screen;

    & path {
        stroke-width: 0.5;
        stroke: rgb(${darkGrayscaleTriplet});
        fill:rgb(238, 238, 238);
        fill: rgb(${primaryOrangeDesaturatedTriplet.join(", ")});
    }
`;





const Letter = ({ pathD, bottomDistance }: { pathD: string, letterIndex: number, bottomDistance: number }) => {

    const pathRef = useRef<SVGPathElement | null>(null);

    let [fallSpeed] = useState<number>(Math.random() * (0.8 - 0.3) + 0.3);


    let transformString = `translateY(${bottomDistance * fallSpeed * -1}px)`;
    let opacityValue = bottomDistance > 500 ? 0 : 1 - (bottomDistance / 500);

    return <path ref={pathRef} d={pathD} style={{ transform: transformString, opacity: opacityValue }} />;
}

const FallingFooterTitle = () => {

    let [bottomDistance, setBottomDistance] = useState<number>();
    let [fallingFooterHeight, setFallingFooterHeight] = useState<number>();
    let [maxDistanceFromBottom, setMaxDistanceFromBottom] = useState<number>();
    const fallingFooterRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {

        if (fallingFooterRef && fallingFooterRef.current) {
            const { height } = fallingFooterRef.current.getBoundingClientRect();
            setFallingFooterHeight(height);
        }
    }, [fallingFooterRef]);

    useEffect(() => {
        const maxDistance = window.innerHeight;
        setMaxDistanceFromBottom(maxDistance);
        setBottomDistance(maxDistance);

    }, []);



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

    /* 
    Darker Grotesque:
    778.9 33.2
    */
    return <FallingFooterTitleContainer viewBox={"0 0 778.9 33.2"} ref={fallingFooterRef} style={{ top: `${fallingFooterHeight ? -0.5 * fallingFooterHeight : 0}px` }}>
        {titleTextPathDefinitions.map((p: string, index: number) => {
            return <Letter pathD={p} letterIndex={index} bottomDistance={bottomDistance ? bottomDistance : 0} key={`falling_footer_letter_${index}`} />
        })}
    </FallingFooterTitleContainer>
}

export default FallingFooterTitle;