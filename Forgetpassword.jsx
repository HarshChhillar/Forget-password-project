import React, { useState } from "react";
import "./Forgetpassword.css"; 

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="container">
     
      <div className="left-section">
        <h1>Welcome to <span className="highlight">Super Admin!</span></h1>
        <p>Your command center for ultimate control.</p>
        <img src="/images/images (1).png" alt="Forget password" />
      </div>

     
      <div className="right-section">
        <h2>Forget Password</h2>
        <p>Enter your registered email to receive a password reset link.</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset}>Reset Password</button>

        <p>Go back to <a href="/login">LOGIN</a></p>
      </div>
    </div>
  );
};

export default ForgetPassword;