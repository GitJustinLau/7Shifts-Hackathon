import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import HomePage from "./pages/HomePage/HomePage";
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage1 from "./pages/OnboardingPage1/OnboardingPage1";
import OnboardingPage3 from "./pages/OnboardingPage3/OnboardingPage3"
import OnboardingPage4 from "./pages/OnboardingPage4/OnboardingPage4";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding1" element={<OnboardingPage1 />} />
        <Route path="/onboarding3" element={<OnboardingPage3 />} />
        <Route path="/onboarding4" element={<OnboardingPage4 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
