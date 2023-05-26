import { createContext, useState } from "react";

export const DataAvailabilityContext = createContext();

export const DataAvailabilityProvider = ({
  children,
  apartment,
  aboutData,
}) => {
  const [homesData, setHomeData] = useState(apartment);
  const [accordionData, setAccordionData] = useState(aboutData);

  // const handleHomesData = (newArray1) => {
  //   setHomeData(newArray1);
  // };

  // const handleAccordionData = (newArray2) => {
  //   setAccordionData(newArray2);
  // };

  return (
    <DataAvailabilityContext.Provider value={{ homesData, accordionData }}>
      {children}
    </DataAvailabilityContext.Provider>
  );
};
