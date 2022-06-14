import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSingupData } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (firstName && lastName && email && password) {
      if (password.length >= 8) {
        handleSingupData(firstName, lastName, email, password);
      } else {
        setError("password should be greater than 8 characters");
      }
    } else {
      setError("Please fill all the fields");
    }
  };

  return (
    <div className='auth-container'>
      <div class='form'>
        <span className='bold-text'>Sign up</span>
        <div class='input-with-icons '>
          <i class='bi bi-person-fill input-icon'></i>
          <input
            type='text'
            placeholder='Enter your First Name'
            class='icon-input'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div class='input-with-icons '>
          <i class='bi bi-person-fill input-icon'></i>
          <input
            type='text'
            placeholder='Enter your last Name'
            class='icon-input'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class='input-with-icons '>
          <i class='bi bi-envelope-fill input-icon'></i>
          <input
            type='email'
            placeholder='Enter your Email'
            class='icon-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class='input-with-icons '>
          <i class='bi bi-lock-fill input-icon'></i>
          <input
            type='password'
            placeholder='Enter your Password'
            class='icon-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='text-danger mb-1'>{error}</div>
        <div class='btn-container'>
          <button
            class='btn btn-primary  width-100'
            onClick={() => handleSubmit()}
          >
            Signup
          </button>
          <div class='link-primary' onClick={() => navigate("/login")}>
            Already have an account ?
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
