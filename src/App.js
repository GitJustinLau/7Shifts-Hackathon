import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage2 from "./pages/OnboardingPage2/OnboardingPage2";
import OnboardingPage1 from "./pages/OnboardingPage1/OnboardingPage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage1 />} />
        <Route path="/onboarding2" element={<OnboardingPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
