import styled from "styled-components";
import ASUHerbergerLogo from "../assets/media/logos/asu_herberger_institute.png";
import ASULibraryLogo from "../assets/media/logos/asu_library_logo.png";
import DorisDukeLogo from "../assets/media/logos/doris_duke_logo.png";
import HarvardRadcliffeLogo from "../assets/media/logos/harvard_radcliffe_logo-rgb.svg";
import IRCLogo from "../assets/media/logos/IRC_official.png";
import JacobsPillowLogo from "../assets/media/logos/jacobs_pillow_logo.png";
import NEArtsLogo from "../assets/media/logos/NE_arts_logo.png";
import NUCAMDLogo from "../assets/media/logos/nu_camd_logo.png";
import WilliamsCollegeLogo from "../assets/media/logos/williams_college_logo_purple.png";

import { primaryOrangeDesaturatedTriplet } from "./layoutComponents";
import { breakpoint } from "../constants";

const SponsorsColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media ${breakpoint.phone} {
        flex-direction: column;
    }
`;

const SponsorsLogoUl = styled.ul`
    flex: 1 0 50%;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    & a {
        display: contents;
    }

    @media ${breakpoint.tablet} {
        flex: unset;
        width: 100%;
    }

`;

const SponsorsLogoLi = styled.li`
    margin: 5px;
    margin-bottom: 20px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0);

    &.white-bg {
        background-color: #ffffff;
    }


    & img {
        width: 90%;
        max-width: 400px;
        max-height: 300px;
    }

    &:hover {
        box-shadow: 0px 0px 15px rgb(${primaryOrangeDesaturatedTriplet.join(", ")});
        cursor: pointer;
    }

    @media ${breakpoint.tablet} {

        img {
            width: 100%;
            max-width: 200px;
        }
    }

    @media ${breakpoint.phone} {

        img {
            width: 100%;
            max-width: 300px;
        }
    }
`;

export enum SponsorId {
    DorisDuke = "Doris Duke Foundation",
    JacobsPillow = "Jacob's Pillow",
    CAMD = "Northeastern University, College of Arts, Media and Design",
    Herberger = "Herberger Institute for Design and the Arts at Arizona State University",
    ASULibrary = "Arizona State University Library",
    NEA = "National Endowment for the Arts",
    HarvardRadcliffe = "Harvard Radcliffe Institute",
    Williams = "Williams College",
    IRC = "International Rescue Committee"
}

const SponsorLogoMetadata: any = {
    [SponsorId.DorisDuke]: { image: DorisDukeLogo, url: "https://www.dorisduke.org/" },
    [SponsorId.JacobsPillow]: { image: JacobsPillowLogo, url: "https://www.jacobspillow.org/" },
    [SponsorId.CAMD]: { image: NUCAMDLogo, url: "https://camd.northeastern.edu/" },
    [SponsorId.Herberger]: { image: ASUHerbergerLogo, url: "https://herbergerinstitute.asu.edu/" },
    [SponsorId.ASULibrary]: { image: ASULibraryLogo, url: "https://lib.asu.edu/" },
    [SponsorId.NEA]: { image: NEArtsLogo, url: "https://www.arts.gov/" },
    [SponsorId.HarvardRadcliffe]: { image: HarvardRadcliffeLogo, url: "https://www.radcliffe.harvard.edu/" },
    [SponsorId.Williams]: { image: WilliamsCollegeLogo, url: "https://www.williams.edu/" },
    [SponsorId.IRC]: { image: IRCLogo, url: "https://www.rescue.org/" },
}

export const SponsorLogo = ({ whichSponsor }: { whichSponsor: SponsorId }) => {

    const { image, url } = SponsorLogoMetadata[whichSponsor];

    return <a target="_blank" href={url}><SponsorsLogoLi><img src={image} alt={`Logo for ${whichSponsor}`} /></SponsorsLogoLi></a>
}

const SponsorsList = () => {

    return <SponsorsColumnContainer>
        <SponsorsLogoUl>
            <SponsorLogo whichSponsor={SponsorId.DorisDuke} />
            <SponsorLogo whichSponsor={SponsorId.JacobsPillow} />
            <SponsorLogo whichSponsor={SponsorId.CAMD} />
            <SponsorLogo whichSponsor={SponsorId.Herberger} />
            <SponsorLogo whichSponsor={SponsorId.ASULibrary} />
        </SponsorsLogoUl>
        <SponsorsLogoUl>
            <SponsorLogo whichSponsor={SponsorId.NEA} />
            <SponsorLogo whichSponsor={SponsorId.HarvardRadcliffe} />
            <SponsorLogo whichSponsor={SponsorId.Williams} />
            <SponsorLogo whichSponsor={SponsorId.IRC} />
        </SponsorsLogoUl>
    </SponsorsColumnContainer>

}

export default SponsorsList;