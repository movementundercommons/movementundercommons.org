import { createContext } from "react";

export enum PersonType {

    PersonType1 = "PersonType1",
    PersonType2 = "PersonType2",
    PersonType3 = "PersonType3",
    MocapPerson1 = "MocapPerson1",
    MocapPerson2 = "MocapPerson2",
    PersonOutline = "PersonOutline"

}

export const LoadingContext = createContext<any>(null);


export enum SectionId {
    Landing = "Landing",
    Technology = "Technology",
    Portraits = "Portraits",
    People = "People",
    Publications = "Publications"
}

export enum RoutePaths {
    Landing = "/",
    Portraits = "/portraits",
    Technology = "/technology",
    People = "/people",
    Publications = "/publications"

}


/* Media Query Breakpoints */

export const breakpoint = {
    laptop: `(max-width: 1100px)`,
    tablet: `(max-width: 800px)`,
    phone: `(max-width: 600px)`
}

