import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage1 from "./pages/OnboardingPage1/OnboardingPage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/" element={<OnboardingPage1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
