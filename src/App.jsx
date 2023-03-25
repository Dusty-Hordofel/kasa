import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/home";
import Housing from "./pages/housing/Housing";
import NotFound from "./pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/housing/:id",
    element: <Housing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
