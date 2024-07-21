'use client'
import { useState } from "react";
import { FaRegEye ,FaRegEyeSlash} from "react-icons/fa6";
import Link from "next/link";
export default function page() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <section className="container ">
        <div className="box">
          <h2>Login</h2>
          <h3>Wellcome back to ECOMMERCE</h3>
          <h4>The next gen business marketpalce</h4>
          <form action="">
            
            <div className="form-elements">
              <label htmlFor="email">Email</label>
              <br />
              <input name="email" id="email" type="email" placeholder="Enter" />
            </div>
            <div className="form-elements password-container">
              <label htmlFor="password">Password</label>
              <br />
              <input
                name="password"
                id="password"
                type={showPassword?"text":"password"}
                
                placeholder="Enter"

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
              <button type="submit">LOGIN</button>
            </div>
            <div className="form-elements">
              <p>
                Don't have an Account? <Link href="/">SIGN UP</Link>

              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
