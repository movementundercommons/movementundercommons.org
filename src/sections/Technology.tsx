
import styled from "styled-components";
import { PaddedMainContainer, Paragraph } from "../components/layoutComponents";
import PersonSplit from "../visComponents/personSplit";
import ExtractToMocap from "../visComponents/extractToMocap";
import InSituCapture from "../visComponents/inSituCapture";
import SensorAnnotation from "../visComponents/SensorAnnotation";
import { breakpoint } from "../constants";

const TechnologyContainer = styled.div`
    width: 100%;
    margin: 0px;
`;

export const ProcessQuestion = styled.h3`
    font-family: "Darker Grotesque";
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    margin: 0px;
    margin-bottom: 5px;
    padding: 0px;
    margin-top: 25px;
    width: fit-content;
    color: #484443;
    width: 80%;
    display: inline-block;

    @media ${breakpoint.tablet} {
        width: 90%;
    }

`;

const TextAndGraphicRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;

    @media ${breakpoint.laptop} {
        flex-direction: column;
    }
`;

const TextContentContainer = styled.div`
    flex: 1 0 50%;
    margin: 0px;
    margin-bottom: 20px;
    padding: 20px 0px;
    z-index: 100;
    width: 50%;

    & p {
        width: 100%;
    }

    @media ${breakpoint.laptop} {
        flex: 1;
        width: 100%;
        padding: 10px 0px;
        margin-bottom: 0px;
    }
`;

const GraphicContainer = styled.div`
    flex: 1 0 50%;
    width: 50%;
    padding: 0px 20px;

    @media ${breakpoint.laptop} {
        flex: 1 0 100%;
        width: 100%;
        padding: 0px;
        display: flex;
        justify-content: center;
        margin: 25px 0px;
    }
`;


const Technology = () => {
    return <TechnologyContainer>
        <PaddedMainContainer>
            <ProcessQuestion>What does motion capture technology <i>capture</i>?</ProcessQuestion>
        </PaddedMainContainer>
        <ExtractToMocap />
        <PaddedMainContainer>

            <TextAndGraphicRowContainer>
                <TextContentContainer>
                    <ProcessQuestion>What happens when movement is separated from the body?</ProcessQuestion>
                    <Paragraph className="right-aligned">Motion capture technology aims to record human movement in pursuit of reproducing it, separate from the body. However, the process of collecting motion capture data is intrinsically deductive and reductive; it isolates and highlights certain aspects of movement while disappearing others.
                    </Paragraph>
                </TextContentContainer>
                <GraphicContainer><PersonSplit /></GraphicContainer>
            </TextAndGraphicRowContainer>
            <ProcessQuestion>What kind of movement does motion capture technology make visible?</ProcessQuestion>
            <Paragraph>Motion capture aims to make one feature of movement visible — generalized and universalized movement that can be mixed and matched across bodies like fractions with a lowest common denominator. Motion capture technology is designed around this pursuit, extracting them from their everyday context and placing them in a studio with equipment that records high-fidelity movement data. In controlling for the environment, motion capture seeks to eliminate noisy data and illustrate universalized movement.</Paragraph>
            <InSituCapture />
            <ProcessQuestion>Can body and movement be disambiguated?</ProcessQuestion>
            <Paragraph>
                The <b>Movement Undercommons: Technology as Resistance | Future Archives</b> poses questions that reveal underlying assumptions in the canon of motion capture technology, at the intersection of movement and data. The body and movement cannot be disambiguated; they are one and the same.
            </Paragraph>
            <Paragraph>
                While photography, video, and audio technologies have accelerated the means and ways in which movement can be recorded, movement-as-digital-object is a relatively new phenomenon. Despite the ephemerality of movement (notwithstanding specialized forms of dance notation), motion capture technologies enable the recording and representation of complex human movement with a density of details until recently. This in turn yields an enormous amount of data intended to serve as a stand-in for the body behind the movement.
            </Paragraph>
            <ProcessQuestion>What happens when you put motion capture technology on people in everyday context, <i>in situ</i>?</ProcessQuestion>

            <TextAndGraphicRowContainer>
                <TextContentContainer>
                    <Paragraph>
                        The Movement Undercommons explores possibilities latent in mobile motion capture technologies to create a series of movement data portraits. The work aims to explore the expressive significance of an individual’s movement patterns – one’s dynamic movement fingerprint — with recent advances that allow this technology to be mobile. With this advancement, the project adopts an ethnographic framing; bringing the mocap tech into play in the field, reimagining its use to engage participation and collaboration with communities who would not typically have access to it.
                    </Paragraph>
                    <Paragraph>
                        The movement portraits generated in this project focus on the everyday movements of people generally overlooked by ‘creatives’ in the field (e.g., game developers, professional athletes and dancers). Thus, this project creates a platform for the development of a digital movement lexicon that considers cultural context along with data collection, archiving, and distribution.
                    </Paragraph>
                </TextContentContainer>
                <GraphicContainer><SensorAnnotation /></GraphicContainer>

            </TextAndGraphicRowContainer>

            <ProcessQuestion>Of the ethnography and ethics</ProcessQuestion>
            <Paragraph>
                This project emerges in a time when “borders and bodies are increasingly regulated by data-capturing mechanisms spread across the world through information and communication technologies.” With acute awareness of colonial legacies, this project makes explicit the processes of collecting, categorizing, using and interpreting data in resistance to various modes of standardization and reduction imposed by increasingly data-driven cultural/knowledge systems. <em>How might a movement identity be an emergent property of data analysis?</em> This work looks to imbue the movement data to reflect stories of a nuanced history of movement — creative, labor, ritualized, coerced — and how that identity is or is not ‘of a place’.
            </Paragraph>
            <Paragraph>
                This project also centers questions of movement vernaculars. With millions of people displaced every day, which ways of life are ‘carried along’ through expressions of the body? Which vernaculars persist? Which are vanishing? By investigating movement vernaculars through computational means, this project challenges the notion of digital neutrality and critiques assumptions of idealized human form that can be embedded in computational models and reductionist processes of understanding human movement.
            </Paragraph>
            <Paragraph>
                Motion capture data are now abundantly available, in open and unannotated forms. Yet, embedded within these open data we observe underlying <em>computational perspectives</em> (i.e., human perspectives) typically coming from a culturally hegemonic technology class that is hardwired or algorithmically built into the machine. <em>How do we collect data about movement in a manner that resembles recognition, and not exposure?</em> By highlighting movement as formal and legible, this project spotlights and values alternative ways to tell stories, imagine documentation, and bring nuance and distinction to the portrait subjects.
            </Paragraph>
        </PaddedMainContainer>
    </TechnologyContainer>

};

export default Technology;