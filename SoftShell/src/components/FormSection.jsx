import React, { useState } from "react";
import "../styles/FormSection.css";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.company) newErrors.company = "Company required";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Submit to backend here
    }
  };

  return (
    <div className="form-section">
      <span className="headline">Get a </span>
      <span className="gradient-headline">free valuation</span>
      <p>
        Contact us today to learn more about licenses with our expert valuation
        and fast payment process.
      </p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email Address*</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company*</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
              />
              {errors.company && <span className="error">{errors.company}</span>}
            </div>
            <div className="form-group">
              <label>License Type*</label>
              <select
                value={formData.licenseType}
                onChange={(e) =>
                  setFormData({ ...formData, licenseType: e.target.value })
                }
                required
              >
                <option value="">Select License Type</option>
                <option value="Permissive Licenses">Permissive Licenses</option>
                <option value="Apache License 2.0">Apache License 2.0</option>
                <option value="MIT License">MIT License</option>
                <option value="ISC License">ISC License</option>
              </select>
              {errors.licenseType && (
                <span className="error">{errors.licenseType}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <small>100% confidential and secure</small>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;