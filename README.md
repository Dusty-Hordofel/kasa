## Section 1: Folder Structure

### 1. create KASA project

- create react project with vite

```bash
$npm create vite@latest kasa
```

- insatall [sass](https://www.npmjs.com/package/sass)

```bash
npm i sass
```

- add [JSON data ](src/data/data.js)

## Section 2: Routing

### 1. React Router DOM

- install React Router DOM

```bash
npm i react-router-dom
```

### 2. Create the router and the different pages of the application

- create [Home](/src/pages/home)

```js
import styles from "./home.module.scss";

const Home = () => {
  return <h1>home</h1>;
};

export default Home;
```

- create [Housing](/src/pages/housing/Housing.jsx)

```js
import React from "react";
import styles from "./housing.module.scss";

const Housing = () => {
  return <div>Housing</div>;
};

export default Housing;
```

- add [HomePage](src/App.jsx) Routing

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/home";
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
```

- [Header](/src/components/Layout/Header/Header.jsx)

```js
const Header = () => {
  return <header>Header</header>;
};

export default Header;
```

- [Footer](/src/components/Layout/Footer/Footer.jsx)

```js
const Footer = () => {
  return <footer>Footer</footer>;
};

export default Footer;
```

- create [Layout](/src/components/Layout/Layout.jsx) for [Header](/src/components/Layout/Header/Header.jsx) and [Footer](/src/components/Layout/Footer/Footer.jsx)

```js
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
```
