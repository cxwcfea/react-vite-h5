import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import router from '@/router';
import NavBar from '@/components/NavBar';
import './App.css';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const needNav = ['/', '/data', '/user'];
    setShowNav(needNav.includes(pathname));
  }, [pathname]);

  return (
    <>
      <div className="app">
        <div className="main">
          <Routes>
            {router.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />}></Route>
            ))}
          </Routes>
        </div>
        <NavBar showNav={showNav} />
      </div>
    </>
  );
}

export default App;
