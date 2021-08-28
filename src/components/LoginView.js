import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginView = () => {
  return (
    <Row>
      <Col className="justify-content-center d-flex">
        <Card className="col-sm-8">
          <Card.Body className="text-center">
            <Card.Title className="fs-1 mb-4">Login!</Card.Title>
            <Card.Subtitle className="mb-3">
              Login to log tasks.
            </Card.Subtitle>
            <LoginForm />
            <Link to="/signup">Not a user yet? Sign up!</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );

  // return (
  //   <div className="row justify-content-center">
  //     <div className="col-sm-6 loginContainer" style={{height: '500px'}}>
  //       <div className="row">
  //         <h2 className="text-center mb-3 mt-5">Log in</h2>
  //         <form>
  //           <div className="form-floating mb-3 col-9">
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="floatingUsername"
  //               placeholder="user123"
  //               onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
  //               required
  //             />
  //             <label htmlFor="floatingUsername">Username</label>
  //           </div>
  //           <div className="form-floating mb-3 col-9">
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="floatingPassword"
  //               placeholder="supersecretpassword"
  //               onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
  //               required
  //             />
  //             <label htmlFor="floatingPassword">Password</label>
  //           </div>
  //           <Button text="Login" backgroundColor="#43AA8B" />
  //         </form>
  //         <Link to='/signup' className='h5'>Not a user yet? Sign up!</Link>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default LoginView;
