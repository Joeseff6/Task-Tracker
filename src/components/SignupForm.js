import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SignupForm = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <Row>
      <Col className="justify-content-center d-flex">
        <Card className="col-9">
          <Card.Body>
            <Card.Title className="fs-1 text-center">Sign Up!</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // <div className="row justify-content-center">
    //   <div className="col-sm-6 signupContainer" style={{height: '500px'}}>
    //     <div className="row">
    //       <h2 className="text-center mb-3 mt-5">Sign Up</h2>
    //       <form>
    //         <div className="form-floating mb-3 col-9">
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="floatingUsername"
    //             placeholder="user123"
    //             onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
    //             required
    //           />
    //           <label htmlFor="floatingUsername">Username</label>
    //         </div>
    //         <div className="form-floating mb-3 col-9">
    //           <input
    //             type="email"
    //             className="form-control"
    //             id="floatingEmail"
    //             placeholder="name@example.com"
    //             onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
    //             required
    //           />
    //           <label htmlFor="floatingEmail">Email address</label>
    //         </div>
    //         <div className="form-floating mb-3 col-9">
    //           <input
    //             type="password"
    //             className="form-control"
    //             id="floatingPassword"
    //             placeholder="supersecretpassword"
    //             onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
    //             required
    //           />
    //           <label htmlFor="floatingPassword">Password</label>
    //         </div>
    //         <Button text="Sign Up" backgroundColor="#FF6F59" />
    //       </form>
    //       <Link to="/" className="h5">
    //         Already a user? Log in!
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignupForm;
