import React from "react";
import "./Form.css";

function Form({ getWeatherData }) {
  return (
    <form action="" className="form" onSubmit={getWeatherData}>
      <input type="text" placeholder="Enter City Name" name="city" />
    </form>
  );
}

export default Form;
