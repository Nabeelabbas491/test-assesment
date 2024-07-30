import { Routes, Route } from "react-router";
import Dashboard from "./screens/dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
