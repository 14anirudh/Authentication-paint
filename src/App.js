import "./App.css";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/Authcontext";
import Protected from "./Protected";
import { Canvas } from "./Canvas";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
                <Canvas />
                {/* <ClearCanvasButton /> */}
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
