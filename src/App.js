import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Landing from "./pages/Landing";
import Projet from "./pages/Projet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/projets/:id" element={<Projet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
