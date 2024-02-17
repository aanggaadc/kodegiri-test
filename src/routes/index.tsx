import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/not-found";

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
    </Routes>
  );
};

export default Routing;
