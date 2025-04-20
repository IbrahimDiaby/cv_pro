import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from "../pages/notfound";
import Soon from "../components/soon";
import DefaultLayout from "../layouts/defaultLayout";
import Home from "../pages/home";
import Maintenance from "../components/maintenance/maintenance";

const Core = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<DefaultLayout />}
            errorElement={<NotFound />}
          >
            <Route
              index
              path="/"
              element={<Home />}
              errorElement={<NotFound />}
            ></Route>
            <Route
              path="/coming"
              element={<Soon />}
              errorElement={<NotFound />}
            ></Route>
          </Route>
          <Route
              path="/maintenance"
              element={<Maintenance />}
              errorElement={<NotFound />}
            ></Route>
          <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Core;
