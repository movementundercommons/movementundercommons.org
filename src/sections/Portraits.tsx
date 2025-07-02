import styled from "styled-components";
import DataPortraitTimelapse, { WhichPortraitTimelapse } from "../visComponents/DataPortraitTimelapse";
import { FigureCaption, PaddedMainContainer, Paragraph, primaryOrangeTriplet, SceneContainer } from "../components/layoutComponents";

import GrishaInterviewVideo from "../assets/media/grisha_interview.mp4";
import GrishaInterviewPoster from "../assets/media/grisha_interview_poster.png";

import PortraitVariationDashed from "../assets/img/portrait_variations_dashed.png";
import PortraitVariationThick from "../assets/img/portrait_variations_thickline.png";

import ValFootageAnnotation1 from "../assets/img/portrait-stills/val-footage-annotations/Sequence 01.00_00_00_00.Still023.jpg";
import ValFootageAnnotation2 from "../assets/img/portrait-stills/val-footage-annotations/Sequence 01.00_00_01_15.Still025.jpg";
import ValFootageAnnotation3 from "../assets/img/portrait-stills/val-footage-annotations/Sequence 01.00_00_02_15.Still027.jpg";
import ValFootageAnnotation4 from "../assets/img/portrait-stills/val-footage-annotations/Sequence 01.00_00_03_15.Still029.jpg";

import CurvedArrowDownLeft from "../assets/graphics/curved-arrow-downleft.svg";
import CurvedArrowDownRight from "../assets/graphics/curved-arrow-downright.svg";

import NaturalEnvironment from "../visComponents/naturalEnvironment";
import { breakpoint } from "../constants";


const TwoColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 50px 20px;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${breakpoint.tablet} {
        flex-direction: column;
        padding: 25px 0px;
    }
`;

const Column = styled.div`
    flex: 0 1 48%;
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    
    padding: 0px;

    & img {
        width: 100%;
    }

    &.topaligned {
        justify-content: flex-start;
    }


    @media ${breakpoint.tablet} {
        flex: unset;
        width: 100%;
        align-items: flex-start;

        &:first-child {
            margin-bottom: 10px;
        }


    }

`;

const RowSeriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 50px 0px;
    flex-wrap: wrap;

    & img {
        min-width: 0;
        flex: 1;
        margin: 0px 5px 0px 0px;
        border: 1px solid #ffffff;
        box-shadow: 0px 0px 10px  #CCCCCC;
        position: relative;
    }

    &.quadrant img {
        flex: 0 1 45%;
        margin-bottom: 5px;
    }

    @media ${breakpoint.tablet} {
        margin: 10px 0px;

        img {
            flex: unset;
            width: 45%;
        }

    }
`;



const RowBreak = styled.div`
    flex-basis: 100%;
    height: 0;
`;

const TimeCaption = styled.div`
    flex: 1;
    text-transform: uppercase;
    font-weight: 700;
    color: #333333;

`;

const ArrowImageContainer = styled.div`
    width: 100%;
    max-width: 40px;
    justify-self: center;
    margin-top: 20px;

    & img {
        width: 100%;
    }

    @media ${breakpoint.tablet} {
        display: none;
    }
`;



const InterviewVideoContainer = styled.div`
    width: 100%;
    margin: 0px;
    z-index: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${breakpoint.tablet} {
        margin: 50px 0px;
    }

`;

const InterviewVideoAlignmentContainer = styled.div`
    width: 80%;
    max-width: 1000px;

    @media ${breakpoint.tablet} {
        width: 100%;

    }
`;

const InterviewVideoEl = styled.video`
    width: 100%;
    box-shadow: 0px 0px 25px 15px rgb(220, 220, 220);
    border: 1px solid #ffffff;
    border-radius: 15px;

`;

const PortraitTryptichContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-bottom: 50px;
    flex-wrap: wrap;
    padding: 50px;
    padding-top: 0px;

    @media ${breakpoint.tablet} {
        flex-direction: column;
        padding: 25px;
    }

    @media ${breakpoint.phone} {
        flex-direction: column;
        padding: 10px;
    }
`;

const SinglePortraitContainer = styled.div`
    flex: 0 1 50%;
    margin: 0px;
    padding: 5px 10px;
    padding: 25px;

    &.fullwidth {
        flex: 1 0 100%;
    }

    @media ${breakpoint.tablet} {
        flex: unset;
        width: 100%;
    }
`;

const StyledHeader = styled.aside`
    font-size: 1.8rem;
    line-height: 2rem;
    width: 100%;
    padding: 10px 50px;
    margin: 25px 0px;
    text-align: left;
    position: relative;
    font-weight: 400;
    text-align: left;

    & b {
        display: inline-block;
        position: relative;
        font-weight: 800;
        color: rgb(${primaryOrangeTriplet.join(",")});
    }

    @media ${breakpoint.tablet} {
        padding: 10px 25px;
        font-size: 1.6rem;
        margin: 10px 0px;
    }

    @media ${breakpoint.phone} {
        padding: 10px;
    }

