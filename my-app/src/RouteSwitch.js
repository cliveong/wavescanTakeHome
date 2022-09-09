import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Success from "./Success";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;