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

### 3. Style Layout

![Header Component](./assets/../src/assets/Header.svg "Desktop Demo")

- [Header](/src/components/Layout/Header/Header.jsx)

```js
import Logo from "../../../assets/kasa.svg";
import Navbar from "../../navbar/Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.image} />
      <Navbar />
    </header>
  );
};

export default Header;
```

- [Header](/src/components/Layout/Header/header.module.scss)

```js
@import "/src/styles/main.scss";

.header {
  @include flex(row, space-between, center);
  @include section-center;
  padding-top: 4rem;
  .image {
    width: 211px;
  }
}

```

![Footer Component](./assets/../src/assets/Footer.svg "Desktop Demo")

- [Footer](/src/components/Layout/Footer/Footer.jsx)

```js
import Logo from "../../../assets/kasa-footer.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={Logo}
        className={styles.image}
        alt="Kasa - agence de location d'appartements entre particuliers"
      />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
```

- style [Footer](/src/components/Layout/Footer/footer.module.scss)

```js
@import "/src/styles/main.scss";

.footer {
  @include flex(column, center, center);
  background: black;
  height: 21rem;
  .image {
    width: 13rem;
    margin-bottom: 3.1rem;
  }
  .copyright {
    color: $kasa-primary;
    font-size: 2.4rem;
  }
}

```

## Section 3: HomePage

### 4. Banner Component

- create [Banner](/src/components/banner/Banner.jsx)

```js
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  const [homePage, setHomePage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHomePage(true);
    }
  }, []);

  return (
    <section className={homePage ? styles.homeBanner : aboutBanner}>
      {homePage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
};

export default Banner;
```

- style [Banner](/src/components/banner/banner.module.scss)

```scss
@import "/src/styles/main.scss";

.homeBanner {
  width: 124rem;
  height: 22.3rem;
  background: rebeccapurple;
  @include flex;
  @include section-center;
  border-radius: 25px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../../assets/home_cover.png");
  background-position: center;
  background-size: cover;
  margin-top: 6.7rem;

  .aboutBanner {
    //Temporaire
    width: 124rem;
    height: 40.5rem;
    background: yellow;
    @include flex;
    border-radius: 25px;
    background-position: center;
    background-size: cover;
  }

  .message {
    font-size: 4.8rem;
    color: $kasa-primary;
    font-weight: 500;
  }
}
```

### 5. Card & Gallery Component

- create [Card](/src/components/card/card.jsx)

```js
import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/housing/${id}`} className={styles.cards}>
      <img src={cover} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};

export default Card;
```

- style [Card](/src/components/card/card.module.scss)

```scss
@import "/src/styles/main.scss";

.cards {
  width: 34rem;
  height: 34rem;
  position: relative;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 25px;

  :hover {
    box-shadow: 0 2px 8px rgb(0, 0, 0);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.2s ease-in-out;
    will-change: transform;
    border-radius: 25px;
  }

  :hover image {
    transform: scale(1.5);
  }

  .title {
    position: absolute;
    font-weight: 500;
    background: transparent;
    border: none;
    pointer-events: none; //important: to prevent the parent's hover effect from being applied to the child!
    font-size: clamp(12px, 3vw, 18px); //default font-size 1.8rem
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
    color: $kasa-primary;
    bottom: 2rem;
    left: 2rem;
  }
}
```

- create [Gallery](/src/components/gallery/Gallery.jsx)

```js
import datas from "../../data/data.json";
import Card from "../card/Card";
import styles from "./gallery.module.scss";

console.log("🚀 ~ file: Gallery.js:2 ~ datas:", datas);

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
```

- style [Gallery](/src/components/gallery/gallery.module.scss)

```scss
@import "/src/styles/main.scss";

.gallery {
  @include section-center;
  background: $kasa-secondary;
  @include flex();
  flex-wrap: wrap;
  gap: 6rem;
  padding: 5rem;
  //   place-items: center;
  border-radius: 25px;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
```

### 6. Update Informations
