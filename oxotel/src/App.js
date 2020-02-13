import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import DashboardFirst from "./dashboard/dekstop-1";
import Search from "./components/Search";
export default function App() {
  return (
    <>
      <NavbarComponent />
      <div className="App" />
      <DashboardFirst />
      <Search/>
    </>
  );
}