`;

const Portraits = () => {

    return <>
        <PortraitTryptichContainer>
            <SinglePortraitContainer>
                <DataPortraitTimelapse whichPortrait={WhichPortraitTimelapse.Eggplant} />
            </SinglePortraitContainer>
            <SinglePortraitContainer>
                <DataPortraitTimelapse whichPortrait={WhichPortraitTimelapse.Robin} />
            </SinglePortraitContainer>
            <SinglePortraitContainer className="fullwidth">
                <DataPortraitTimelapse whichPortrait={WhichPortraitTimelapse.Baklava} />
            </SinglePortraitContainer>
        </PortraitTryptichContainer>
        <SceneContainer>
            <NaturalEnvironment />
        </SceneContainer>

        <PaddedMainContainer>

            <StyledHeader>With movement and sound gathered outside of a clinic, studio or lab, the “movement portraits” form <b>“kinetic haikus”</b> created from movement data.</StyledHeader>
            <TwoColumnContainer>
                <Column>
                    <img src={PortraitVariationDashed} />
                </Column>
                <Column>
                    <img src={PortraitVariationThick} />
                </Column>
                <RowBreak />
                <Paragraph>These aesthetic renderings are composed from the same underlying movement data.</Paragraph>
            </TwoColumnContainer>


            <TwoColumnContainer>
                <Column>
                    <DataPortraitTimelapse whichPortrait={WhichPortraitTimelapse.ValFootage} />
                </Column>
                <Column>
                    <Paragraph>Movement data collected via motion capture</Paragraph>
                    <ArrowImageContainer><img src={CurvedArrowDownLeft} /></ArrowImageContainer>
                </Column>
            </TwoColumnContainer>
            <RowSeriesContainer>
                <Paragraph>Motion capture sensors placed on a person drumming, capturing data over time</Paragraph>
                <RowBreak />
                <img src={ValFootageAnnotation1} alt="Image of Val drumming, with annotations showing motion capture sensors" />
                <img src={ValFootageAnnotation2} alt="Image of Val drumming, with annotations showing motion capture sensors" />
                <img src={ValFootageAnnotation3} alt="Image of Val drumming, with annotations showing motion capture sensors" />
                <img src={ValFootageAnnotation4} alt="Image of Val drumming, with annotations showing motion capture sensors" />
                <RowBreak />
                <TimeCaption>Time elapsed →</TimeCaption>
            </RowSeriesContainer>
            <TwoColumnContainer>
                <Column className="topaligned">
                    <ArrowImageContainer><img src={CurvedArrowDownRight} /></ArrowImageContainer>
                    <Paragraph>Each “movement portrait” is made up of animated data and sound, both visual and sonic material. This “sonic portrait” is composed of participant interview, found sound, and sonification of the movement data.</Paragraph>
                </Column>
                <Column>
                    <DataPortraitTimelapse whichPortrait={WhichPortraitTimelapse.Val} />
                </Column>
            </TwoColumnContainer>
            <InterviewVideoContainer>
                <InterviewVideoAlignmentContainer>
                    <InterviewVideoEl controls={true} poster={GrishaInterviewPoster}>
                        <source src={GrishaInterviewVideo} type="video/mp4" />
                    </InterviewVideoEl>
                    <FigureCaption>Video Credit: Doris Duke Foundation <a target="_blank" href="https://www.dorisduke.org/news--insights/articles/doris-duke-foundation-announces-grants-to-20-innovative-theater-jazz-contemporary-dance-and-multi-disciplinary-projects-through-its-inaugural-performing-arts-technologies-lab/">Performing Arts Technologies Lab</a></FigureCaption>
                </InterviewVideoAlignmentContainer>
            </InterviewVideoContainer>
            <Paragraph>
                My practice focuses on the expressive significance of an individual’s dynamic patterns of movement and story of movement and migration. While the study of migration is generally approached at geographical, statistical and geo-political scales (routes, math, histories), this project considers migratory movement at the scale of an individual: movement as an expression of identity understood through qualities of posture, rhythm, gesture, tempo, orientation. The project emphasizes the <em>situated</em>, the context in which movement happens. Yet, paradoxically, as digital information, the movement portraits are not bound uniquely in the past or present, but can be imagined in prospective, speculative futures.
            </Paragraph>
            <Paragraph>
                I had the opportunity to create eleven movement portrait prototypes, the participants of which were Sudanese and Iraqi farmers in Arizona, a South African muralist working for the Welcome Center, a Black American crossing guard at a primary school, a Portuguese custodian for the university building in which I was working, and a Mexican and Ecuadorian folkloric dance teacher at a community center in East Boston. This project reveals and honors the specific, dynamic, complex qualities of motion, in body and location, contributing to critical discourse surrounding themes of global migration, visibility and justice.
            </Paragraph>
        </PaddedMainContainer>

    </>
}

export default Portraits;