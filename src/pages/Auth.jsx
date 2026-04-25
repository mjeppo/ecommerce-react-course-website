import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { signUp, user, logout, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/")
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>Gebruiker ingelogd: {user.email}</p>}
          <button onClick={() => logout()}>Logout</button>
          <h1 className="page-title">{mode === "signup" ? " Registreren" : "Inloggen"}</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                E-mail
              </label>
              <input className="form-input" type="email" id="email" {...register("email", { required: "E-mail is verplicht" })} />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Wachtwoord
              </label>
              <input
                {...register("password", {
                  required: "Wachtwoord is verplicht",
                  minLength: {
                    value: 6,
                    message: " Wachtwoord moet uit minstens 6 tekens bestaan",
                  },
                  maxLength: {
                    value: 12,
                    message: " Wachtwoord mag maximaal 12 teken lang zijn",
                  },
                })}
                type="password"
                className="form-input"
                id="password"
              />
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>

            <button className="btn btn-primary btn-large" type="submit">
              {mode === "signup" ? " Registreren" : "Inloggen"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Heb je al een account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Inloggen
                </span>
              </p>
            ) : (
              <p>
                Nog geen account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Registreren
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
