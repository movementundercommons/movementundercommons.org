import styled, { keyframes } from "styled-components";
import { bodyTextFont, primaryOrangeTriplet, secondaryOrangeHexcode } from "./layoutComponents";
import MotionTrackingClips from "../assets/media/combined-motion-tracking-clips.mp4";
import { Link } from "react-router";
import { breakpoint, RoutePaths } from "../constants";
import DataPortraitTimelapse, { WhichPortraitTimelapse } from "../visComponents/DataPortraitTimelapse";
import ClipsVideo from "../assets/media/clips-montage.mp4";

const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 0px;
`;

const HeroVideoEl = styled.video`
    width: 100%;
    margin: 0px;
    padding: 0px;

    border-radius: 4px;
`;

const IntroParagraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 3vw;
    line-height: 3vw;
    width: 100%;
    margin: 0px;
    padding: 0px 50px 10px 0px;
    position: relative;
    font-weight: 600;
    text-align: center;

    & b {
        font-weight: 700;
    }

    & p {
        width: 100%;
        width: fit-content;
        padding: 10px;
        border-radius: 50px;
    }

    & b {
        font-weight: 600;
    }

    & img {
        width: 100%;
        max-width: 300px;
        align-self: flex-start;
    }
    
    & b {
        display: inline;
        position: relative;
        font-weight: 800;
        color: rgb(${primaryOrangeTriplet.join(",")});
    }

    @media ${breakpoint.tablet} {
        font-size: 1.6rem;
        line-height: 1.6rem;
        padding: 0px;

        br {
            display: none;
        }
    }


`;


const DataPortraitInnerContainer = styled.div`

    width: 100%;
    height: 100%;
    position: relative;
    margin: 0px;
    padding: 20px;

    display: flex;
    flex-direction: column;

    /* The following unsets the flex settings for 
    the <DataPortraitTimelapse /> component.
    
    In addition, it clips the data portrait 
    sample to the same aspect ratio as the autoplay 
    video next to it.

    */
    & div {
        flex: unset;
        margin: 0px;
        width: 100%;

        overflow: clip;
        aspect-ratio: 492 / 276;
    }

    /* The following unsets the caption for 
    the <DataPortraitTimelapse /> component 
    by making it not be displayed. This is 
    to ensure that both cards on the landing 
    page for "movement portraits" and "future archive" 
    take up the same space. */

    & aside {
        display: none !important;
        opacity: 0;
    }

`;



const BoilerplateContainer = styled.div`
    ${bodyTextFont}
    width: 100%;
    margin: 0px;

    display: flex;
    flex-direction: column;
    padding: 0px 50px 100px 50px;
    position: relative;
    z-index: 100;

    @media ${breakpoint.tablet} {
        padding: 0px 25px 50px 25px;
    }
`;

const BoilerPlateSideBySideContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0px;
    padding: 0px;

    @media ${breakpoint.tablet} {
        flex-direction: column;
    }
`;

const BoilerplateRow = styled.div`
    flex: 1 0 50%;
    margin: 0px;
    padding: 10px 20px;
    width: 100%;

    & a {
        display: contents;
        color: unset;
        text-decoration: unset;
    }

    @media ${breakpoint.tablet} {
        flex: unset;
        padding: 0px;
        margin-bottom: 20px;
    }

`;

const focus = keyframes`

    from {
        box-shadow: 3px 3px 3px #cecece;

    }

    to {
        box-shadow: 0px 0px 6px 5px ${secondaryOrangeHexcode};

    }

`;

const BoilerplateRowInnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    border-radius: 15px;
    background:rgb(245, 245, 245);
    box-shadow: 3px 3px 3px #cecece;
    cursor: pointer;
    border: 1px solid #ffffff;

    &:hover {
        animation: ${focus} 0.2s ease-out 1;
        animation-fill-mode: forwards;
    }

`;

const CardHeader = styled.h2`
    width: 100%;
    color: #ffffff;
    background: rgb(${primaryOrangeTriplet.join(",")});
    border-radius: 15px 15px 0px 0px;
    border-bottom: 1px solid #ffffff;
    margin: 0px;
    font-size: 2vw;
    padding: 10px 5px 15px 5px;

    @media ${breakpoint.tablet} {
        font-size: 1.6rem;
    }
`;

const CardSummary = styled.p`
    width: 100%;
    font-size: 1.8vw;
    line-height: 1.8vw;
    font-weight: 600;
    margin: 10px 0px;
    padding: 0px 10px;

    @media ${breakpoint.tablet} {
        font-size: 1.6rem;
        line-height: 1.4rem;

        br {
            display: none;
        }
    }




`;


