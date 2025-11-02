import { ThemeProvider } from "./context/themeContext";
import Core from "./router/router";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <ThemeProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <Core />
    </ThemeProvider>
    </>
  )
}

export default App;