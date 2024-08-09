import Header from "../components/Header";
import HeaderPresentacion from "../components/HeaderPresentacion";
import PositionDemo from "../components/PositionDemo";
import SectionSeparate from "../components/SectionSeparate";
import Section1 from "../components/Section1";
import Proyectos from "./pages/Proyectos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
    {/* Rutas principales */}
    <Route path="/" element={

    <div>
      <div>
        <HeaderPresentacion />
      </div>
      
      <div id="header">
        <Header />
      </div>
      

      
      <div>
        <Section1 />
      </div>
      
      <div>
        <SectionSeparate />
      </div>
      <main className="h-screen bg-white flex items-center justify-center">
        <p>contenido</p>
      </main>
      <div className="mt-10">
        <PositionDemo />
      </div>
      <div>
        <img src="./images/1.jpg" alt="" />
      </div>
      
    </div>
    } />
    {/* nueva ruta */}
    <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
   </Router> 
  );
}

export default App;
