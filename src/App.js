import "./App.css";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex-1 overflow-y-auto pt-16">
        <Routes>
          <Route exact path="/" element={<Countries />} />
          <Route path="/country/:countryCode" element={<Country />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
