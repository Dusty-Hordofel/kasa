import Banner from "../../components/banner/Banner";
import Collapse from "../../components/accordion/Collapse";
import styles from "./about.module.scss";

const About = () => {
  const aboutDatas = [
    {
      id: "1",
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: "2",
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..",
    },
    {
      id: "3",
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question..",
    },
    {
      id: "4",
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Banner />
      <main className={styles.main}>
        <div>
          {aboutDatas.map((aboutData) => {
            return (
              <Collapse
                key={aboutData.id}
                title={aboutData.title}
                content={aboutData.content}
              />
            );
          })}
        </div>
        <div>
          {aboutDatas.map((aboutData) => {
            return (
              <Collapse
                key={aboutData.id}
                title={aboutData.title}
                content={aboutData.content}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default About;
