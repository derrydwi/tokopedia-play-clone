import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Video from "../pages/Video/Video.tsx";
import Layout from "../Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:videoId", element: <Video /> },
    ],
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
