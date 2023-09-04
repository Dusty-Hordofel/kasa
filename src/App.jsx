import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { DataAvailabilityContext } from "./components/DataAvailabilityContext";
import Layout from "./components/layout/Layout";
import { lazy, Suspense } from "react";

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

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const Housing = lazy(() => import("./pages/housing/Housing"));

function App() {
  const { accordionData, homesData } = useContext(DataAvailabilityContext);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/housing/:id"
                element={<Housing data={homesData} />}
              />
              <Route path="/about" element={<About data={accordionData} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
