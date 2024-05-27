import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  const [visits, setVisits] = useState(() => {
    const storedVisits = localStorage.getItem("homeVisits");
    return storedVisits ? parseInt(storedVisits, 10) : 0;
  });

  useEffect(() => {
    const storedVisits = localStorage.getItem("homeVisits");
    if (storedVisits) {
      setVisits(parseInt(storedVisits, 10));
    }
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home visits={visits} setVisits={setVisits} />}
        />
        <Route path="/about" element={<About visits={visits} />} />
        <Route path="/contact" element={<Contact visits={visits} />} />
      </Routes>
    </div>
  );
}

export default App;
