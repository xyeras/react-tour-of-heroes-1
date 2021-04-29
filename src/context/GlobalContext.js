import { createContext, useState } from 'react';
import { heroData } from '../data/heroes';

// Initial State with key data properties
const initialState = {
  heroes: [],
};

// Instantiate Global context
export const GlobalContext = createContext();

// Global Provider where state will be managed
export const GlobalProvider = ({ children }) => {
  const [heroes, setHeroes] = useState(heroData);

  const updateFeatured = heroId => {
    const updated = heroes.map((hero, index) => {
      if (hero.id === heroId) {
        return { ...hero, featured: !hero.featured };
      }
      return hero;
    });
    setHeroes(updated);
  };

  return (
    <GlobalContext.Provider value={{ heroes, updateFeatured }}>
      {children}
    </GlobalContext.Provider>
  );
};
