import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Availability from "./pages/Availability";
import Results from "./pages/Results";
import SpaceDetail from "./pages/SpaceDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/availability"
          element={<Availability />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        <Route
          path="/space/:id"
          element={<SpaceDetail />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
