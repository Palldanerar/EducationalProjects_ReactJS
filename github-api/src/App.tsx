import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/fav"
          element={<FavoritePage />}
        />
      </Routes>
    </>
  );
};

export default App;
