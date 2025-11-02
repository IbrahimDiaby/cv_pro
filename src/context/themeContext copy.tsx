import { createContext, ReactNode, useState } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const defaultTheme : string = localStorage.getItem('cv_theme') ?? 'dark';
  const [theme, setTheme] : [string, React.Dispatch<React.SetStateAction<string>>] = useState(defaultTheme);
  const ThemeContext = createContext({ theme: theme, setTheme: setTheme });

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
