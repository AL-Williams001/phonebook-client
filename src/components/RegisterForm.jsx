import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/userService";

function RegisterForm({ user }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/");
  }, [user, navigate]);

  const handleRegistration = (e) => {
    e.preventDefault();

    userService
      .register({ name, username, password })
      .then((_res) => {
        navigate("/login");
        setName("");
        setUsername("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl mb-4 text-center font-bold text-black-500">
        Register an account
      </h1>
      <form
        onSubmit={handleRegistration}
        className="border-solid border-2 border-slate-500 p-4 flex flex-col gap-2 md:w-1/3 lg:mx-auto"
      >
        <div className="flex flex-col ">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-solid border-2 border-slate-500 p-2 "
          />
        </div>

        <div className="flex flex-col ">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-solid border-2 border-slate-500 p-2 "
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-solid border-2 border-slate-500 p-2 "
          />
        </div>
        <button type="submit" className="bg-green-500 p-2 text-white font-bold">
          Register
        </button>
      </form>
      <p className="text-center">
        Already have and account? Click to{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
        .
      </p>
    </div>
  );
}

export default RegisterForm;
