import styled from "styled-components";
import NaturalEnvironmentBackground from "../assets/figures/natural-environment.png";
import PersonFigure from "./personFigure";
import { breakpoint, PersonType } from "../constants";
import { bodyTextColor, bodyTextFont } from "../components/layoutComponents";

const BackgroundImageContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;

    & img {
        width: 100%;
    }

    @media ${breakpoint.tablet} {
        width: 200%;
        left: -50%;
    }
`;



const EnvironmentSceneContainer = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative;
`;


const PersonContainer = styled.div`
    width: 10%;
    z-index: 100;
    flex: 0 1 10%;

    @media ${breakpoint.tablet} {
        flex: unset;
        min-width: 100px;
        margin: 0px 10px;
    }
`;

const PersonAsideComboContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: 0% 0px 0px 0px;
`;

const FlexSpacer = styled.div`
    flex: 0 1 auto;
    width: auto;
    content: "";

    @media ${breakpoint.tablet} {
        display: none;
    }
`;

const IntroQuestionFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &.aside-top {
        flex: 0 1 65%;
        width: 65%;
        justify-content: flex-end;
    }

    @media ${breakpoint.tablet} {
    
        padding: 10px;

        &.aside-top {
            flex: unset;
            width: unset;
        }
    }

    @media ${breakpoint.phone} {
    
        padding: 0px;
        width: 100%;

        &.aside-top {
            padding-left: 10px;
            flex: unset;
        }
    }



`;

export const IntroQuestionHeader = styled.aside`
    ${bodyTextFont}
    color: ${bodyTextColor};
    width: auto;
    max-width: 500px;
    margin: auto 0px;
    padding: 10px;
    position: relative;

    &:after {
        display: block;
        position: absolute;
        z-index: -100;
        width: 100%;
        height: 100%;
        content: "";
        background-color: rgba(250, 250, 250, 0.3);
        top: 0px;
        left: 0px;
    }

    @media ${breakpoint.tablet} {
        max-width: unset;

    }

`;

const NaturalEnvironment = () => {

    return <EnvironmentSceneContainer>
        <BackgroundImageContainer><img src={NaturalEnvironmentBackground} /></BackgroundImageContainer>
        <PersonAsideComboContainer>
            <IntroQuestionFlexContainer className="aside-top">
                <IntroQuestionHeader>Human movement is intrinsically expressive, affective, intuitive, and meaning making.</IntroQuestionHeader>
            </IntroQuestionFlexContainer>
            <PersonContainer>
                <PersonFigure personType={PersonType.PersonType1} />
            </PersonContainer>
            <FlexSpacer />
        </PersonAsideComboContainer>
        <PersonAsideComboContainer>
            <FlexSpacer style={{ width: "40%" }} />
            <PersonContainer>
                <PersonFigure personType={PersonType.PersonType2} />
            </PersonContainer>
            <IntroQuestionFlexContainer>
                <IntroQuestionHeader>Personal ways of moving in the world reflect discernible patterns which reveal strategies and habits developed over a lifetime, articulated through posture, rhythm, gesture, tempo; a kinesthetic communication that does not rely on words.</IntroQuestionHeader>
            </IntroQuestionFlexContainer>
        </PersonAsideComboContainer>
        <PersonAsideComboContainer>
            <FlexSpacer style={{ width: "20%" }} />
            <PersonContainer>
                <PersonFigure personType={PersonType.PersonType3} />
            </PersonContainer>
            <IntroQuestionHeader>The Movement Undercommons explores everyday movement through the narratives expressed through bodies, through the gathering and creative use of motion capture data.</IntroQuestionHeader>
        </PersonAsideComboContainer>
    </EnvironmentSceneContainer>

}

export default NaturalEnvironment;
