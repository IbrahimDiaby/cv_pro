import ThemeToggleButton from "./components/ui/theme-toggle-button";
import Core from "./router/router";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Core />
      <div className="fixed bottom-5 left-5 z-100">
        <ThemeToggleButton />
      </div>
    </>
  )
}

export default App;