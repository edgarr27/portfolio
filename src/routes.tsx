import { createBrowserRouter } from "react-router";
import App from "./App";
import RMDLaw from "./pages/RMDLaw";
import MountainStateGarageDoors from "./pages/MountainStateGarageDoors";
import Spiralytics from "./pages/Spiralytics";
import Zplatz from "./pages/Zplatz";

export const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/work/rmd-law", Component: RMDLaw },
  { path: "/work/mountainstate-garage-doors", Component: MountainStateGarageDoors },
  { path: "/work/spiralytics", Component: Spiralytics },
  { path: "/work/zplatz", Component: Zplatz },
]);
