import styled from "styled-components";
import { primaryOrangeTriplet, secondaryOrangeHexcode } from "./layoutComponents";
import { breakpoint, RoutePaths } from "../constants";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

const MenuAndNavContainer = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 2000;
    display: none;
    transition: background 0.3s;

    &.fixed {
        transform: unset;
        position: sticky;
        top: 0px;
    }

    &.expanded {
        height: 100vh;
        background: rgba(255, 255, 255, 1);
    }


    &.closed {
        height: fit-content;
        background: rgba(255, 255, 255, 0);
    }

    @media ${breakpoint.phone} {
        display: block;
    }

    &:hover #dropdown-arrow {
        border-color: ${secondaryOrangeHexcode};
    }

`;

const HamburgerMenuContainer = styled.div`
    font-family: "Darker Grotesque", sans-serif;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    font-size: 1rem;
    margin: 0px;
    margin-right: 15px;
    padding-top: 30px;
    padding: 15px 25px 15px 25px;
    background-color: rgba(${primaryOrangeTriplet.join(", ")}, 0);
    border-bottom: 1px solid #F0F0F0;
    cursor: pointer;
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


`;

const NavigationContainer = styled.nav`
    display: block;
    margin: 0px;
    padding: 0px;
    width: 100%;
    display: none;
    opacity: 0;
    transition: opacity 0.3s;
    transition-delay: 0.1s;

    &.expanded {
        opacity: 1;
        display: block;
    }

    &.closed {
        opacity: 0;
        display: none;
    }
`;

const NavigationUl = styled.ul`
    padding: 0px 20px;
    margin: 10px 0px;

    text-indent: 0px;
    list-style-type: none;
`;

const NavigationLi = styled.li`
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    display: block;
    position: relative;
    font-weight: 500;
    font-size: 1.5em;

    & a {
        color: inherit;
        width: fit-content;
        width: 100%;
        position: relative;
        padding: 0px 5px 2px 5px;
        border-radius: 20px;
        text-decoration: none;
    }

    & a:hover {
        color: rgb(${primaryOrangeTriplet.join(",")});    
    }

    &.selected a {
        color: rgb(${primaryOrangeTriplet.join(",")});
    }



`;

const DropdownArrow = styled.span`

    border-style: solid;
    border-color: #000000;
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    cursor: pointer;


    transition: transform 0.3s;

    &.up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);

    }

    &.down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    
    }

    &.hidden {
        border-color: #000000;

    }

    &.visible {
        border-color: #ffffff;

    }

    &.fixed {
        border-color: #ffffff;
    }

    


`;

const HamburgerMenu = ({ scrollPosition, fixed }: { scrollPosition?: number | undefined, fixed?: boolean | undefined }) => {

    let { pathname } = useLocation();

    let [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setMenuIsOpen(false);
    }, [pathname]);

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



    return <MenuAndNavContainer className={`${fixed ? "fixed" : ""} ${menuIsOpen ? "expanded" : "closed"}`}>
        <HamburgerMenuContainer className={className} onClick={() => setMenuIsOpen((c: boolean) => !c)}>
            <Title>
                Movement Undercommons
            </Title>
            <DropdownArrow id="dropdown-arrow" className={`${menuIsOpen ? "up" : "down"} ${scrollPosition && scrollPosition > 250 ? "visible" : "hidden"} ${fixed ? "fixed" : ""}`} />
        </HamburgerMenuContainer>
        <NavigationContainer className={menuIsOpen ? "expanded" : "closed"}>
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
    </MenuAndNavContainer>

}

export default HamburgerMenu;