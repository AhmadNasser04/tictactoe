import ParticlesBackground from "./components/ParticlesBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Bot from "./pages/Bot";
import Home from "./pages/Home";
import Local from "./pages/Local";
import Online from "./pages/Online";
import Pick from "./pages/Pick";

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/local/:player" element={<Local />} />
        <Route path="/online" element={<Online />} />
        <Route path="/bot/:player" element={<Bot />} />
        <Route path="/pick/:page" element={<Pick />} />
      </Routes>
    </Router>
  );
}

export default App;
