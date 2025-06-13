import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import PropertyDetails from './components/PropertyDetails';

import Footer from './components/Footer';
import './App.css'
import LoginPopUp from './components/LoginPopUp';
import SignUp from './components/SignUp';

// PrivateRoute component
function PrivateRoute({ children }) {
  const user = localStorage.getItem('user');
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-xl text-xl font-semibold">
          Please login to add property
        </div>
      </div>
    );
  }
  return children;
}

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Navbar />
        <LoginPopUp />
        <SignUp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route
            path="/addproperty"
            element={
              <PrivateRoute>
                <AddProperty />
              </PrivateRoute>
            }
          />
          <Route path="/properties/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
