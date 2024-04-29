import Login from "@/pages/Login/Login";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { APP_ROUTES } from "./appRoutes/APP_ROUTES";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />
      <Route path={APP_ROUTES.login} element={<Login />} />
    </>
  )
);
