import React from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
    const [contact, setContact] = useState([]);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [data, setData] = useState(""); 
  
    let date=new Date(),
    year = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    console.log(year); 
  
    const addContact = (e) => {
      e.preventDefault();
  
      const newcontact = {
        id: Date.now(),
        name: name,
        number: number,
        data: data,
      };
      toast.success('Contact added',{
        autoClose:1000,
        position:'top-center'
      });
      setContact([...contact, newcontact]);
      setData("");
      setNumber("");
      setName("");
    };
    const removeContact = (id) => {
      let removePerson=contact.filter(item => item.id!==id);
  
      toast.success("Barakolla o'chirding",{
        autoClose:1000,
        position:'top-center'
      })
      setContact(removePerson);
    
    }
  return (
    <>
  <ToastContainer />

    <div className="wrapper w-75 mx-auto shadow mt-5 p-4">
        <h1 className="title fs-2 text-center">Contact</h1>
        <hr />
        <form action="#" className="form" onSubmit={(e) => addContact(e)}>
          <label
            htmlFor="info"
            className="w-75 mx-auto text-start d-block fs-3 text-black fw-4"
          >
            <input
              type="text"
              name="word"
              id="info"
              className=" w-75 mx-auto d-block fs-5"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="number" className="d-block w-75 mx-auto mt-4">
            <input
              type="number"
              name="number"
              id="number"
              className="w-75 mx-auto d-block p-2"
              placeholder="+998"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>          

          <button
            type="submit"
            className="btn bg-success fs-5 text-white w-75 d-block mx-auto p-2 mt-5"
          >
            Add
          </button>
        </form>
      </div>

      <table className="table w-75 mx-auto mt-5">
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Number</th>
            <th>Date</th>
            <th>Tahrirlash</th>
            <th>O'chirish</th>
          </tr>
        </thead>
        <tbody>
          {contact?.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>+998{item.number}</td>
                <td>{year}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi mx-auto w-50 bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </td>
                <td>
                  <button className="btn bg-danger text-white" onClick={()=>removeContact(item.id)}>Del</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default Todo;