import styled from "styled-components";
import { SectionId } from "../routing";
import Technology from "./Technology";
import StickyHeader from "../components/StickyHeader";
import People from "./People";
import Footer from "../components/Footer";
import Portraits from "./Portraits";
import Publications from "./Publications";

import ParallaxSubsectionHeader from "../components/ParallaxSubsectionHeader";
import { breakpoint } from "../constants";
import HamburgerMenu from "../components/HamburgerMenu";

const ContentContainer = styled.main`
    width: 100%;
    position: relative;
    margin: 0px;
    padding: 0px;

    margin-bottom: 200px;
    overflow-x: clip;

    @media ${breakpoint.tablet} {
        margin-bottom: 50px;
    }
`;


const SubSectionContainer = ({ whichSection }: { whichSection: SectionId }) => {


    let content;
    if (whichSection === SectionId.Technology) {

        content = <Technology />;

    } else if (whichSection === SectionId.Portraits) {
        content = <Portraits />

    } else if (whichSection === SectionId.People) {

        content = <People />;

    } else if (whichSection === SectionId.Publications) {
        content = <Publications />

    } else {
        content = <></>;
    }


    return <>
        <StickyHeader fixed={true} />
        <HamburgerMenu fixed={true} />
        <ParallaxSubsectionHeader whichSection={whichSection} />
        <ContentContainer>
            {content}
        </ContentContainer>

        <Footer />
    </>
}

export default SubSectionContainer;