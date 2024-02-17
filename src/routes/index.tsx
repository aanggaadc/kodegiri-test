import { Route, Routes } from "react-router-dom";

import SignIn from "../pages/sign-in";
import History from "../pages/history";
import NotFound from "../pages/not-found";

const Routing = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
    </Routes>
  );
};

export default Routing;
