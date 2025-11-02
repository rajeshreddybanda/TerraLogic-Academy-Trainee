import React, { useState } from "react";

const FormWithErrors = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, SetErrors] = useState({});

  // handle input changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //valodate form inputs
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter Valid Email";
    SetErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  //Handler Form Submmission

  const handleSubmit = (e) => {
    console.log('handleSubmit', handleSubmit)
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid :", formData);
      alert("Form submitted sucessfully");
      setFormData({ name: "", email: "" }); //reset after submission\
      SetErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxwidth: 300, margin: "20px auto" }}
    >
      <div style={{ marginBottom: 10 }}>
        <label> Name :</label>
        <br />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
          style={{ width: "100", padding: 5 }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label> Email :</label>
        <br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ width: "100", padding: 5 }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <button type="submit" style={{ padding: " 6px 12px" }}>
        Submit{" "}
      </button>
    </form>
  );
};

export default FormWithErrors;
