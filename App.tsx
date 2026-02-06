import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FlightRecovery from './pages/FlightRecovery';
import ResolutionLog from './pages/ResolutionLog';
import Performance from './pages/Performance';
import PassengerList from './pages/PassengerList';
import PassengerDetail from './pages/PassengerDetail';
import RecoveryRules from './pages/RecoveryRules';
import Handover from './pages/Handover';
import GlobalAnalytics from './pages/GlobalAnalytics';
import AirportDetail from './pages/AirportDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recovery" element={<FlightRecovery />} />
        <Route path="/log" element={<ResolutionLog />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/passengers" element={<PassengerList />} />
        <Route path="/passenger/:id" element={<PassengerDetail />} />
        <Route path="/rules" element={<RecoveryRules />} />
        <Route path="/handover" element={<Handover />} />
        <Route path="/global-analytics" element={<GlobalAnalytics />} />
        <Route path="/airport-detail" element={<AirportDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;