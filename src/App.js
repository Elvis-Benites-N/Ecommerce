import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import Dashboard from "./pages/user/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
