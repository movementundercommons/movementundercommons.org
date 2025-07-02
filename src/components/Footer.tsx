import styled from "styled-components";
import { primaryOrangeDesaturatedTriplet, secondaryOrangeHexcode } from "./layoutComponents";
import FallingFooterTitle from "./FooterTitle";
import { Link } from "react-router";
import { RoutePaths } from "../routing";
import { breakpoint } from "../constants";

const FooterContainer = styled.footer`
    font-family: "Darker Grotesque", sans-serif;
    width: 100%;
    margin: 0px;
    padding: 50px;
    padding-top: 100px;
    position: relative;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${secondaryOrangeHexcode};
    color: #555555;
    border-top: 1px solid #ffffff;
    overflow: clip;
    font-size: 1.4rem;

    &::before {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1000;
        width: 100%;
        height: 50px;
        content: '';
        background: linear-gradient(to bottom, rgba(${primaryOrangeDesaturatedTriplet.join(",")}, 0.5), rgba(${primaryOrangeDesaturatedTriplet.join(",")}, 0));
    }

    @media ${breakpoint.tablet} {
        padding: 50px 25px;
        padding-top: 60px;
    }

`;

const ProjectTitle = styled.h1`

    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
    font-size: inherit;

`;

const ByLine = styled.aside`
    font-size: inherit;
`;

const FooterNavUl = styled.ul`
    list-style-type: none;
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: inherit;
`;

const FooterNavLi = styled.li`
    & a:link, a:visited {
        color: inherit;
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    }
`;

const Footer = () => {

    return <FooterContainer>
        <FallingFooterTitle />
        <ProjectTitle>The Movement Undercommons</ProjectTitle>
        <ByLine>A Project by Grisha Coleman</ByLine>
        <FooterNavUl>
            <FooterNavLi>
                <Link to={RoutePaths.Landing} viewTransition>Project</Link>
            </FooterNavLi>
            <FooterNavLi>
                <Link to={RoutePaths.Portraits} viewTransition>Portraits</Link>
            </FooterNavLi>
            <FooterNavLi>
                <Link to={RoutePaths.Technology} viewTransition>Technology</Link>
            </FooterNavLi>
            <FooterNavLi>
                <Link to={RoutePaths.People} viewTransition>People</Link>
            </FooterNavLi>
            <FooterNavLi>
                <Link to={RoutePaths.Publications} viewTransition>Publications</Link>
            </FooterNavLi>
        </FooterNavUl>
    </FooterContainer>

}

export default Footer;