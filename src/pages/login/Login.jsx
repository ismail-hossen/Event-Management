import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../auth_context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(ThemeContext);

  const handleForm = (e) => {
    e.preventDefault();
    login(e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        // Signed up
        toast.success("Successfully created account.", {
          duration: 3000,
          position: "bottom-right",
        });
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-normal">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-200 border rounded-md">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-white border rounded-md items-center">
          <p>
            New to EM4U?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
