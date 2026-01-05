import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import HeaderFooter from "./Components/HeaderFooter";
const Home = lazy(() => import("./Components/Home"));
const FanGuide = lazy(() => import("./Components/FanGuide"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "fan-guide",
        element: (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <FanGuide />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
