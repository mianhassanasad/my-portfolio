import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;