const CardReadMoreContainer = styled.div`
    width: 100%;
    margin: 0px;
    margin-top: 0px;
    padding: 0px 5px 25px 5px;

    font-family: "Darker Grotesque", sans-serif;
    font-size: 2vw;
    font-weight: 600;
    text-align: center;
    color: rgb(${primaryOrangeTriplet.join(",")});
    
    & a:link, a:visited {
        color: inherit;
        text-decoration: none;
        width: fit-content;
    }


    @media ${breakpoint.tablet} {
        font-size: 1.6rem;
        line-height: 1.4rem;
    }

`;

const BoilerplateRowCell = styled.div`
    margin: 0px;
    padding: 0px;
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const BoilerplateTextCell = styled(BoilerplateRowCell)`
    font-family: "Darker Grotesque", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.6rem;
    width: 100%;
    padding: 0px;
    text-align: center;
    display: block;

    & b {
        display: block;
        width: 100%;
        font-weight: 700;
        margin-bottom: 5px;
        color: rgb(${primaryOrangeTriplet.join(",")})
    }



`;

const ClipsVideoContainer = styled.div`

    width: 100%;
    height: 200vh;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    border-top: 2px solid #CECECE;
    border-bottom: 2px solid #CECECE;
    position: relative;
`;


const ClipsKeepScrollingContainer = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1000;
    color: #ffffff;
    font-size: 1.2rem;
    padding: 0px 20px 0px 0px;
    opacity: 0.7;
    cursor: default;
`;

const ClipsKeepScrollingArrow = styled.div`
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
    line-height: 90%;
    display: flex;
    align-items: center;
    writing-mode: vertical-rl;
    justify-content: space-between;
`;

const AnimatedArrow = styled.div`
    flex: 0;
    padding: 10px 0px;
    text-align: center;
    font-size: 1.5em;
    font-style: normal;
`;

const ClipsStickyContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;

`;

const ClipsVideoEl = styled.video`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;


/* Note:

On the landing page, we need the thumbnails for 
both the data portrait sample and autoplay video 
to be the same size. So, below, we will constrain 
the data portrait sample to the same aspect 
ratio: 492px x 276px

*/

const ProjectBoilerplate = () => {

    return <><BoilerplateContainer>
        <IntroParagraph>
            <p><b>The Movement Undercommons</b> envisions<br /> two distinct but interconnected outcomes:
            </p>
        </IntroParagraph>

        <BoilerPlateSideBySideContainer>

            <BoilerplateRow>
                <Link to={RoutePaths.Portraits}>
                    <BoilerplateRowInnerContainer>

                        <BoilerplateTextCell>
                            <CardHeader>a series of movement portraits</CardHeader>
                            <CardSummary>animated and sonified vignettes<br /> created from movement data</CardSummary>
                        </BoilerplateTextCell>
                        <BoilerplateRowCell>
                            <DataPortraitInnerContainer>
                                <DataPortraitTimelapse whichPortrait={WhichPortraitTimelapse.Jess} />
                            </DataPortraitInnerContainer>
                        </BoilerplateRowCell>
                        <CardReadMoreContainer>
                            Read more about the portraits →
                        </CardReadMoreContainer>

                    </BoilerplateRowInnerContainer>
                </Link>
            </BoilerplateRow>
            <BoilerplateRow>
                <Link to={RoutePaths.Technology}>
                    <BoilerplateRowInnerContainer>

                        <BoilerplateTextCell style={{ marginTop: "0px" }}>
                            <CardHeader>a future archive</CardHeader>
                            <CardSummary>a lexicon-repository of vernacular movement data<br /> gathered outside of a lab or studio</CardSummary>
                        </BoilerplateTextCell>
                        <BoilerplateRowCell>
                            <VideoContainer>
                                <HeroVideoEl playsInline loop={true} autoPlay={true} muted={true}>
                                    <source src={MotionTrackingClips} type="video/mp4" />
                                </HeroVideoEl>
                            </VideoContainer>
                        </BoilerplateRowCell>
                        <CardReadMoreContainer>Read more about the technology →</CardReadMoreContainer>
                    </BoilerplateRowInnerContainer>
                </Link>
            </BoilerplateRow>

        </BoilerPlateSideBySideContainer>
    </BoilerplateContainer>
        <ClipsVideoContainer>
            <ClipsStickyContainer>
                <ClipsVideoEl playsInline loop={true} autoPlay={true} muted={true}>
                    <source src={ClipsVideo} type="video/mp4" />
                </ClipsVideoEl>
                <ClipsKeepScrollingContainer>
                    <ClipsKeepScrollingArrow>
                        <AnimatedArrow>←</AnimatedArrow>
                        <AnimatedArrow>→</AnimatedArrow>
                    </ClipsKeepScrollingArrow>
                </ClipsKeepScrollingContainer>
            </ClipsStickyContainer>
        </ClipsVideoContainer>
    </>
}

export default ProjectBoilerplate;