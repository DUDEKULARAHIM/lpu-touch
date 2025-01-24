import './App.css'
import Home from './pages/Home';
import Mess from './pages/Mess';
import Scan from './pages/Scan';
import Result from './pages/Result';
import Profile from './pages/Profile';
import ReportingSlip from './pages/ReportingSlip';
import React from 'react'
import {Routes, Route} from "react-router-dom";
import MyBottomSheet from './components/HomeComponents/MyBottomSheet';
import Loading from './pages/Loading';
import History from './pages/History';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mess" element={<Mess messType={"Mess BH-3"} />} />
        {/* <Route path="/scan" element={<Scan />} /> */}
        <Route path="/scan/:mealLink/:messType" element={<Scan />} />
        <Route
          path="/mess/scan/:mealType/:messType"
          element={<Mess sheetOpen={true} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reporting" element={<ReportingSlip />} />
        <Route path="/loading" element={<Loading />} /> 
        <Route path="/central" element={<Mess messType={"Mess-Centre-02"} />} />
        <Route path="/central/scan/:mealType/:messType" element={<Mess sheetOpen={true} />} />
        <Route path="/north" element={<Mess messType={"Mess-Centre-01"} />} />
        <Route path="/history" element={<History />} />
        <Route path="/north/scan/:mealType/:messType" element={<Mess sheetOpen={true} />} />
        {/* <Route path="/mess/scan" element={<Mess  />} /> */}

      </Routes>
    </>
  );
}

export default App;
