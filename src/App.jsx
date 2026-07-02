import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./hooks/useDarkMode.jsx";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ExamPage from "./pages/ExamPage";

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/exam/:examId" element={<Layout><ExamPage /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
