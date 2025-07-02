import styled, { keyframes } from "styled-components";
import { primaryOrangeTriplet } from "./layoutComponents";
import { Link, useLocation } from "react-router";
import { breakpoint, RoutePaths } from "../constants";


const underlineAnimation = keyframes`
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
`;

const StickyHeaderContainer = styled.div`
    font-family: "Darker Grotesque", sans-serif;
    width: 100%;
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
    margin: 0px;
    margin-right: 15px;
    padding-top: 30px;
    padding: 15px 25px 15px 25px;
    background-color: rgba(${primaryOrangeTriplet.join(", ")}, 0);
    border-bottom: 1px solid #F0F0F0;
    z-index: 2000;
    transition: background-color 0.5s, border-bottom 0.5s, color 0.5s;

    &.hidden {
        background-color: rgba(${primaryOrangeTriplet.join(", ")}, 0);
        color: #333333;
        border-bottom: 1px solid #333333;
    }

    &.visible {
        background-color: rgba(${primaryOrangeTriplet.join(", ")}, 1);
        border-bottom: 1px solid #F0F0F0;
        color: #ffffff;
        top: 0px;

    }

    &.fixed {
        transform: unset;
        position: sticky;
        top: 0px;
    }

    & a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }

    &.visible a {
        background: unset;
    }

    &.hidden a:hover::after {
        background-color: #333333;
    }

    &.visible a:hover::after {
        background-color: #ffffff;
    }

    &.hidden .selected.landing a::after {
        background-color: #333333;    
    }

    &.visible .selected.landing a::after {
        background-color: #ffffff;    
    }

    &.hidden ul {
        background: rgba(255,255,255,0.2);
        border-radius: 10px;
    }

    @media ${breakpoint.phone} {
        display: none;
    }

`;

const Title = styled.h1`
    color: inherit;
    font-size: 1.2em;
    line-height: 1em;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    margin: 0px;
    padding: 0px;
    cursor: default;

    @media ${breakpoint.tablet} {
        font-size: 1em;
    }

`;

const NavigationContainer = styled.nav`
    margin: 0px;
    padding: 0px;
    width: fit-content;
`;

const NavigationUl = styled.ul`
    padding: 0px;
    margin: 0px;
    text-indent: 0px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
`;

const NavigationLi = styled.li`
    flex: 1 0 auto;
    margin: 0px;
    padding: 0px 10px;
    display: inline-block;
    position: relative;
    font-weight: 500;
    font-size: 1em;

    & a {
        width: fit-content;
        width: 100%;
        position: relative;
        padding: 0px 5px 2px 5px;
        border-radius: 20px;
    }

    &:not(.selected) a:hover::after {
        position: absolute;
        bottom: -5px;
        left: 0px;
        width: 0%;
        height: 4px;
        content: '';
        border-radius: 5px 0px 5px 0px;

        animation: ${underlineAnimation} 0.2s ease-out 1;
        animation-fill-mode: forwards;
    }


    &.selected a::after {
        position: absolute;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 4px;
        content: '';
        border-radius: 5px 0px 5px 0px;
        background-color: #ffffff;
    }



`;


const StickyHeader = ({ scrollPosition, fixed }: { scrollPosition?: number | undefined, fixed?: boolean | undefined }) => {


    let { pathname } = useLocation();

    let className;
    if (fixed) {
        className = "visible fixed";
    } else {
        if (scrollPosition && scrollPosition > 250) {
            className = "visible";
        } else {
            className = "hidden";
        }

    }



    return <StickyHeaderContainer className={className}>
        <Title>
            <Link to={RoutePaths.Landing}>The Movement Undercommons</Link>
        </Title>
        <NavigationContainer>
            <NavigationUl>
                <NavigationLi className={pathname === RoutePaths.Landing ? "selected landing" : ""}>
                    <Link to={RoutePaths.Landing}>Project</Link>
                </NavigationLi>
                <NavigationLi className={pathname === RoutePaths.Portraits ? "selected" : ""}>
                    <Link to={RoutePaths.Portraits}>Portraits</Link>
                </NavigationLi>
                <NavigationLi className={pathname === RoutePaths.Technology ? "selected" : ""}>
                    <Link to={RoutePaths.Technology}>Technology</Link>
                </NavigationLi>
                <NavigationLi className={pathname === RoutePaths.People ? "selected" : ""}>
                    <Link to={RoutePaths.People}>People</Link>
                </NavigationLi>
                <NavigationLi className={pathname === RoutePaths.Publications ? "selected" : ""}>
                    <Link to={RoutePaths.Publications}>Publications</Link>
                </NavigationLi>
            </NavigationUl>
        </NavigationContainer>
    </StickyHeaderContainer>;
}

export default StickyHeader;