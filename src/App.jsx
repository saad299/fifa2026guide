import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderFooter from "./Components/HeaderFooter";
import Home from "./Components/Home";
import FanGuide from "./Components/FanGuide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "fan-guide",
        element: <FanGuide />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
