import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import HomePage from "./pages/HomePage/HomePage";
import '@7shifts/sous-chef/dist/index.css';
import OnboardingPage2 from "./pages/OnboardingPage2/OnboardingPage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/onboarding" element={<OnboardingPage />} /> */}
        <Route path="/onboarding-2" element={<OnboardingPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
