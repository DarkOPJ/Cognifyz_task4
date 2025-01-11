import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
