import React, { memo } from "react";
import "./index.scss";

const Saidbar = memo(() => {
  return (
    <>
      
        <div className="asaed">
          <h3 className="saidbar__title">CRUD OPERATIONS</h3>
          <div className="saidbar__info">
            <img
              src="../../../../public/person.png"
              alt="img"
              className="saidbar__info_img"
            />
            <h4 className="saidbar__info_name">Karthi Madesh</h4>
            <a href="#" className="saidbar__info_adminLink">
              Admin
            </a>
          </div>
          <div className="saidbar__page">
            <button className="saidbar__page_link">
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img"
              />
              <h5 className="saidbar__page_link--text">Home</h5>
            </button>
            <button className="saidbar__page_link">
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img"
              />
              <h5 className="saidbar__page_link--text">Course</h5>
            </button>
            <button className="saidbar__page_link">
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img"
              />
              <h5 className="saidbar__page_link--text">Students</h5>
            </button>
            <button className="saidbar__page_link">
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img"
              />
              <h5 className="saidbar__page_link--text">Payment</h5>
            </button>
            <button className="saidbar__page_link">
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img"
              />
              <h5 className="saidbar__page_link--text">Report</h5>
            </button>
            <button className="saidbar__page_link">
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img"
              />
              <h5 className="saidbar__page_link--text">Settings </h5>
            </button>
            <button className="saidbar__page_link mt-5 ">
              <h5 className="saidbar__page_link--text mx-5">Logout</h5>
              <img
                src="../../../../public/home.svg"
                alt="icon"
                className="saidbar__page_link--img mx-0"
              />
            </button>
          </div>
        </div>
    
    </>
  );
});

export default Saidbar;
