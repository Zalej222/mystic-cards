import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CardList from "./pages/CardList";
import DailyCard from "./pages/DailyCard";
import Reading from "./pages/Reading";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cards"
          element={<CardList />}
        />

        <Route
          path="/daily-card"
          element={<DailyCard />}
        />

        <Route
          path="/reading"
          element={<Reading />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;