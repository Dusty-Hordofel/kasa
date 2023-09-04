import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/home";
import Housing from "./pages/housing/Housing";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import { useContext } from "react";
import { DataAvailabilityContext } from "./components/DataAvailabilityContext";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/housing/:id",
//     element: <Housing />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

function App() {
  const { accordionData, homesData } = useContext(DataAvailabilityContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing data={homesData} />} />
          <Route path="/about" element={<About data={accordionData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
