"use client";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { submitAction } from "@/actions/singup";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitAction(formData);

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful', await response.json());
      } else {
        // Handle errors
        console.error('Signup failed', await response.json());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="box">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-elements">
              <label htmlFor="name">Name</label>
              <br />
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-elements">
              <label htmlFor="email">Email</label>
              <br />
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-elements password-container">
              <label htmlFor="password">Password</label>
              <br />
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <div className="form-elements">
              <button type="submit">Create Account</button>
            </div>
            <div className="form-elements">
              <p>
                Have an Account? <Link href="/login">LOGIN</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
