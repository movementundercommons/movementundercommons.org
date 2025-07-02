import styled from "styled-components";

/* Publication thumbnails */
import Walk36Thumbnail from "../assets/img/pub-thumbnails/36Walk.png";
import DecolonizingTheMachineThumbnail from "../assets/img/pub-thumbnails/DecolonizingTheMachine.png";
import MotionCapturedThumbnail from "../assets/img/pub-thumbnails/motionCaptured.png";
import MovementUndercommonsISEAThumbnail from "../assets/img/pub-thumbnails/MovementUndercommonsISEA.png";
import CyberlawThumbnail from "../assets/img/pub-thumbnails/cyberlaw.png";

/* Press thumbnails */
import JacobsPillowThumbnail from "../assets/img/pub-thumbnails/JacobsPillow.png";
import ChoreoRoboticsThumbnail from "../assets/img/pub-thumbnails/choreoRobotics.png";
import GlitteringFieldThumbnail from "../assets/img/pub-thumbnails/glittering-field.jpg";
import ASUNewsThumbnail from "../assets/img/pub-thumbnails/asu_news_story.png";

import { PaddedMainContainer, primaryOrangeDesaturatedTriplet, primaryOrangeTriplet, Subheader } from "../components/layoutComponents";
import { breakpoint } from "../constants";


const PublicationsUl = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


`;

const PublicationsLi = styled.li`
    flex: 0 1 auto;
    width: 100%;
    max-width: 300px;
    position: relative;
    margin: 20px;

    & img {
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border: 1px solid #CECECE;
    }

    &:hover img {
        box-shadow: 0px 0px 15px rgb(${primaryOrangeDesaturatedTriplet.join(", ")});
    }


    & a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }

    @media ${breakpoint.phone} {
        max-width: unset;
        margin: 20px 0px;
    }


`;

const Citation = styled.span`
    display: block;
    width: 100%;
    margin: 0px;
    padding: 30px 0px 10px 0px;
    font-size: 1.1rem;
    line-height: 1.2rem;
    font-weight: 300;
    position: relative;

    & b {
        font-weight: 600;
        color: rgb(${primaryOrangeTriplet.join(",")});
    }

    &::before {
        position: absolute;
        top: 10px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: '';
        background-color: #484443;
        border-radius: 5px 0px 5px 0px;
        pointer-events: none;
    }
`;

const PressCitation = styled(Citation)`
    font-size: 1.2rem;
    line-height: 1.3rem;
    font-weight: 600;
    color: rgb(${primaryOrangeTriplet.join(",")});
`;


const Publications = () => {

    return <>
        <PaddedMainContainer>
            <Subheader>Publications</Subheader>
            <PublicationsUl>
                <PublicationsLi>
                    <a target="_blank" href="./publications/DECOLONIZING_THE_MACHINE.pdf">
                        <img src={DecolonizingTheMachineThumbnail} alt="Thumbnail for 'Decolonizing the Machine: Race, Gender and Disability in Robots and Algorithmic Art'" />
                        <Citation>Abramovic, B., Coleman, G., Donnarumma, M., Jochum, E., & Casey, C. S. (2021). <b>“Decolonizing the Machine: Race, Gender and Disability in Robots and Algorithmic Art.”</b> Presented at the conference. </Citation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="./publications/36Walk.pdf">
                        <img src={Walk36Thumbnail} alt="Thumbnail for '36 Walk: A case study of reciprocity in movement and computation'" />
                        <Citation>Coleman, Grisha, and Daragh Byrne. <b>“36 Walk: A Case Study of Reciprocity in Movement and Computation.”</b> School of Arts, Media & Engineering, Arizona State University; School of Design, Carnegie Mellon University. </Citation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="./publications/Motion, Captured.pdf">
                        <img src={MotionCapturedThumbnail} alt="Thumbnail for 'Motion, Captured: An open repository for comparative movement studies'" />
                        <Citation>Iyengar, V., Coleman, G., Tinapple, D., & Turaga, P. (2016, July 5-6). <b>“Motion, Captured: An Open Repository for Comparative Movement Studies.”</b> Presented at MOCO'16, Thessaloniki, Greece. School of Arts, Media & Engineering, Arizona State University, Tempe, AZ, USA.</Citation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="./publications/MovementUndercommons.pdf">
                        <img src={MovementUndercommonsISEAThumbnail} alt="Thumbnail for 'The Movement Undercommons: Movement Analysis as Meaning Making in a Time of Global Migrations'" />
                        <Citation>Coleman, Grisha, and Brenda McCaffrey. <b>“The Movement Undercommons: Movement Analysis as Meaning Making in a Time of Global Migrations.”</b> ISEA2018, 2018. School of Arts, Media & Engineering, Arizona State University, Tempe, AZ, USA.</Citation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="./publications/cyberlaw.pdf">
                        <img src={CyberlawThumbnail} alt="Thumbnail for 'Movement Undercommons: White Paper'" />
                        <Citation>Washington, Christopher, Grisha Coleman, and Jessica Fjeld. <b>“Movement Undercommons: White Paper.”</b> Cyberlaw Clinic, Harvard Law School, Berkman Klein Center for Internet & Society, 14 Apr. 2023.</Citation>
                    </a>
                </PublicationsLi>
            </PublicationsUl>
            <Subheader>Press</Subheader>
            <PublicationsUl>
                <PublicationsLi>
                    <a target="_blank" href="https://watch.jacobspillow.org/detail/videos/festival-2023-pillowtalks/video/6337507550112?autoStart=true">
                        <img src={JacobsPillowThumbnail} alt="Thumbnail for 'Jacob's Pillow: Dancerly Intelligences'" />
                        <PressCitation>Jacob's Pillow: Dancerly Intelligences</PressCitation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="https://www.dancemagazine.com/choreo-robotics/#gsc.tab=0">
                        <img src={ChoreoRoboticsThumbnail} alt="Thumbnail for 'Dance Magazine: Choreo-Robotics'" />
                        <PressCitation>Dance Magazine: Choreo-Robotics</PressCitation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="https://www.aoa-87.com/exhibition/the-glittering-field-curated-by-onome-ekeh/">
                        <img src={GlitteringFieldThumbnail} alt="Thumbnail for 'The glittering field: curated by Onome Ekeh'" />
                        <PressCitation>The glittering field: curated by Onome Ekeh</PressCitation>
                    </a>
                </PublicationsLi>
                <PublicationsLi>
                    <a target="_blank" href="https://news.asu.edu/20201014-asu-professor-awarded-grant-fellowship-make-invisible-visible-through-movement-technology">
                        <img src={ASUNewsThumbnail} alt="Thumbnail for 'ASU professor awarded grant to make the invisible visible through movement technology'" />
                        <PressCitation>ASU professor awarded grant to make the invisible visible through movement technology</PressCitation>
                    </a>
                </PublicationsLi>
            </PublicationsUl>
        </PaddedMainContainer>
    </>;
}

export default Publications;