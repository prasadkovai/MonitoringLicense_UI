/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  //CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { GoogleLogin } from 'react-google-login';
//import { browserHistory } from 'react-router'

const responseGoogle = (response) => {
  //console.log(response,'Sucess');
 console.log(response,'response');
 //this.context.router.push('/admin/user-profile');
 //responseGoogle.push(<Redirect key="Register" to="/admin/user-profile" />);
 //browserHistory.push('/admin/user-profile');
 
}
const errorresponseGoogle = (response) => {
  console.log(response,'error');
}
class Login extends React.Component {
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
              <CardHeader className="px-lg-5 py-lg-5">
              <div className="text-center">
                <small><b>Log in to your account</b></small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                </FormGroup>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                     <span className="text-muted">Remember me</span> 
                  </label>
                </div> */}
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Login
                  </Button>
                </div>
                <div className="text-muted text-center mt-2 mb-3">
                <small>OR</small>
              </div>
              {/*<div className="btn-wrapper text-center">
               <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                > 
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button> 
              </div>*/}
              <center>
              <GoogleLogin
      clientId="126283259447-guhcr4q2497j4ctvvs2p7latuodho4nd.apps.googleusercontent.com"
      buttonText="Log in with Google"
      onSuccess={responseGoogle}
      onFailure={errorresponseGoogle}
      cookiePolicy={'single_host_origin'}
      
    />
    <br/>
     <br/>
       Can't log in? .
Sign up for an account
              </center>
             
            
              </Form>
            </CardHeader>
           
          </Card>
          {/* <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/auth/register"
                onClick={e => e.preventDefault()}
              >
                <small>signup</small>
              </a>
            </Col>
          </Row> */}
        </Col>
      </>
    );
  }
}

export default Login;
