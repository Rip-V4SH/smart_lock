import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const ThemeContext = createContext();

// Provedor de contexto
export const ThemeProvider = ({ children }) => {
  const [escuro, setEscuro] = useState(false);

  const toggleTheme = () => setEscuro(prevEscuro => !prevEscuro);

  return (
    <ThemeContext.Provider value={{ escuro, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acessar o contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};