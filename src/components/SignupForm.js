import Button from "./Button";
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-6 signupContainer">
        <div className="row">
          <h2 className="text-center mb-3 mt-5">Sign Up</h2>
          <form>
            <div className="form-floating mb-3 col-9">
              <input
                type="text"
                className="form-control"
                id="floatingUsername"
                placeholder="user123"
                required
              />
              <label htmlFor="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3 col-9">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3 col-9">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="supersecretpassword"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <Button text="Sign Up" backgroundColor="#FF6F59" color="black" />
          </form>
          <Link to='/' className='h5'>Already a user? Log in!</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
