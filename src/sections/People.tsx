import styled from "styled-components";
import { bodyTextFont, PaddedMainContainer, primaryOrangeTriplet, Subheader } from "../components/layoutComponents";
import SponsorsList from "../components/SponsorsList";
import HyperlinkPopoutIcon from "../assets/graphics/hyperlink-popout.svg";
import { breakpoint } from "../constants";


const PeopleContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media ${breakpoint.tablet} {
        flex-direction: column;
    }
`;

const TeamColumn = styled.div`
    flex: 1 0 50%;

    @media ${breakpoint.tablet} {
        flex: 1 0 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;


    }
`;


const PeopleUl = styled.ul`
    list-style-type: none;
    text-indent: 0px;
    margin: 0px;
    padding: 0px;
    margin-bottom: 50px;

    @media ${breakpoint.tablet} {
        flex: 1 0 45%;
        margin: 10px 0px;
    }

    @media ${breakpoint.phone} {
        flex: unset;
        width: 100%;
        margin: 10px 0px;
    }

`;

const PeopleLi = styled.li`
    ${bodyTextFont}
    margin: 5px 0px;
    padding: 0px;

    &.inactive {
        color: #999999;
        font-style: italic;
        position: relative;
        width: fit-content;
    }


    & a:link, a:visited {
        color: rgb(${primaryOrangeTriplet.join(",")});
    }

    & a:hover {
        text-decoration: underline;
    }

    &.inactive a {
        color: #999999;
    }

`;


const SponsorsColumn = styled.div`
    flex: 1 0 50%;
`;


const HyperlinkPopoutImageElement = styled.img`
    width: 15px;
    margin-left: 5px;
`;

const HyperlinkPopout = ({ url }: { url: string }) => {

    return <a target="_blank" href={url}><HyperlinkPopoutImageElement src={HyperlinkPopoutIcon} /></a>
}

const People = () => {

    return <PaddedMainContainer>
        <PeopleContainer>
            <TeamColumn>
                <PeopleUl>
                    <Subheader>Data Collection</Subheader>
                    <PeopleLi>Jack Rifkin<HyperlinkPopout url={"https://www.jackrifk.in"} /></PeopleLi>
                    <PeopleLi>Kian Chan</PeopleLi>
                    <PeopleLi>Amira Samiy<HyperlinkPopout url={"http://amirasamiy.squarespace.com/"} /></PeopleLi>
                    <PeopleLi className="inactive">Jiaying Brust</PeopleLi>
                    <PeopleLi className="inactive">Zakiya Johnson</PeopleLi>
                    <PeopleLi className="inactive">Lavendar Sy</PeopleLi>
                    <PeopleLi className="inactive">Autumn Dorsey</PeopleLi>
                    <PeopleLi className="inactive">Lily Cunningham<HyperlinkPopout url={"https://lilycunninghamperini.com/"} /></PeopleLi>
                </PeopleUl>
                <PeopleUl>
                    <Subheader>Animation</Subheader>
                    <PeopleLi>Shawn Lawson<HyperlinkPopout url={"https://search.asu.edu/profile/3706429"} /></PeopleLi>
                    <PeopleLi>Jack Rifkin<HyperlinkPopout url={"https://www.jackrifk.in"} /></PeopleLi>
                    <PeopleLi></PeopleLi>
                    <PeopleLi></PeopleLi>
                    <PeopleLi></PeopleLi>
                </PeopleUl>
                <PeopleUl>
                    <Subheader>Sound</Subheader>
                    <PeopleLi>Michael Krzyzaniak<HyperlinkPopout url={"https://michaelkrzyzaniak.com/"} /></PeopleLi>
                    <PeopleLi>Kian Chan</PeopleLi>
                    <PeopleLi className="inactive">Val Jeanty<HyperlinkPopout url={"https://www.thecarrcenter.org/val-jeanty/"} /></PeopleLi>
                    <PeopleLi className="inactive">Lavendar Sy</PeopleLi>
                    <PeopleLi className="inactive">Autumn Dorsey</PeopleLi>

                </PeopleUl>
                <PeopleUl>
                    <Subheader>Motion Capture & Engineering</Subheader>
                    <PeopleLi>Aston McCullough<HyperlinkPopout url={"https://bouve.northeastern.edu/directory/aston-mccullough/"} /></PeopleLi>
                    <PeopleLi className="inactive">Tejaswi Gowda<HyperlinkPopout url={"https://search.asu.edu/profile/793113"} /></PeopleLi>
                    <PeopleLi className="inactive">Poojan Vanani<HyperlinkPopout url={"https://search.asu.edu/profile/4761242"} /></PeopleLi>
                    <PeopleLi className="inactive">Danyal Khorami<HyperlinkPopout url={"https://search.asu.edu/profile/4785358"} /></PeopleLi>
                    <PeopleLi className="inactive">Assegid Kidane<HyperlinkPopout url={"https://search.asu.edu/profile/215415"} /></PeopleLi>
                </PeopleUl>

                <PeopleUl>
                    <Subheader>Installation Design</Subheader>
                    <PeopleLi>Ryan Jenkins<HyperlinkPopout url={"https://www.ryanjenkins.work/"} /></PeopleLi>
                    <PeopleLi>Heather Hart<HyperlinkPopout url={"https://www.heather-hart.com/"} /></PeopleLi>
                    <PeopleLi className="inactive">Celeste Martore<HyperlinkPopout url={"https://celestemartore.com/"} /></PeopleLi>
                </PeopleUl>
                <PeopleUl>
                    <Subheader>Creative Production & Administration</Subheader>
                    <PeopleLi>Constanza Armes Cruz</PeopleLi>
                    <PeopleLi>Amira Samiy<HyperlinkPopout url={"http://amirasamiy.squarespace.com/"} /></PeopleLi>

                </PeopleUl>

                <PeopleUl>
                    <Subheader>Website</Subheader>
                    <PeopleLi>Steven Geofrey<HyperlinkPopout url={"https://sgeofrey.info"} /></PeopleLi>
                    <PeopleLi>Jack Rifkin<HyperlinkPopout url={"https://www.jackrifk.in"} /></PeopleLi>
                </PeopleUl>
                <PeopleUl>
                    <Subheader>Data Ethics</Subheader>
                    <PeopleLi>Brian Michael Murphy<HyperlinkPopout url={""} /></PeopleLi>
                    <PeopleLi className="inactive">Jessica Fjeld<HyperlinkPopout url={"https://cyber.harvard.edu/people/jfjeld"} /></PeopleLi>
                </PeopleUl>
                <PeopleUl>
                    <Subheader>Additional Consultants</Subheader>
                    <PeopleLi className="inactive">Melissa Cliver, Design Strategist</PeopleLi>
                </PeopleUl>
            </TeamColumn>
            <SponsorsColumn>
                <Subheader>Partners</Subheader>
                <SponsorsList />
            </SponsorsColumn>
        </PeopleContainer>
    </PaddedMainContainer>;
}

export default People;