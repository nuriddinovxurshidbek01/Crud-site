import React from "react";
import { useState } from "react";

const App = () => {
  const [contact, setContact] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState("");

  const addContact = (e) => {
    e.preventDefault();

    const newcontact = {
      id: Date.now(),
      name: name,
      number: number,
      data: data,
    };
    setContact([...contact, newcontact]);
    setData("");
    setNumber("");
    setName("");
  };
  console.log(contact);

  return (
    <>
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
              type="text"
              name="number"
              id="number"
              className="w-75 mx-auto d-block p-2"
              placeholder="+998"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <label htmlFor="date" className="d-block w-75 mx-auto mt-4">
            <input
              type="date"
              name="date"
              id="date"
              className="w-75 mx-auto d-block p-2"
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
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
                <td>{item.data}</td>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi w-50 mx-auto bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <div className="contact p-3 mt-5 w-75 mx-auto d-block shadow d-flex">
<h6 className="name">John</h6>
<p className="nomber">+998971082004</p>

      </div> */}
    </>
  );
};
export default App;
