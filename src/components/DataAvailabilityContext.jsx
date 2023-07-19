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
