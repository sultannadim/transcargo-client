import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://b6a11-service-review-server-side-sultannadim.vercel.app/service-limit"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "add-services",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: () => fetch("https://b6a11-service-review-server-side-sultannadim.vercel.app/services"),
      },
      {
        path: "services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://b6a11-service-review-server-side-sultannadim.vercel.app/services/${params.id}`),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
