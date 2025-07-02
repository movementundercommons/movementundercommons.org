import styled, { css } from "styled-components";
import { breakpoint } from "../constants";

export const primaryOrangeTriplet = [155, 90, 64];
export const primaryOrangeDesaturatedTriplet = [209, 194, 188];
export const secondaryOrangeHexcode = "#eec079";

export const darkGrayscaleTriplet: number[] = [100, 100, 100];
export const lightGrayscaleTriplet: number[] = [200, 200, 200];


export const bodyTextFont = css`
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.4rem;

`;

export const bodyTextColor = "#484443";

export const Paragraph = styled.p`
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.8rem;


    font-family: "Figtree", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;

    width: 80%;
    color: ${bodyTextColor};


    position: relative;
    margin-bottom: 10px;
    padding: 0px;

    &.spacer {
        margin-top: 200px;
    }

    & b {
        font-weight: 600;
    }

    @media ${breakpoint.tablet} {
        width: 90%;
    }

`;



export const SceneContainer = styled.div`

    width: 100%;
    margin: 0px auto 0px auto;
    display: block;
    position: relative;

`;




export const DataPortraitSampleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #3e3e3e;
    border-bottom: 1px solid #3e3e3e;
    padding-left: 50px;
    margin-bottom: 100px;
`;

export const DataPortraitInnerContainer = styled.div`

`;

export const Subheader = styled.h2`
    font-family: "Darker Grotesque", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    width: fit-content;

    &::after {
        position: absolute;
        bottom: -10px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: '';
        background-color: #484443;
        border-radius: 5px 0px 5px 0px;
    }
