import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "../Styles/MessageComponent.css";

const MessageComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [enquiryData, setEnquiryData] = useState([]);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [timePassed, setTimePassed] = useState(false); // State to track time

  // Initialize enquiry data from localStorage (or in-memory if required)
  useEffect(() => {
    const storedData = localStorage.getItem("enquiryData");
    if (storedData) {
      setEnquiryData(JSON.parse(storedData));
    }

    // Track time passed since page load
    const startTime = Date.now();
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= 600000) { // 10 minutes in milliseconds
        setTimePassed(true); // Allow access to download after 10 minutes
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.message.trim())
      formErrors.message = "Message cannot be empty.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Save data to localStorage and memory
    const newEntry = { ...formData, timestamp: new Date().toLocaleString() };
    const updatedData = [...enquiryData, newEntry];
    localStorage.setItem("enquiryData", JSON.stringify(updatedData));
    setEnquiryData(updatedData);

    // Clear form and show success message
    setFormData({ name: "", email: "", phone: "", message: "" });
    toast.success("Message sent successfully via Email!");

    // Send email
    const { name, email, phone, message } = formData;
    const mailtoLink = `mailto:g.gurumita@gmail.com?subject=Enquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Save data to localStorage and memory
    const newEntry = { ...formData, timestamp: new Date().toLocaleString() };
    const updatedData = [...enquiryData, newEntry];
    localStorage.setItem("enquiryData", JSON.stringify(updatedData));
    setEnquiryData(updatedData);

    // Clear form and show success message
    setFormData({ name: "", email: "", phone: "", message: "" });
    toast.success("Message sent successfully via WhatsApp!");

    // Open WhatsApp
    const { name, email, phone, message } = formData;
    const whatsappLink = `https://wa.me/8148085550?text=Enquiry%20Details:%0AName:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;
    window.open(whatsappLink, "_blank");
  };

  const downloadExcel = () => {
    // Check if password is correct
    if (password !== "Austrafinserv@2024") {
      toast.error("Incorrect password!");
      return;
    }

    // Create a new workbook and worksheet from the stored data
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(enquiryData);
    XLSX.utils.book_append_sheet(wb, ws, "Enquiries");

    // Write to an Excel file and create a Blob
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const excelFile = new Blob([excelBuffer], {
      bookType: "xlsx",
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Save the file using the file-saver library
    saveAs(excelFile, "Enquiry_Data.xlsx");
    setPassword(""); // Clear password field after download
    setShowPasswordPrompt(false); // Hide password prompt after download
  };

  return (
    <div className="message-container">
      <h2 className="form-title">Enquiry Form</h2>
      <form className="message-form">
        <div className="form-group">
          <label className="form-label">Name: <span className="required">*</span></label>
          <input
            className={`form-input ${errors.name ? "error" : ""}`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="error-message">{errors.name}</small>}
        </div>
        <div className="form-group">
          <label className="form-label">Email: <span className="required">*</span></label>
          <input
            className={`form-input ${errors.email ? "error" : ""}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="error-message">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label className="form-label">Phone: <span className="required">*</span></label>
          <input
            className={`form-input ${errors.phone ? "error" : ""}`}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <small className="error-message">{errors.phone}</small>}
        </div>
        <div className="form-group">
          <label className="form-label">Message: <span className="required">*</span></label>
          <textarea
            className={`form-textarea ${errors.message ? "error" : ""}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <small className="error-message">{errors.message}</small>}
        </div>
        <div className="button-group">
          <button type="button" className="form-button" onClick={handleEmailSubmit}>
            Send via Email
          </button>
          <button type="button" className="form-button whatsapp-button" onClick={handleWhatsAppSubmit}>
            Send via WhatsApp
          </button>
        </div>
      </form>

      {/* Only show download option after 10 minutes */}
      {timePassed && (
        <button onClick={() => setShowPasswordPrompt(true)} className="download-excel-button">
          Download Enquiry Data
        </button>
      )}

      {showPasswordPrompt && (
        <div className="password-prompt">
          <h3>Please enter your password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="password-input"
          />
          <button onClick={downloadExcel} className="submit-password-button">
            Submit
          </button>
          <button onClick={() => setShowPasswordPrompt(false)} className="cancel-password-button">
            Cancel
          </button>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MessageComponent;
