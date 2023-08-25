import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import HomePage from "./pages/HomePage/HomePage";
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage2 from "./pages/OnboardingPage2/OnboardingPage2";
import OnboardingPage1 from "./pages/OnboardingPage1/OnboardingPage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/onboarding" element={<OnboardingPage />} /> */}
        <Route path="/onboarding-2" element={<OnboardingPage2 />} />
        {/* <Route path="/onboarding" element={<OnboardingPage />} /> */}
        <Route path="/onboarding1" element={<OnboardingPage1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
