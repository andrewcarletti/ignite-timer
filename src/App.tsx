import { Route, Routes } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}
