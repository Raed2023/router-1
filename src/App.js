import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBaree from "./Components/NavBaree";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./Components/Details";

function App() {
  const data = [
    {
      id: Math.random(),
      name: "XIAOMI Redmi Note 11 Pro - 8Go - 128Go - 108MP - Bleu - Garantie 1 an",
      price: "1,220.00 TND",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/1196/1.jpg?3591",
    },
    {
      id: Math.random(),
      name: "Dr Oetker Vanoise Dr Oetker Vanoise Préparation pour chocolat chaud classique 30 gr",
      price: "0.60 TND",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/1093/1.jpg?3068",
    },  {
      id: Math.random(),
      name: "Sokany Robot Pétrin Multifonctions professionnel-5 Litres-1200W-Noir-Garantie 1an",
      price: "255.00 TND",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/5307/1.jpg?8933",
    },  {
      id: Math.random(),
      name: "Cookart Plat à Four 25.5x17.5cm - Noir & Plat à four rond 24cm - Rouge",
      price: "17.50 TND",
      pic: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/3685/1.jpg?2766",
    },
  ];
  return (
    <div className="App">
      <Router>
        <NavBaree />
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info/:id" element={<Details  data={data}/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
