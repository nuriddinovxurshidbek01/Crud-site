import React from "react";

const App = () => {
  return (
    <>
      <main>
        <div className="wrapper w-75">
          <h1 className="title">React Js</h1>
          <form action="#">
            <label htmlFor="info">
              <input type="text" name="work" id="info" />
            </label>
            <button>Add</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
