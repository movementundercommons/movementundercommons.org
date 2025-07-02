import styled, { keyframes } from "styled-components";
import HeroVideoFile from "../assets/media/timeremapped_1_animation_rotation.mp4";
import AnimatedTitle from "./Title";
import { darkGrayscaleTriplet, primaryOrangeTriplet, secondaryOrangeHexcode } from "./layoutComponents";

import { interpolateRgb, color } from "d3";
import { useEffect, useRef, useState } from "react";
import { breakpoint } from "../constants";

const primaryGray = "rgb(60, 60, 60)";
const darkGrayBackground = "rgb(70, 70, 70)";

const videoBackgroundGray = "rgba(240, 240, 240, 1)";
const videoBackgroundGrayOpacity0 = "rgba(240, 240, 240, 0)";
const titleContainerBackgroundColor = "rgba(240,240,240,0.8)";

const HeroContainer = styled.div`
    font-family: "Darker Grotesque", sans-serif;
    width: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

`;


const HeroVideoAlignmentContainer = styled.div`
    position: sticky;
    top: 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: end;
    background: ${videoBackgroundGray};
`

const HeroVideoContainer = styled.div`
    width: 90vh;
    height: 100vh;
    margin: 0px;
    z-index: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HeroVideoEl = styled.video`
    height: 110vh;
    margin-top: -5vh;
    height: 150vh;
`;


const TitleContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 50px;
    padding-bottom: 50vh;
    margin: 0px;
    margin-top: -50vh;
    color: ${primaryGray};
    z-index: 100;
    background: ${titleContainerBackgroundColor};
    font-size: 1.8rem;

    @media ${breakpoint.phone} {
        padding: 0px 10px;
    }

`;


const TitleContainerBefore = styled.div`
    width: 100%;
    content: '';
    height: 200px;
    background: linear-gradient(180deg, ${videoBackgroundGrayOpacity0} 0%, ${titleContainerBackgroundColor} 100%);
    z-index: -100;
    position: absolute;
    top: -200px;
    left: 0px;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;


const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }

`;

const Subtitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 4vw;
    line-height: 4vw;
    font-weight: 500;
    font-style: normal;
    text-transform: uppercase;
    margin: 0px;
    margin-top: 5px;
    padding: 0px 20px 20px 0px;
    letter-spacing: -1px;
    text-shadow: 5px 5px 5px #CCCCCC;
    color: rgb(${darkGrayscaleTriplet.join(", ")});


    opacity: 0;

    animation: ${fadeIn} 1s ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 5s;



`;

const LiftedWord = styled.span`
    display: inline-block;
    font-size: 50%;
    margin: 0rem 5px;
    padding: 0px;
    border-bottom: 1px solid ${primaryGray};

`;

const IntroQuestionInnerContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 100px 0px;
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    opacity: 0;


    &.enter {
        animation: ${fadeIn} 0.5s ease-out 1;
        animation-fill-mode: forwards;
    }

    &.exit {
        animation: ${fadeOut} 0.5s ease-out 1;
        animation-fill-mode: forwards;
    }
`;



const IntroQuestionOuterContainer = styled.div`
    width: 100%;
    height: 200vh;
    z-index: 100;
    top: 0px;

`;

const IntroQuestionHeader = styled.aside`
    font-size: 2rem;
    line-height: 2rem;
    color: #FFFFFF;
    width: 80%;
    margin: auto 0px;
    padding: 50px;
    text-align: left;
    position: relative;
    font-weight: 400;
    text-align: left;

    & b {
        display: inline;
        position: relative;
        font-weight: 800;
        color: rgb(${primaryOrangeTriplet.join(",")});
        color: rgb(255 226 188);
        color: ${secondaryOrangeHexcode};

    }

    @media ${breakpoint.phone} {
        width: 100%;
    }

`;



const bgColorInterpolator = interpolateRgb(titleContainerBackgroundColor, darkGrayBackground);
const titleColorInterpolator = interpolateRgb(`rgb(${primaryOrangeTriplet.join(", ")}`, primaryGray);


const ObservableQuestion = ({ children, bgColorValue }: { children: any, bgColorValue: any }) => {
    const introQuestionRef = useRef<any | null>(null);
    let [isVisible, setIsVisible] = useState<boolean>(false);

    const visibleUpdate = (entries: any) => {

        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

    }



    useEffect(() => {

        if (introQuestionRef && introQuestionRef.current) {


            const observer = new IntersectionObserver(visibleUpdate, { root: null, rootMargin: "0px", threshold: 0.8 });
            observer.observe(introQuestionRef.current);

            return () => {
                if (introQuestionRef.current) {
                    observer.unobserve(introQuestionRef.current);
                }
            }
        }


    }, [introQuestionRef]);

    return <IntroQuestionOuterContainer style={{ backgroundColor: bgColorValue?.formatRgb() }}>
        <IntroQuestionInnerContainer ref={introQuestionRef} className={isVisible ? "enter" : "exit"}>
            <IntroQuestionHeader>
                {children}
            </IntroQuestionHeader>
        </IntroQuestionInnerContainer>
    </IntroQuestionOuterContainer>;

}

const ScrollableIntroQuestionHeader = ({ bgColorValue }: { bgColorValue: any }) => {



    return <>
        <ObservableQuestion bgColorValue={bgColorValue}>What is <b>conveyed through our movements?</b></ObservableQuestion>
        <ObservableQuestion bgColorValue={bgColorValue}>Can we speak of a <b>movement identity that distinguishes an individual or a people</b> — some combination of biological, environmental, and embodied cultural experience?</ObservableQuestion>
        <ObservableQuestion bgColorValue={bgColorValue}>Would a <b>movement identity be transplanted as we travel</b> from one place to another?</ObservableQuestion>
    </>
}

const Hero = ({ scrollTop }: { scrollTop: number }) => {

    const heroVideoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {

        if (heroVideoRef && heroVideoRef.current) {

            heroVideoRef.current.setAttribute("webkit-playsinline", "")
        }
    }, [heroVideoRef]);


    const progress = scrollTop > 1000 ? 1 : scrollTop / 1000;
    const bgColor = bgColorInterpolator(progress);
    const titleTextColor = titleColorInterpolator(progress * 4);

    const bgColorValue = color(bgColor);
    bgColorValue!.opacity = 0.8;

    const titleTextColorValue = color(titleTextColor);
    titleTextColorValue!.opacity = 0.8;
    titleTextColorValue!.opacity = 1;


    return <><HeroContainer>
        <HeroVideoAlignmentContainer style={{ filter: scrollTop < 1000 ? `invert(${scrollTop / 1000})` : `invert(1)` }}>
            <HeroVideoContainer>
                <HeroVideoEl ref={heroVideoRef} playsInline loop={true} autoPlay={true} muted={true}>
                    <source src={HeroVideoFile} type="video/mp4" />
                </HeroVideoEl>

            </HeroVideoContainer>

        </HeroVideoAlignmentContainer>

        <TitleContainer style={{ backgroundColor: bgColorValue?.formatRgb() }}>
            <TitleContainerBefore style={{ background: `linear-gradient(180deg, ${videoBackgroundGrayOpacity0} 0%, ${bgColorValue?.formatRgb()} 100%)` }} />
            <AnimatedTitle />
            <Subtitle>Technology <LiftedWord>As</LiftedWord> Resistance • Future Archives</Subtitle>

        </TitleContainer>
        <ScrollableIntroQuestionHeader bgColorValue={bgColorValue} />


    </HeroContainer>

    </>

}

export default Hero;