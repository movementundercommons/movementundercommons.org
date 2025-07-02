import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import StickyHeader from "../components/StickyHeader";

import ProjectBoilerplate from "../components/ProjectBoilerplate";
import KeepScrolling from "../components/KeepScrolling";
import Footer from "../components/Footer";
import styled from "styled-components";

import { SponsorId, SponsorLogo } from "../components/SponsorsList";
import { bodyTextFont, primaryOrangeTriplet, ReadMoreContainer, secondaryOrangeHexcode } from "../components/layoutComponents";
import { Link } from "react-router";
import { RoutePaths } from "../routing";

import { breakpoint } from "../constants";
import HamburgerMenu from "../components/HamburgerMenu";

const LandingSponsorsContainer = styled.section`
    margin: 0px;
    margin-top: 0px;
    padding: 0px;
    padding-bottom: 50px;
    width: 100%;
    position: relative;
    background-color: #f9f9f9;
`;

const LandingSponsorsColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
`;

const LandingSponsorsBoilerplate = styled.p`
    ${bodyTextFont}
    padding: 0px 50px;

    & a:link, a:visited {
        color: rgb(${primaryOrangeTriplet.join(",")});
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    }

    @media ${breakpoint.tablet} {
        padding: 0px 25px;
    }
`;

const LandingSponsorsList = styled.div`
    flex: 1 1 auto;
    padding: 50px;

    @media ${breakpoint.tablet} {
        flex: unset;
        width: 100%;
        padding: 10px;
    }
`;

const LandingSponsorsUl = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    & a {
        display: contents;
    }

    &.center-align {
        justify-content: center;
    }

    &.center-align :first-child {
        margin-right: 20px;
    }

    &.center-align :last-child {
        margin-left: 20px;
    }

    @media ${breakpoint.phone} {
        flex-direction: column;
    }
`;

const HeaderBar = styled.div`
    width: 100%;
    background-color: ${secondaryOrangeHexcode};
    padding: 50px;
    display: block;
    border-bottom: 1px solid #ffffff;
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 50px;

    @media ${breakpoint.tablet} {
        margin-bottom: 25px;
        padding: 25px;
    }
`;

const PartnersHeader = styled.h1`
    font-family: "Darker Grotesque", sans-serif;
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    font-size: 2rem;
    text-transform: uppercase;
    font-style: normal;
`;

const LandingSponsors = () => {

    return <LandingSponsorsContainer>
        <HeaderBar><PartnersHeader>Partners</PartnersHeader></HeaderBar>
        <LandingSponsorsColumnContainer>
            <LandingSponsorsBoilerplate>Support for this work is provided by <a target="_blank" href="https://www.rescue.org/">International Rescue Committee</a>, <a target="_blank" href="https://www.jacobspillow.org/">Jacob’s Pillow</a>, <a target="_blank" href="https://www.arts.gov/">National Endowment for the Arts</a>, <a target="_blank" href="https://www.dorisduke.org/">Doris Duke Foundation</a>, <a target="_blank" href="https://www.radcliffe.harvard.edu/">Harvard Radcliffe Institute</a>, <a target="_blank" href="https://www.williams.edu/">Williams College</a>, <a target="_blank" href="https://herbergerinstitute.asu.edu/">Herberger Institute for Design and the Arts at Arizona State University</a>, <a target="_blank" href="https://lib.asu.edu/">Arizona State University Library</a>, and <a target="_blank" href="https://camd.northeastern.edu/">College of Arts, Media and Design at Northeastern University</a>.
                <ReadMoreContainer><Link to={RoutePaths.People} viewTransition>Read more about people and partners in this work →</Link></ReadMoreContainer>
            </LandingSponsorsBoilerplate>
            <LandingSponsorsList>
                <LandingSponsorsUl>
                    <SponsorLogo whichSponsor={SponsorId.DorisDuke} />
                    <SponsorLogo whichSponsor={SponsorId.NEA} />
                    <SponsorLogo whichSponsor={SponsorId.JacobsPillow} />
                </LandingSponsorsUl>
                <LandingSponsorsUl className="center-align">
                    <SponsorLogo whichSponsor={SponsorId.IRC} />
                    <SponsorLogo whichSponsor={SponsorId.ASULibrary} />
                </LandingSponsorsUl>
                <LandingSponsorsUl>
                    <SponsorLogo whichSponsor={SponsorId.HarvardRadcliffe} />
                    <SponsorLogo whichSponsor={SponsorId.Williams} />
                    <SponsorLogo whichSponsor={SponsorId.CAMD} />
                    <SponsorLogo whichSponsor={SponsorId.Herberger} />
                </LandingSponsorsUl>
            </LandingSponsorsList>
        </LandingSponsorsColumnContainer>

    </LandingSponsorsContainer>

}

const Landing = () => {
    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return <>
        <StickyHeader scrollPosition={scrollTop} />
        <HamburgerMenu scrollPosition={scrollTop} />
        <KeepScrolling scrollTop={scrollTop} />
        <Hero scrollTop={scrollTop} />
        <ProjectBoilerplate />
        <LandingSponsors />
        <Footer />
    </>;




};

export default Landing;