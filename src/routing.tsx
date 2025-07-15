import { createHashRouter } from "react-router";
import App from "./App";

export enum SectionId {
  Landing = "Landing",
  Technology = "Technology",
  Portraits = "Portraits",
  People = "People",
  Publications = "Publications",
}

export enum RoutePaths {
  Landing = "/",
  Portraits = "/portraits",
  Technology = "/technology",
  People = "/people",
  Publications = "/publications",
}

export interface Route {
  id: string;
  path: string;
  element: any | null;
}

export const routes: Array<Route> = [
  {
    id: SectionId.Landing,
    path: RoutePaths.Landing,
    element: <App sectionId={SectionId.Landing} />,
  },
  {
    id: SectionId.Portraits,
    path: RoutePaths.Portraits,
    element: <App sectionId={SectionId.Portraits} />,
  },
  {
    id: SectionId.Technology,
    path: RoutePaths.Technology,
    element: <App sectionId={SectionId.Technology} />,
  },
  {
    id: SectionId.People,
    path: RoutePaths.People,
    element: <App sectionId={SectionId.People} />,
  },
  {
    id: SectionId.Publications,
    path: RoutePaths.Publications,
    element: <App sectionId={SectionId.Publications} />,
  },
];

/* The following `basename` configuration was used for testing on the development server and 
should be modified if necessary for the production deployment location */
// export const router = createBrowserRouter(routes, { basename: import.meta.env.PROD ? "/temp/data-portraits/" : "/" });
export const router = createHashRouter(routes, { basename: "/" });
