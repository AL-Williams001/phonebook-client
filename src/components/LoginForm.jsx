import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import personService from "../services/personService";

function LoginForm({
  user,
  username,
  password,
  setUsername,
  setPassword,
  setUser,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/");
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    loginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedPhonebookUser", JSON.stringify(res));
        personService.setToken(res.token);
        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl mb-4 text-center font-bold text-black-500">
        Login your account
      </h1>
      <form
        onSubmit={handleLogin}
        className="border-solid border-2 border-slate-500 p-4 flex flex-col gap-2 md:w-1/3 lg:mx-auto"
      >
        <div className="flex flex-col ">
          <label>Username</label>
          <input
            type="text"
            name="username"
            autoComplete="current-username"
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-solid border-2 border-slate-500 p-2 "
          />
        </div>
        <button type="submit" className="bg-green-500 p-2 text-white font-bold">
          Login
        </button>
      </form>
      <p className="text-center">
        Don't have and account? Click to{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
        .
      </p>
    </div>
  );
}

export default LoginForm;
