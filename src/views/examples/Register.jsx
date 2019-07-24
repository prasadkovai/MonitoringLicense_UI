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
  CardBody,
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
class Register extends React.Component {
  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small><b>Sign up for your account</b></small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
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
                  {/* <br/>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm-Password" type="password" />
                  </InputGroup> */}
                </FormGroup>
                {/* <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div> */}
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      {/* <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      /> */}
                     
                        <span className="text-muted">
                          {/* I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a> */}
                          By signing up, you confirm that you’ve read
and accepted our User Notice and Privacy Policy.
                        </span>
                     
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                  Sign up
                  </Button>
                </div>
              </Form>
            </CardBody>
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>OR</small>
              </div>
               {/*<div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button> 
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
      buttonText="Continue with Google"
      onSuccess={responseGoogle}
      onFailure={errorresponseGoogle}
      cookiePolicy={'single_host_origin'}
      
    />
              </center>
            </CardHeader>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
