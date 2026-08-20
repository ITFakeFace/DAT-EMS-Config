import "./App.css";
import { Route, Routes } from "react-router-dom";
import ConfigLayout from "./Components/Layouts/ConfigLayout/ConfigLayout";
import DashboardScreen from "./Components/Screens/DashboardScreen/DashboardScreenScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConfigLayout />}>
        <Route index element={<DashboardScreen />} />
        <Route path="DashboardScreen" element={<DashboardScreen />} />
        <Route path="devices" element={<DashboardScreen />} />
        <Route path="mqtt" element={<DashboardScreen />} />
        <Route path="profile" element={<DashboardScreen />} />
        <Route path="data-realtime" element={<DashboardScreen />} />
        <Route path="history" element={<DashboardScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
