import styled from "styled-components";
import MocapCanon from "./mocapCanon";

const ExtractToMocapContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0px;
`;

const ExtractToMocap = () => {

    return <ExtractToMocapContainer>
        <MocapCanon />
    </ExtractToMocapContainer>;
}


export default ExtractToMocap;