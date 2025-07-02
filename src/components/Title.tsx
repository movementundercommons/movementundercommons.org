import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { darkGrayscaleTriplet, titleTextPathDefinitions } from "./layoutComponents";



const AnimatedTitleContainer = styled.svg`

    width: 100%;
    max-width: 1200px;
    overflow: visible;

    & path {
        filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
        stroke-width: 0.5;
    }
`;



const Letter = ({ pathD }: { pathD: string }) => {

    const pathRef = useRef<SVGPathElement | null>(null);
    let [pathLength, setPathLength] = useState<number>();
    let [distance, setDistance] = useState<number>(Math.round(100 + Math.random() * 60) * -1);

    let [fillProgress, setFillProgress] = useState<number>(0);

    let [fillSpeed] = useState<number>(Math.random() * (0.8 - 0.4) + 0.4);


    useEffect(() => {

        if (pathRef && pathRef.current && !pathLength) {
            const totalPathLength = pathRef.current.getTotalLength();
            setPathLength(totalPathLength);
        }

    }, [pathRef]);


    useEffect(() => {


        if (!pathLength) return;

        const pathInterval = setInterval(() => {

            setDistance((currentDistance: number) => {
                if (currentDistance < pathLength) {
                    return currentDistance + fillSpeed;
                } else {
                    clearInterval(pathInterval);
                    return currentDistance;
                }
            });


        }, 5);

        return () => clearInterval(pathInterval);


    }, [pathLength]);


    useEffect(() => {

        if (!pathLength) return;
        if (distance < pathLength) return;

        const fillInterval = setInterval(() => {

            setFillProgress((currentProgress: number) => {
                if (currentProgress < 1) {
                    return currentProgress + 0.001;
                } else {
                    clearInterval(fillInterval);
                    return currentProgress;
                }
            });


        }, 5);

        return () => clearInterval(fillInterval);


    }, [distance]);


    const textFillColor = `rgba(${darkGrayscaleTriplet.join(", ")}, ${fillProgress})`;
    let strokeColor;
    if (pathLength) {
        if (distance >= 0) {
            if (distance < pathLength) {
                strokeColor = `rgba(${darkGrayscaleTriplet.join(", ")}, ${distance / pathLength})`;
            } else {
                strokeColor = `rgba(${darkGrayscaleTriplet.join(", ")}, 1)`;
            }
        } else {
            strokeColor = `rgba(${darkGrayscaleTriplet.join(", ")}, 0)`;
        }
    } else {
        strokeColor = `rgba(${darkGrayscaleTriplet.join(", ")}, 0)`;
    }

    let transformString;
    const maxTranslateX = 50;
    if (pathLength) {

        if (distance >= 0) {
            transformString = `translateX(${-maxTranslateX + maxTranslateX * (distance / pathLength)}px)`;
        } else {
            transformString = `translateX(${-1 * maxTranslateX}px)`;
        }
    } else {
        transformString = `translateX(${-1 * maxTranslateX}px)`;
    }

    return <path ref={pathRef} strokeDasharray={`${distance < 0 ? 0 : distance} ${pathLength || "100%"}`} d={pathD} fill={textFillColor} stroke={strokeColor} style={{ transform: transformString }} />;
}

const Title = () => {

    /* 

    Darker Grotesque:
    778.9 33.2
    */

    return <AnimatedTitleContainer viewBox={"0 0 778.9 33.2"} id="test_svg">
        {titleTextPathDefinitions.map((p: string, index: number) => {
            return <Letter pathD={p} key={`title_letter_${index}`} />
        })}
    </AnimatedTitleContainer>
}

export default Title;