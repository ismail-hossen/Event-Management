import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../auth_context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(ThemeContext);

  const handleForm = (e) => {
    e.preventDefault();
    createUser(e.target.email.value, e.target.password.value)
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
          <h1 className="text-3xl font-normal">Sign Up!</h1>
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
              <button className="btn btn-primary">Create account</button>
            </div>
          </form>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-white border rounded-md items-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
