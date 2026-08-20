import "./App.css";
import { Route, Routes } from "react-router-dom";
import ConfigLayout from "./Components/Layouts/ConfigLayout/ConfigLayout";
import Dashboard from "./Components/Screens/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConfigLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="devices" element={<Dashboard />} />
        <Route path="mqtt" element={<Dashboard />} />
        <Route path="profile" element={<Dashboard />} />
        <Route path="data-realtime" element={<Dashboard />} />
        <Route path="history" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
