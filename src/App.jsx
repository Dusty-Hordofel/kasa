import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
// import About from "./pages/about/page";
import Home from "./pages/home/home";
import Housing from "./pages/housing/Housing";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";

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
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
