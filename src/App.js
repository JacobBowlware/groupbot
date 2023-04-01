import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';

// CSS
import './components/css/App.css';
import './components/css/Header.css';
import './components/css/Footer.css';
import './components/css/Home.css';

// Pages
import Home from './components/pages/Home'

// Common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  const Root = () => {
    return <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Route >
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
