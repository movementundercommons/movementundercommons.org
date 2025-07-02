import styled from "styled-components";

/* Technology page */
import Technology1 from "../assets/img/farming/farming-sky.png";
import Technology2 from "../assets/img/farming/farming-land.png";
import Technology3 from "../assets/img/farming/farming-subject.png";

/* Portraits page */
import Portrait1 from "../assets/img/portrait/portrait-back.png";
import Portrait2 from "../assets/img/portrait/portrait-front.png";


/* People page */
import People1 from "../assets/img/people/people-back.png";
import People2 from "../assets/img/people/people-middle.png";
import People3 from "../assets/img/people/people-front.png";

/* Publications page */
import Publications1 from "../assets/img/publications/publications-back.png";
import Publications2 from "../assets/img/publications/publications-middle.png";
import Publications3 from "../assets/img/publications/publications-front.png";

import { SectionId } from "../routing";
import { breakpoint } from "../constants";


export const ParallaxHeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    max-height: 500px;
    background: #000000;
    overflow-y: hidden;
    margin-bottom: 100px;

    border-bottom: 3px solid #FFFFFF;
    box-shadow: 0px 10px 20px rgba(150, 150, 150, 0.8);


    @media ${breakpoint.laptop} {
        max-height: 400px;
    }

    @media ${breakpoint.tablet} {
        margin-bottom: 25px;
        height: auto;
    }

`;


const ParallaxHeaderFrame = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;

    & img {
        width: 100%;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        margin-top: -10%;
    }


    & img.t1 {
        filter: grayscale(0.8) blur(5px);
    }

    & img.t2 {
        filter: grayscale(0.8) brightness(0.6) contrast(0.5) blur(5px);
    }

    & img.t3 {
        filter: grayscale(0.8) blur(4px);
    }

`;

const ParallaxTitleFrame = styled.div`
    position: sticky;
    top: 0px;
    z-index: 900;
    width: 100%;
    height: 100%;
    padding: 0px 50px;
    opacity: 0.7;
    text-shadow: 0px 0px 10px rgb(144, 144, 144);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${breakpoint.tablet} {
        padding: 0px 25px;
    }

`;

const TitleText = styled.h1`
    font-size: 8vw;
    font-family: "Darker Grotesque", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;

    @media ${breakpoint.tablet} {
        font-size: 4rem;
        line-height: 3.6rem;
    }
`;




const SubsectionHeader = ({ whichSection }: { whichSection: SectionId }) => {

    let Graphic1, Graphic2, Graphic3, titleText;


    if (whichSection === SectionId.Technology) {
        Graphic1 = Technology1;
        Graphic2 = Technology2;
        Graphic3 = Technology3;
        titleText = "Technology";


    } else if (whichSection === SectionId.Portraits) {
        Graphic1 = Portrait1;
        Graphic2 = Portrait1;
        Graphic3 = Portrait2;
        titleText = "Movement Portraits";



    } else if (whichSection === SectionId.People) {
        Graphic1 = People1;
        Graphic2 = People2;
        Graphic3 = People3;
        titleText = "People";



    } else if (whichSection === SectionId.Publications) {
        Graphic1 = Publications1;
        Graphic2 = Publications2;
        Graphic3 = Publications3;
        titleText = "Publications";


    } else {
        Graphic1 = Portrait1;
        Graphic2 = Portrait1;
        Graphic3 = Portrait2;
        titleText = "Movement Portraits"

    }

    return <ParallaxHeaderContainer>
        <ParallaxTitleFrame><TitleText>{titleText}</TitleText></ParallaxTitleFrame>

        <ParallaxHeaderFrame>
            {Graphic1 && <img className="t1" src={Graphic1} />}
            <img className="t2" src={Graphic2} />
            <img className="t3" src={Graphic3} />
        </ParallaxHeaderFrame>
    </ParallaxHeaderContainer>

}

export default SubsectionHeader;