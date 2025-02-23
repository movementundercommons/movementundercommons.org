import { SceneContainer } from "./components/layout";
import MocapContainer from "./components/mocapContainer";
import PersonFigure from "./components/personFigure";
import PersonSplit from "./components/personSplit";
import { PersonType } from "./constants";

const App = () => {

  return (
    // <>
    //   <PersonFigure personType={PersonType.PersonType1} />
    //   <PersonFigure personType={PersonType.PersonType2} />
    //   <PersonFigure personType={PersonType.PersonType3} />
    // </>
    <>
      <SceneContainer>
        <MocapContainer />
      </SceneContainer>
      <SceneContainer>
        <PersonSplit />
      </SceneContainer>
    </>
  )
}

export default App;
