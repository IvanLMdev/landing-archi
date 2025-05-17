import { Routes, BrowserRouter,Route } from "react-router-dom";
import "./styles/app-styles.css";
import Home from "./Home";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Preguntas" element={<PreguntasFrecuentes/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
