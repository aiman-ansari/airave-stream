import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authReducer } from "../Reducer/authReducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
  });

  const handleSingupData = async (firstName, lastName, email, password) => {
    const getValues = { firstName, lastName, email, password };
    try {
      const res = await axios.post("/api/auth/signup", getValues);
      if (res.status === 200 || res.status == 201) {
        localStorage.setItem("token", res.data.encodedToken);
        dispatch({
          type: "signup",
          payload: res.data,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      if (error.response.status === 422) {
        toast.error("Account already exist , please login", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };

  const handleLoginData = async (email, password) => {
    const getLoginValues = { email, password };

    try {
      const res = await axios.post("/api/auth/login", getLoginValues);
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", res.data.encodedToken);
        localStorage.setItem(
          "user",
          res.data.foundUser.firstName + " " + res.data.foundUser.lastName
        );
        dispatch({
          type: "login",
          payload: res.data,
        });
        toast.success("Logged in successfully", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Email is not register", {
          theme: "colored",
          autoClose: 2000,
        });
      }
      if (error.response.status === 401) {
        toast.error("Password does not match", {
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleSingupData,
        handleLoginData,
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
