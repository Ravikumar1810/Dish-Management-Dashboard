import {Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";

function App() {
  
    useEffect(() => {
    document.title = "Dish Management Dashboard";
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Dashboard />
    </>
  );
}

export default App;