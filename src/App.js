import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Landing from "./pages/Landing";
import Nina from "./pages/projets/Nina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Nina" element={<Nina />} />
        <Route path="*" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
