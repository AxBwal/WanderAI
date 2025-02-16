import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/BodyComponents/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Write from "./pages/Write";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
         <Navbar />
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/*" element={<NotFound/>} />
         </Routes>
    </>
  );
}

export default App;
