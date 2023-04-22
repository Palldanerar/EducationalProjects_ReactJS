import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/favorite"
        element={<FavoritePage />}
      />
    </Routes>
  );
};

export default App;
