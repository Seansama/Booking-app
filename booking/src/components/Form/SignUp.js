import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Log() {
  const [currentForm, setCurrentForm] = useState("register");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <section className="">
      {currentForm === "register" ? (
        <Register onFormSwitch={toggleForm} />
      ) : (
        <Login onFormSwitch={toggleForm} />
      )}
    </section>
  );
}

export default Log;
