import React from "react";
import { useState } from "react";
import Todo from "./assets/pages/Todo/index";
import Companents from "./assets/pages/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Saidbar from "./assets/pages/Saidbar/Saidbar";

const App = () => {
  return (
    <>
     
      <main className="main">
        <aside>
          <Saidbar />
        </aside>   
        <Companents />    
      </main>
      
    </>
  );
};
export default App;
