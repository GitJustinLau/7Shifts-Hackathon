import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import HomePage from "./pages/HomePage/HomePage";
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage1 from "./pages/OnboardingPage1/OnboardingPage1";
import OnboardingPage3 from "./pages/OnboardingPage3/OnboardingPage3"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding1" element={<OnboardingPage1 />} />
        <Route path="/onboarding3" element={<OnboardingPage3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
