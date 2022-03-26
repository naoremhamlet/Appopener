import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute setUser={setUser} />} >
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
