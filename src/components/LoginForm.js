import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-6 signupContainer">
        <div className="row">
          <h2 className="text-center mb-3 mt-5">Log in</h2>
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
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="supersecretpassword"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <Button text="Login" backgroundColor="green" color="white" />
          </form>
          <h4>Not a user yet? Sign up!</h4>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
