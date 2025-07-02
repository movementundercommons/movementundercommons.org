import styled from "styled-components";

const FixedKeepScrollingContainer = styled.div`
    position: fixed;
    right: 0px;
    bottom: 0px;
    z-index: 100;
`;

const KeepScrollingArrow = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    padding: 15px;
    color: #111111;

`;


const KeepScrolling = ({ scrollTop }: { scrollTop: number }) => {


    if (scrollTop < 500) {

        return <FixedKeepScrollingContainer>
            <KeepScrollingArrow>
                Scroll ↓
            </KeepScrollingArrow>
        </FixedKeepScrollingContainer>

    } else {

        return <></>;
    }

}

export default KeepScrolling;