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
      <img src={Logo} className={styles.image} loading="lazy" />
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
      <img src={cover} alt={title} className={styles.image} loading="lazy" />
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

## Section 4: About

### 7. Fill About Page

- add [Banner](/src/components/banner/Banner.jsx)
- create [DataAvailabilityContext](src/components/DataAvailabilityContext.jsx) to share Data

```jsx
import { createContext, useState } from "react";

export const DataAvailabilityContext = createContext();

export const DataAvailabilityProvider = ({
  children,
  apartment,
  aboutData,
}) => {
  const [homesData, setHomeData] = useState(apartment);
  const [accordionData, setAccordionData] = useState(aboutData);

  return (
    <DataAvailabilityContext.Provider value={{ homesData, accordionData }}>
      {children}
    </DataAvailabilityContext.Provider>
  );
};
```

- add `DataAvailabilityProvider` in [main](src/main.jsx)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/layout/Layout";
import "./styles/main.scss";
import { DataAvailabilityProvider } from "./components/DataAvailabilityContext";
import { aboutData, apartment } from "./data/data";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataAvailabilityProvider apartment={apartment} aboutData={aboutData}>
      <Layout>
        <App />
      </Layout>
    </DataAvailabilityProvider>
  </React.StrictMode>
);
```

- create [Collapse](src/components/collapse/Collapse.jsx) && [About](src/pages/about/About.jsx)

```jsx
import React, { useCallback, useContext, useState } from "react";

import styles from "./collapse.module.scss";
import arrow from "../../assets/arrow.svg";
import { DataAvailabilityContext } from "../DataAvailabilityContext";
import classNames from "classnames";

const Collapse = () => {
  const [isClicked, setIsClicked] = useState(null);
  const { accordionData } = useContext(DataAvailabilityContext);

  const revealDetails = useCallback(
    (index) => {
      if (index === isClicked) {
        return setIsClicked(null);
      }
      setIsClicked(index);
    },
    [isClicked]
  );

  return (
    <ul className={styles.Collapse}>
      {accordionData.map(({ title, content }, index) => (
        <li className={styles.collapse_list_item}>
          <div className={classNames(styles.collapse_description)}>
            <h3 className={styles.collapse_title}>{title}</h3>
            <img
              loading="lazy"
              src={arrow}
              onClick={() => revealDetails(index)}
              className={
                isClicked === index
                  ? styles.collapsed_arrow
                  : styles.collapse_arrow
              }
            />
          </div>
          <div
            className={
              isClicked === index ? styles.show_content : styles.hide_content
            }
          >
            <p>{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Collapse;
```

## Section 5: Housing

### 8. Housing

- update [Collapse](src/components/collapse/Collapse.jsx) to [Accordion](src/components/accordion/Accordion.jsx)

```jsx
import { useState } from "react";

import styles from "./accordion.module.scss";
import arrow from "../../assets/arrow.svg";
import classNames from "classnames";

const Accordion = ({ title, content }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.Collapse}>
      <div className={classNames(styles.collapse_description)}>
        <h3 className={styles.collapse_title}>{title}</h3>
        <img
          loading="lazy"
          src={arrow}
          onClick={handleClicked}
          className={isClicked ? styles.collapsed_arrow : styles.collapse_arrow}
        />
      </div>
      <div className={isClicked ? styles.show_content : styles.hide_content}>
        {Array.isArray(content)
          ? content.map((item, index) => <p key={index}>{item}</p>)
          : content}
        {/* if content is Array we map that array and display each item , else we just  display it} */}
      </div>
    </div>
  );
};
export default Accordion;
```

- create [Housing](src/pages/housing/Housing.jsx)

```jsx
import { useEffect, useState } from "react";
import styles from "./housing.module.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Slider from "../../components/Slider/Slider";
import { DataAvailabilityContext } from "../../components/DataAvailabilityContext";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import Accordion from "../../components/accordion/Accordion";

const Housing = () => {
  const [sliderImages, setSliderImages] = useState([]);

  const { homesData } = useContext(DataAvailabilityContext);
  const { id } = useParams();

  const currentHomeData = homesData.find((home) => home.id === id);
  const {
    description,
    equipments,
    title,
    location,
    tags,
    host,
    pictures,
    rating,
  } = currentHomeData;

  useEffect(() => {
    setSliderImages(pictures);
  }, [id]);

  return (
    <div className={styles.housing}>
      <Slider sliderImages={sliderImages} />
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className={styles.tags}>
            {tags.map((tag, index) => {
              return <button key={index}>{tag}</button>;
            })}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.host}>
            <p>{host.name}</p>
            <img src={host.picture} alt="host" loading="lazy" />
          </div>
          <div className={styles.housing_stars}>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <img
                  loading="lazy"
                  key={index}
                  src={ratingValue <= rating ? redStar : greyStar}
                  alt="star"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.accordion}>
        <Accordion title={"Description"} content={description} />
        <Accordion title={"Équipements"} content={equipments} />
      </div>
    </div>
  );
};

export default Housing;
```

- style [Housing](src/pages/housing/housing.module.scss)

```scss
@import "/src/styles/main.scss";

.housing {
  @include section-center;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
  }

  .left {
    .title {
      margin-top: 31px;
      color: $kasa-tertiary;
      margin-bottom: 32px;

      h1 {
        font-weight: 500;
      }
    }

    .tags {
      display: flex;
      gap: 10px;
      align-items: center;
      button {
        background: $kasa-tertiary;
        padding: 5px 41px;
        border-radius: 25px;
        color: white;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;

    .host {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 55px;
      gap: 10px;

      img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 50%;
      }
      p {
        color: $kasa-tertiary;
      }
    }

    .housing_stars {
      display: flex;
      justify-content: space-between;
      align-self: end;
    }
  }

  .accordion {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 76px;
    margin-bottom: 20px;
  }
}
```

### 9. Update Project Script

### 10. Lazy loading

It's helps us to load only the image visible on screen.
https://blog.webdevsimplified.com/2023-05/lazy-load-images/

### 11. Update Components

- create [Avatar](src/components/avatar/Avatar.jsx)

```jsx
import React from "react";
import styles from "./avatar.module.scss";

const Avatar = ({ name, picture }) => {
  return (
    <div className={styles.host}>
      <p>{name}</p>
      <img loading="lazy" src={picture} alt="host" />
    </div>
  );
};

export default Avatar;
```

- create [Stars](src/components/stars/Stars.jsx)

```jsx
import React from "react";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";
import styles from "./stars.module.scss";

const Stars = ({ rating }) => {
  return (
    <div className={styles.housing_stars}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1; // définit la notation de chaque étoile
        return (
          <img
            key={index}
            src={ratingValue <= rating ? redStar : greyStar}
            alt="star"
          />
        );
      })}
    </div>
  );
};

export default Stars;
```

- create [Tags](src/components/tag/Tags.jsx)

```jsx
import React from "react";
import styles from "./tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => {
        return <button key={index}>{tag}</button>;
      })}
    </div>
  );
};

export default Tags;
```

- create [NotFound](src/pages/notFound/NotFound.jsx)

```jsx
import styles from "./notFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.infos}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.content}>
          La page que vous recherchez n'existe pas.
        </p>
      </div>
      <Link className={styles.home} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
```
