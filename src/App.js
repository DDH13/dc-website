import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar.jsx';
import Home from './components/pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/pages/Calendar.jsx';
import NoMatch from './components/pages/NoMatch.jsx';
import StickyFooter from "./components/Footer";
function App() {
  return (
      <Router>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/calendar" element={<Calendar/>}/>*/}
            {/*<Route path="*" element={<NoMatch />} />*/}
          </Routes>
          <StickyFooter />
        </div>
      </Router>
  );
}

export default App;
