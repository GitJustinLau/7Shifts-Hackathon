import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import HomePage from "./pages/HomePage/HomePage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage1 from "./pages/OnboardingPage1/OnboardingPage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/onboarding1" element={<OnboardingPage1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
