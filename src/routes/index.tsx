import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Overview } from "@/pages/overview";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}
