import { Route, Routes } from "react-router-dom";
import publicRoutes from "../index";

const Index = () => {
  return (
    <Routes>
      {publicRoutes.map((route, idx) => (
        <Route path={route.path} element={<route.component />} key={idx} />
      ))}
    </Routes>
  );
};

export default Index;
