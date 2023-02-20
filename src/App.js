import './App.css';
// import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from './pages/Comics';

function App() {
  return (
    <Router>
      <Header />
        <div>
            <h1>Je prépare la soupe</h1>
            <p>Hello !!!</p>
        </div>
      <Routes>
        <Route path="/Characters" element={<Characters />}/>
        <Route path="/Comics" element={<Comics />} />
      </Routes>
    </Router>  

  );
}

export default App;
