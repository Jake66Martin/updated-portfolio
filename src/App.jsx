import { Outlet } from "react-router-dom";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import App2 from './components/App2'

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main className="main-height background">
        <App2/>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