`;

export const titleTextPathDefinitions: string[] = [
    "M.5,5.9V1h23.9v4.8H.5ZM15.2,2v29.9h-5.6V2h5.6Z",
    "M34.3,32h-5.7V1h5.7v30.9ZM52.4,18.4h-21.1v-4.3h21.1v4.3ZM49,1h5.6v30.9h-5.6V1Z",
    "M60.7,32V1h22.1v4.8h-16.5v8.1h12.7v4.6h-12.7v8.8h17.1v4.5h-22.6Z",
    "M105.6,32V1h9.8l7.3,28.5h.1l7.2-28.5h9.7v30.9h-5.8l.4-28.4h0l-7.4,28.4h-8.2l-7.3-28.4h-.1l.3,28.4h-5.8Z",
    "M159.1,32.7c-5,0-8.8-1.5-11.4-4.4-2.6-2.9-4-6.8-4-11.8s.6-6.1,1.7-8.5c1.1-2.4,2.8-4.3,5.1-5.6,2.3-1.3,5.1-2,8.5-2,5,0,8.8,1.5,11.5,4.4,2.6,2.9,3.9,6.8,3.9,11.7s-.6,6-1.8,8.4c-1.2,2.4-2.9,4.3-5.2,5.7-2.3,1.4-5.1,2-8.5,2ZM159.1,27.4c2.2,0,4.1-.5,5.5-1.4,1.5-.9,2.6-2.2,3.3-3.8.7-1.6,1.1-3.5,1.1-5.5s-.4-3.9-1.1-5.6c-.7-1.6-1.8-2.9-3.3-3.8-1.5-.9-3.3-1.4-5.5-1.4-3.2,0-5.7,1-7.4,3-1.7,2-2.5,4.6-2.5,7.9s.4,3.8,1.1,5.5c.7,1.6,1.8,2.9,3.3,3.9,1.5,1,3.3,1.4,5.5,1.4Z",
    "M200,1h6.2l-10.2,30.9h-9.3l-10.2-30.9h6.1l8.7,28.6,8.8-28.6Z",
    "M210.4,32V1h22.1v4.8h-16.5v8.1h12.7v4.6h-12.7v8.8h17.1v4.5h-22.6Z",
    "M238.2,32V1h9.8l7.3,28.5h.1l7.2-28.5h9.7v30.9h-5.8l.4-28.4h0l-7.4,28.4h-8.2l-7.3-28.4h-.1l.3,28.4h-5.8Z",
    "M278.3,32V1h22.1v4.8h-16.5v8.1h12.7v4.6h-12.7v8.8h17.1v4.5h-22.6Z",
    "M327.2,1h5.8v30.9h-10.7l-10.6-28.5h-.1v28.5h-5.8V1h9.9l11.3,28.5h.1V1Z",
    "M336.7,5.9V1h23.9v4.8h-23.9ZM351.4,2v29.9h-5.6V2h5.6Z",
    "M395.2,32.7c-4.4,0-7.7-1.2-10-3.7-2.3-2.4-3.5-5.9-3.5-10.3V1h6v17.7c0,1.7.2,3.1.6,4.3.4,1.1,1,2,1.7,2.6.7.6,1.5,1.1,2.4,1.4.9.3,1.8.4,2.7.4,1.4,0,2.7-.2,3.8-.7,1.1-.5,2-1.4,2.7-2.6.7-1.3,1-3,1-5.3V1h5.9v17.7c0,4.5-1.1,8-3.4,10.4s-5.6,3.6-10.1,3.6Z",
    "M435.8,1h5.8v30.9h-10.7l-10.6-28.5h-.1v28.5h-5.8V1h9.9l11.3,28.5h.1V1Z",
    "M473.7,26c-1.6,2.3-3.8,3.8-6.7,4.7-2.9.9-6.3,1.3-10.2,1.3h-8.5V1h8.5c3.9,0,7.3.6,10.2,1.7,2.9,1.2,5.1,2.9,6.7,5.1,1.6,2.3,2.4,5.1,2.4,8.6s-.8,7.2-2.4,9.5ZM456.8,27.4h1.5c1.8,0,3.5-.2,4.9-.5,1.4-.3,2.7-.9,3.7-1.6,1-.8,1.8-1.9,2.4-3.3.5-1.4.8-3.3.8-5.5s-.5-4.3-1.4-5.9c-1-1.6-2.3-2.7-4.1-3.5-1.8-.8-3.8-1.2-6.3-1.2h-4.6v21.5h3Z",
    "M481,32V1h22.1v4.8h-16.5v8.1h12.7v4.6h-12.7v8.8h17.1v4.5h-22.6Z",
    "M508.7,32V1h11.4c2.7,0,5,.3,6.8.9,1.9.6,3.3,1.5,4.3,2.8,1,1.3,1.5,3.1,1.5,5.4s-.3,3.2-.8,4.4c-.5,1.3-1.3,2.3-2.4,3-1,.7-2.3,1.1-3.9,1.1,1.1,0,2,.2,2.6.6.6.4,1.1,1,1.4,1.6.3.7.5,1.4.6,2.2.1.8.2,1.5.3,2.3,0,.7.2,1.4.5,1.9s.6.9,1,1c.5.2,1.2,0,2.1-.2v3.2c-.7.6-1.5,1-2.5,1.2-1,.2-1.9.1-2.8-.2-.9-.3-1.7-1-2.3-2-.6-1-.9-2.3-.9-4.1s0-2.4-.2-3.2-.4-1.6-.7-2.1c-.4-.5-1-.9-1.8-1.2-.8-.3-1.9-.4-3.3-.5-1.4,0-3.2,0-5.4,0v12.8h-5.6ZM514.3,15.1h5.5c1.8,0,3.3,0,4.5-.2,1.2-.2,2-.6,2.6-1.2.6-.7.9-1.7.9-3.1s-.3-2.7-1-3.4c-.7-.7-1.7-1.1-3-1.3-1.3-.2-3-.2-4.9-.2h-4.4v9.5Z",
    "M552.6,32.5c-2.9,0-5.5-.6-7.9-1.8-2.3-1.2-4.2-3-5.6-5.3-1.4-2.3-2.1-5.3-2.1-8.8,0-3.4.7-6.4,2.1-8.8,1.4-2.4,3.2-4.2,5.6-5.5s5-1.9,8-1.9,5.3.5,7.3,1.5c2,1,3.6,2.4,4.9,4.2,1.2,1.8,2,3.7,2.4,5.9h-5.8c-.3-1.6-.9-2.9-1.8-3.8-.9-.9-2-1.6-3.3-2-1.2-.4-2.5-.6-3.7-.6-3.3,0-5.8.9-7.5,2.7-1.7,1.8-2.6,4.4-2.6,7.7s.9,6.3,2.6,8.2c1.7,1.9,4.2,2.9,7.4,2.9s2.7-.2,4-.6c1.3-.4,2.4-1.1,3.3-2.1.9-1,1.5-2.3,1.8-3.9h5.8c-.4,2.2-1.2,4.3-2.4,6.1-1.2,1.8-2.8,3.2-4.9,4.3-2.1,1-4.6,1.5-7.6,1.5Z",
    "M585.5,32.7c-5,0-8.8-1.5-11.4-4.4-2.6-2.9-4-6.8-4-11.8s.6-6.1,1.7-8.5c1.1-2.4,2.8-4.3,5.1-5.6,2.3-1.3,5.1-2,8.5-2,5,0,8.8,1.5,11.5,4.4,2.6,2.9,3.9,6.8,3.9,11.7s-.6,6-1.8,8.4c-1.2,2.4-2.9,4.3-5.2,5.7-2.3,1.4-5.1,2-8.5,2ZM585.5,27.4c2.2,0,4.1-.5,5.5-1.4,1.5-.9,2.6-2.2,3.3-3.8.7-1.6,1.1-3.5,1.1-5.5s-.4-3.9-1.1-5.6c-.7-1.6-1.8-2.9-3.3-3.8-1.5-.9-3.3-1.4-5.5-1.4-3.2,0-5.7,1-7.4,3-1.7,2-2.5,4.6-2.5,7.9s.4,3.8,1.1,5.5c.7,1.6,1.8,2.9,3.3,3.9,1.5,1,3.3,1.4,5.5,1.4Z",
    "M606,32V1h9.8l7.3,28.5h.1l7.2-28.5h9.7v30.9h-5.8l.4-28.4h0l-7.4,28.4h-8.2l-7.3-28.4h-.1l.3,28.4h-5.8Z",
    "M646.3,32V1h9.8l7.3,28.5h.1l7.2-28.5h9.7v30.9h-5.8l.4-28.4h0l-7.4,28.4h-8.2l-7.3-28.4h-.1l.3,28.4h-5.8Z",
    "M699.8,32.7c-5,0-8.8-1.5-11.4-4.4-2.6-2.9-4-6.8-4-11.8s.6-6.1,1.7-8.5c1.1-2.4,2.8-4.3,5.1-5.6,2.3-1.3,5.1-2,8.5-2,5,0,8.8,1.5,11.5,4.4,2.6,2.9,3.9,6.8,3.9,11.7s-.6,6-1.8,8.4c-1.2,2.4-2.9,4.3-5.2,5.7-2.3,1.4-5.1,2-8.5,2ZM699.7,27.4c2.2,0,4.1-.5,5.5-1.4s2.6-2.2,3.3-3.8c.7-1.6,1.1-3.5,1.1-5.5s-.4-3.9-1.1-5.6c-.7-1.6-1.8-2.9-3.3-3.8-1.5-.9-3.3-1.4-5.5-1.4-3.2,0-5.7,1-7.4,3s-2.5,4.6-2.5,7.9.4,3.8,1.1,5.5c.7,1.6,1.8,2.9,3.3,3.9,1.5,1,3.3,1.4,5.5,1.4Z",
    "M741.4,1h5.8v30.9h-10.7l-10.6-28.5h-.1v28.5h-5.8V1h9.9l11.3,28.5h.1V1Z",
    "M765.5,32.6c-1.7,0-3.4-.2-5-.6-1.6-.4-3.1-1-4.4-1.9-1.3-.9-2.3-2-3.1-3.4-.8-1.4-1.2-3-1.2-4.9h5.7c0,.1,0,.4.1.9,0,.4.3.9.6,1.5.3.5.8,1.1,1.4,1.6.6.5,1.4.9,2.5,1.3,1,.3,2.4.5,3.9.5s2-.1,2.8-.3,1.4-.5,2-.9c.5-.4.9-.8,1.2-1.2.3-.5.4-.9.4-1.3,0-1-.4-1.8-1.1-2.4-.7-.6-1.7-1.1-2.9-1.5-1.2-.4-2.5-.7-3.9-1-1.4-.3-2.8-.7-4.2-1.1s-2.7-1-3.9-1.7c-1.2-.7-2.1-1.6-2.7-2.8-.6-1.1-.9-2.6-.9-4.3.1-1.7.8-3.2,1.8-4.4s2.5-2.2,4.5-2.9c1.9-.7,4.1-1,6.6-1s4.2.4,6.1,1.2c1.9.8,3.4,2,4.6,3.5,1.2,1.6,1.7,3.5,1.7,6h-5.4c0-1.1-.3-2.1-.8-2.8-.5-.7-1.2-1.3-2-1.6-.8-.4-1.6-.6-2.5-.8-.9-.1-1.7-.2-2.4-.2-1.8,0-3.3.3-4.5.9-1.2.6-1.8,1.5-1.8,2.8,0,1.1.3,1.9,1,2.5s1.7,1.1,2.9,1.5c1.2.4,2.5.7,4,1,1.4.3,2.9.7,4.3,1.1,1.4.4,2.7,1,3.9,1.6,1.2.7,2.1,1.6,2.7,2.7.7,1.1,1,2.6.9,4.5,0,1.7-.7,3.2-1.8,4.4-1.1,1.2-2.6,2.2-4.5,2.8-1.9.7-4.1,1-6.6,1Z"
];

export const FigureCaption = styled.aside`

    display: block;
    width: fit-content;
    margin: 0px;
    padding: 20px 0px 10px 0px;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 300;
    color: #333333;
    position: relative;
    align-self: flex-start;

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

    & a:link, a:visited {
        text-decoration: none;
        color: rgb(${primaryOrangeTriplet.join(",")});
    }

    & a:hover {
        text-decoration: underline;
    }

    @media ${breakpoint.tablet} {
        font-size: 1.2rem;
        line-height: 1.4rem;
    }

`;

export const ReadMoreContainer = styled.span`
    ${bodyTextFont}
    display: block;
    margin: 20px 0px;
    padding: 0px;
    color: rgb(${primaryOrangeTriplet.join(", ")});
    position: relative;
    width: fit-content;
    font-weight: 500;
    margin-right: auto;
    cursor: pointer;

    & a:link, a:visited {
        color: inherit;
        text-decoration: none;
        width: fit-content;
    }

    & a:hover {
        text-decoration: underline;
    }


`;

export const PaddedMainContainer = styled.div`
    margin: 0px;
    padding: 0px;
    padding-left: 50px;
    padding-right: 50px;


    @media ${breakpoint.tablet} {
        padding-left: 25px;
        padding-right: 25px;
    }

`;